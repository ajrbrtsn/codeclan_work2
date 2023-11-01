import { useState, useEffect } from "react"

const TunesContainer = () => {
    const[songs, setSongs] = useState([])

    useEffect(() => {
        getSongs()
    }, [])

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(data => setSongs(data.feed.entry))
    }

    return(
        <h1>Hi Welcome</h1>
        // <SongList
    )
}

export default TunesContainer