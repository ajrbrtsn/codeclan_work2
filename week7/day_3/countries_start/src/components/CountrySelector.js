import React from 'react'
import OptionItem from './OptionItem'

// Country Selector renders the Selector 
const CountrySelector = ({countries, onCountrySelected}) => {

    // Creates an OptionItem componenet for each country
    const countryOptions = countries.map ((country, index) => {
        return <OptionItem key={index} country={country}  index={index}/>
    })


    const handleChange = (event) => {
        const chosenCountry = countries[event.target.value]
        onCountrySelected(chosenCountry)
    }
    
    return(
        <select defaultValue='' onChange={handleChange}>
            <option value="" selected>What's the capital of?</option>
            {countryOptions}
        </select>
    )
}

export default CountrySelector