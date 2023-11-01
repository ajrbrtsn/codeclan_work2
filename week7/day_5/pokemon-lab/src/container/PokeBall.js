import {useState, useEffect} from 'react'
import Pokemon from '../components/Pokemon'
import PokemonDetails from '../components/PokemonDetails'

const PokeBall = () => {
    const [pokemon, setPokemon] = useState ([])

    useEffect (() => {
        getPokemon();
    }, [])

    const getPokemon = (() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(pokemon => setPokemon(pokemon))
    })

    return (
        <div className='PokeBall'>
            <Pokemon/>
            <PokemonDetails/>
        </div>
    )
}

export default PokeBall