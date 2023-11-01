import React, {useState, useEffect} from 'react'
import NewsList from '../component/NewsList';

const NewsContainer = () => {

    const [news, setNews] = useState([])

    const fetchData = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then( res => res.json())
        .then( data => {
            const slicedData = data.slice(0,20);
            const newData = slicedData.map((storyId) => {
                return fetch ('https://hacker-news.firebaseio.com/v0/item/{storyId}.json').then( res => res.json())
            })
            Promise.all(newData)
            .then(data => setNews(data))
        })
        
    }

    useEffect (() => {
        fetchData()
    })

    return(
        <>
        <h2>I am container</h2>
        <NewsList/>
        </>
    );
};

export default NewsContainer;