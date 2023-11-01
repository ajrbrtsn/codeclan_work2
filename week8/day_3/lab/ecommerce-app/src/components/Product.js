import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    border: 2px solid black;
`

const Img = styled.img`
    width: 10em;
    height: 10em;
`



const Product = ({products, index, addToBasket}) => {
    return(
        <>
            <Div>
            <Img src={products.image} alt="product-image"></Img>
            <p>Name: {products.title}</p>
            <p>Description: {products.description}</p>
            <p>Price: {products.price}</p>
            <button type="submit" onClick={addToBasket} index={index}>Add to Basket</button>
            </Div>
        </>
    
    )
    }
 export default Product 