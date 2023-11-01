import React from 'react'
import Film from './Films';

const FilmList = ({films}) => {
    const filmNodes = films.map((film) => {
        return(
            <Film title={film.name} url={film.url} key={film.id}/>
        )
    })
    return (
        <>
        {filmNodes}
        </>
    )
}

    export default FilmList