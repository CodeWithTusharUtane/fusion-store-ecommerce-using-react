import React from "react";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="w-11/12 xl:w-4/5 m-auto flex justify-between py-5">
      <h1 className="text-2xl font-semibold">
        Fusion <span className="text-rose-400">Store</span>
      </h1>
      <div>
        <ul className="fact space-x-8 text-base  hidden md:flex">
          <NavLink to='/'  className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
          <li className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Home</li>
          </NavLink>
          <NavLink to='/products' className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }> 
          <li className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Products</li>
          </NavLink>
          <NavLink to='/about'  className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
          <li className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">About</li>
          </NavLink>
          <NavLink to='/contact'  className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
          <li className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Contact Us</li>
          </NavLink>
        </ul>
      </div>
      <div className="flex space-x-8 ">
        <NavLink to="/cart" className={({ isActive }) =>
    isActive ? 'text-rose-300 font-bold' : ''
  }>
        <AiOutlineShoppingCart size={"1.5rem"} className="hover:text-rose-400"/>
        </NavLink>
        <NavLink to="/login" className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
        <span className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Log In</span>
        </NavLink>
        <NavLink to="/signup" className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
        <span className="hover:text-rose-400 hover:underline hover:underline-offset-8 cursor-pointer">Sign Up</span>
        </NavLink>
      </div>
    </nav>
    <div className="text-rose-400 py-3 md:hidden">
        <ul className="flex gap-4 text-xl justify-center">
          <NavLink to="/" className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
          <li>Home</li>
          </NavLink>
          <NavLink to="/products" className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
          <li>Products</li>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
          <li>About Us</li>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
          <li>Contact Us</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Header;
