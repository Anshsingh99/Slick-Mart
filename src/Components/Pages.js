import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home';
import Items from './Items';
import Cart from './Cart';
import Contact from './Contact';
const Pages = (props) => {
  return (
    <>
       <Routes>
        <Route path='/' element={<Home prod={props.prod} view={props.view} close={props.close} setClose={props.setClose} details={props.details} addToCart={props.addToCart} />}/>
        <Route path='/items' element={<Items cat={props.cat} setCat={props.setCat} prod={props.prod} details={props.details} 
        search={props.search} view={props.view} close={props.close} setClose={props.setClose} addToCart={props.addToCart} />}/>
        <Route path='/cart' element={<Cart cart={props.cart} setCart={props.setCart} />}/>
        <Route path='Contact' element={<Contact/>}/>
       </Routes> 
    </>
  )
}

export default Pages
