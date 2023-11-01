import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import ProductList from '../components/ProductList'
import Basket from '../components/Basket'
import NavBar from '../components/NavBar'

const ShopContainer = ( ) => {

    const [products, setProducts] = useState (['']);
    const [basketItems, setBasket] = useState (['']);

    useEffect( ()=> {
        getProducts();
    }, [])
       
    const getProducts = (() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => setProducts(data))
        
    })

    const addToBasket = (itemToAdd) => {
        const updatedBasket = [...basketItems, itemToAdd]
        setBasket(updatedBasket)
    }

    // const addToBasket = (event) => {
    //     const myBasketItems = [{products.image, products.title, products.description, products.price}];
    //     // const myBasketItems = [{index}]
    //     setBasket.push(myBasketItems)
    //     console.log(event)
        // }

        // const myBasketItems = [{products.image, products.title, products.description, products.price}];
        // const productImage = {products.image}
        // const productTitle = {products.title}
        // const productDescription = {products.description}
        // const productPrice = {produts.price}
        // const productObject = {products.image, products.title, products.description, products.price}
        // myBasketItems.push(produtObject);
    
        
    return(
        <>
        <NavBar />
        <h1> Container </h1>
        <ProductList products={products} addToBasket={addToBasket}/>
        <Basket />
        </>
    );

}

export default ShopContainer;