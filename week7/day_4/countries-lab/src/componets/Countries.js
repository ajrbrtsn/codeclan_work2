import React from 'react'

const Countries = ({country, onCountryClicked}) => {

    const handleClick = () => {
        onCountryClicked(country)
    }

    return <li onClick={handleClick}> {country.name.common}</li>
    
} 

export default Countries