import React from 'react'

const Film = ({title, url}) => {
    return(
        <>
        <h2> <a href={url}>{title}</a>
        </h2>
        </>
    )
}

export default Film