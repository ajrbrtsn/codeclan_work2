import React from 'react'
import Countries from './Countries'
import CountryDetails from './CountryDetails'


const CountryList = ({countries, onCountryClicked}) => {

    const countryItems = countries.map((country, index) => {
        return <Countries country={country} key={index} onCountryClicked={onCountryClicked}/>
    })

    return(
        <>
        <ul>
         {countryItems}
        </ul>
        </>
    )
}

export default CountryList