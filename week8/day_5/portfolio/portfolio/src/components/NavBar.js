import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: yellow;
  color: yellow
  padding: 10px 20px;
  border: 2px solid ;
  &:hover {
    background: yellow;
  }
  &:active {
    background: yellow;
  }
  `

const NavBar = () => {
    return (
        <>
            <ul>
                <li>
                    <a href ="/">Home</a>
                </li>
                <li>
                    <a href ='portfolioList'> Portfolio</a>
                </li>
            </ul>
        </>
    
    )
}

export default NavBar;