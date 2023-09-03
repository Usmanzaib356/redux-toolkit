import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Header from './Components/Header'
import './index.css'
function App() {
  return (
    <>
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App