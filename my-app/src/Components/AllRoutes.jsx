import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from '../Pages/Cart'
import HomePage from '../Pages/HomePage'
import Product from '../Pages/Product'
import Products from '../Pages/Products'
import Singleproduct from '../Pages/Singleproduct'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/home'  element={<HomePage/>}/>
        <Route path='/'  element={<Products/>}/>
      
        {/* <Route path='/Product'  element={<Product/>}/> */}
        <Route path='/:id'  element={<Singleproduct/>}/>
        <Route path='/Cart'  element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes
