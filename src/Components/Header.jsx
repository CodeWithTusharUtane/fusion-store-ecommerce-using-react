import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {
  return (
    <nav className="w-11/12 xl:w-4/5 m-auto flex justify-between py-5">
      <h1 className="text-2xl font-semibold">
        Fusion <span className="text-rose-400">Store</span>
      </h1>
      <div>
        <ul className="fact space-x-8 text-base hidden md:flex">   
          <li className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Home</li>
          <li className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Products</li>
          <li className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">About</li>
          <li className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div className="flex space-x-8 ">
        <AiOutlineShoppingCart size={"1.5rem"} className="hover:text-rose-400"/>
        <span className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Log In</span>
        <span className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Sign Up</span>
      </div>
    </nav>
  );
};

export default Header;
