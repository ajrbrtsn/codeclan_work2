import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Product from './components/Product'
import ShopContainer from './containers/ShopContainer';
import Basket from './components/Basket';
import ProductList from './components/ProductList';

const App = () => {

  return (
    <>
      <Router>

         <Routes> 

          <Route path='/' element={<ShopContainer/>} />
          <Route path='/productList' element={<ProductList/>} />
          <Route path='/basket' element={<Basket/>} />

     </Routes>
    </Router>

  </>
  )
}

export default App;
