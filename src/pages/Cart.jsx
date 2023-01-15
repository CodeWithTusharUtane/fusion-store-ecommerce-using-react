import React, { createContext } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SingleProductPage from "./SingleProductPage";
import { useCartContext } from "./CartContext";

import {MdOutlineDeleteOutline} from 'react-icons/md'
const Cart = () => {
  const { cart } = useCartContext();
  const {removeItem}  = useCartContext();
  // console.log(cart);

  return (
    <>
      <Header />
      <div className="">
        <div className="text-3xl font-bold text-center">
          Your Cart Items are
        </div>
        <div>
          {cart.map((curElement) => {
            const { name, price, image, id } = curElement;
            console.log(`name is: ${name} id is: ${id}`)
            return (
              <>
                <div className="container" key={id}>
                  <div className="w-screen border-2 border-purple-400 my-4 md:flex items-center uppercase justify-center md:border-none ">
                    <div className="w-[140px] my-5 m-auto md:my-0 md:mx-0 md:flex">
                      <img src={image} alt="" />
                    </div>
                    <div className="text-center text-2xl font-bold m-5 hover:text-purple-600">
                      {name}
                    </div>
                    <div className="text-center text-2xl font-bold m-5 hover:text-purple-600">
                      price: {price}
                    </div>
                    <div>
                      <MdOutlineDeleteOutline size={40} className=" m-auto  hover:text-purple-600" onClick={()=>removeItem(id)}/>
                    </div>
                  </div>
                  
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
