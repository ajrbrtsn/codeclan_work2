import React from 'react'

const CountryDetail = ({country}) => {

    return(
        <div className="country-detail">
            The capital of {country.flag} is {country.fifa}
        </div>
    )

}

export default CountryDetail