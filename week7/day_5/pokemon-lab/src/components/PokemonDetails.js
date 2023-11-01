import React from 'react'

const PokemonDetails = ({pokemon}) => {

    return(
        <div className='pokemon-details'>
             {pokemon.name} {pokemon.abilities}
        </div>
    )

}

export default PokemonDetails