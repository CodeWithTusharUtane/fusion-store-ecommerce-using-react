import React,{ useState,} from 'react'
import ProductData from './ProductData';
import { NavLink, useParams } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {useCartContext} from './CartContext'



const SingleProductPage = () => {

  const {addToCart} = useCartContext();





  // const [cartData, setCartData] = useState([])sjdflkj 
  const {id} = useParams();
  const product = ProductData.find(item => item.id ===id)
  
  const { name, price, image, rating} = product
  // const getCartInfo = (name, price) => {
  //   setCartData([ ...cartData,name, price])
  //   alert("Item added to cart!!")
  // }
  // const cData = cartData;  

  return (
    <>
    
    <Header/>
    <div className="md:m-5">
      <div className="w-screen md:flex md:justify-center md:items-center">
         <div className='md:mr-16 text-center'>
          <img src={image} alt="" />
         </div>
         <div className='mt-5 md:w-[500px]'>
          <h3 className='text-center text-2xl font-bold uppercase md:text-5xl md:text-start'>{name}</h3>
          <div>
            <p className='text-xl font-bold mt-5 mb-2'>Product Description:</p>
            <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iste quam laborum, velit quibusdam nulla quisquam mollitia perspiciatis. Culpa, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab ipsum, hi nam non alias mollitia ducimus pariatur asperiores tempore qui deserunt tempora delectus accusantium aperiam quidem iste? Autem temporibus ex et at aliquid. Voluptatem quo, illo vel eum est ratione quibusdam numquam animi ullam?</p>
          </div>
          <div className='text-2xl mt-4 font-bold text-center md:text-start'>PRICE: {price}</div>
          <div className='mt-5 text-center md:text-start'>
            <NavLink to="/cart" onClick={()=>addToCart(product)}>
            <button className='bg-rose-400 px-8 py-2 rounded-full text-2xl text-center mb-5'>Add to cart</button>

            </NavLink>
          </div>
         </div>
      </div>
    </div>
    <Footer/>
    </>
      
      )
    }
    
    
export default SingleProductPage;

