import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [message, setMessage] = useState()

  useEffect(() => {
    fetch("http://localhost:9000/")
    .then(res => res.json())
    .then(data => setMessage(data.message))
  }, [])

  return (
    <h1>The server said: {message}</h1>
  );
}

export default App;