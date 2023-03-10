import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import SingleProductPage from './pages/SingleProductPage'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/contact'  element={<Contact/>} />
        <Route path='/products'  element={<Products/>} />
        <Route path='/singleproductpage/:id'  element={<SingleProductPage/>} />
        <Route path='/cart'  element={<Cart/>} />
        <Route path='*'  element={<ErrorPage/>} />
        <Route path='/login'  element={<LogIn/>} />
        <Route path='/signup'  element={<SignUp/>} />
        </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App
