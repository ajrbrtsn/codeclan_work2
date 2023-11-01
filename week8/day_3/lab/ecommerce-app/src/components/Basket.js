import React from 'react'
import Product from './Product'


const Basket = ({basket}) => {


    const basketNodes = basket.map((basket, index) => {
        return <Basket basket={products} key={index} addToBasket={addToBasket}/>
    
    
    return(
        <>
        <h2> Basket </h2>
        </>
    )

}

export default Basket