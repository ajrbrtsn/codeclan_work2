import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()
    const handleUsers = () => {
        navigate('/users')
    }
    return (
        <>
            <ul>
                <li>

                    <a href='/'>Home</a>
                </li>
                <li>
                     <p onClick={handleUsers}>User Stats</p>
                </li>
            </ul>
        </>
    )
}

export default NavBar;