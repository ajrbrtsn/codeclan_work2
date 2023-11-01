import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import PirateList from '../components/pirates/PirateList';
import PirateDetail from '../components/pirates/PirateDetail';
import PirateForm from '../components/pirates/PirateForm';
import PirateFormEdit from '../components/pirates/PirateFormEdit';


const PirateContainer = () => {

  const [pirates, setPirates] = useState([])
  const [ships, setShips] = useState([])
  const [raids, setRaids] = useState([])

  useEffect(() => {
    // TODO update to use API request
    
    const piratePromise = fetch('/api/pirates').then(res => res.json())
    const shipPromise = fetch('/api/ships').then(res => res.json())
    const raidPromise = fetch('/api/raids').then(res => res.json())

    Promise.all([piratePromise, shipPromise, raidPromise])
      .then((data) => {
        setPirates(data[0])
        setShips(data[1])
        setRaids(data[2])
      })
  }, [])

  const findPirateById = (id) => {
    return pirates.find((pirate) => {
      return pirate.id === parseInt(id);
    })
  }

  const PirateDetailWrapper = () => {
    const { id } = useParams();
    let foundPirate = findPirateById(id)
    return <PirateDetail pirate={foundPirate} handleDelete={handleDelete} />;
  };

  const handleDelete = (id) => {
    fetch("/api/pirates/" + id ,{
      method: "DELETE"
    })
    window.location = '/pirates';
  }

  const handleUpdate = (pirate) => {
    fetch('/api/pirates/' + pirate.id, {  //need to add pirate.id because backend looking out for this
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(pirate)
    })
    window.location = '/pirates'
  };
  

  // TODO: use API to create pirate
  const handlePost = (pirate) => {
    fetch('/api/pirates', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(pirate)
    })
    window.location = '/pirates'
  };

  const PirateFormEditWrapper = () => {
    const {id} = useParams(); //will extract id from url
    let foundPirate = findPirateById(id);
    return <PirateFormEdit ships={ships}  pirate={foundPirate} onEdit={handleUpdate}/>
  }

  return (
    <Routes>
      <Route path="/new" element={
        <PirateForm ships={ships} onCreate={handlePost} />
      } />
      <Route path="/:id/edit" element={<PirateFormEditWrapper/>}/>
      <Route path="/:id" element={
        <PirateDetailWrapper />
      } />
      <Route path="/" element={<PirateList pirates={pirates} />} />
    </Routes>
  )
}



export default PirateContainer;
