import React from 'react'
import Product from '../components/Product'

const ProductList = ({products, addToBasket}) => {

    const productNodes = products.map((products, index) => {
        return <Product products={products} key={index} addToBasket={addToBasket}/>
    })


    return (
        <>
        <div>
        {productNodes}
        </div>
        </>
    )

}

export default ProductList