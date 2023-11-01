import React, {useState, useEffect} from 'react'
import CountryList from '../componets/CountryList'
import CountryDetails from '../componets/CountryDetails';

    const CountryContainer = () => {

    const [countries, setCountries] = useState ([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect (()=>{
      getCountries()
    }, [])
  
    const getCountries = () => {
      fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(country=> setCountries(country))
    }

    const onCountryClicked = (country) => {
        setSelectedCountry(country)
    }

    const totalPopulation = countries.reduce((total, country) => {
        return total + country.population
    }, 0)

    return(
        <>
        <p>Total Population is  {totalPopulation}</p>
        <CountryList countries={countries} onCountryClicked={onCountryClicked}/>
        {selectedCountry ? <CountryDetails country={selectedCountry}/>: null}
        </>
    )
}   
    

export default CountryContainer