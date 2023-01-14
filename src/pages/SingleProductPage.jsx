import React,{useState} from 'react'
import ProductData from './ProductData';
import { useParams } from 'react-router-dom'


const SingleProductPage = () => {
  const {id} = useParams();
  const product = ProductData.find(item => item.id ===id)
  
  const { name, price, image} = product
    
  return (
    <>
    <div className="">

      
      Name of the Product {name}
      Price of the product is: {price}
      image of the product is:
      <img src={image} alt="" />

    </div>
    
    </>
      
  )
}

export default SingleProductPage
