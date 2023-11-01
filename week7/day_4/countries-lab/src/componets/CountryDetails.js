import React from 'react'

const CountryDetails = ({country, onCountryClicked}) => {

    return(
       <div className='country-dtails'>
          The population {country.name.common} is {country.population} {country.fifa} {country.flag}
       </div>
    )
}

export default CountryDetails