import React from 'react'

const Pokemon = ({pokemon}) => {

    const pokemonItems = pokemon.map((pokemon, index) => {
        return <li> pokemon={pokemon} key={index} </li>
    })

    return (
        <>
        {pokemonItems}
        </>
    )
}


export default Pokemon;