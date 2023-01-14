import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductData from "./ProductData";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState(ProductData);
  const [changeId, setChangeId] = useState();
  const filterResult = (CatItem) => {
    const result = ProductData.filter((curData)=>{
      return curData.category===CatItem;
    })
    setData(result)
  }
  return (
    <>
      <Header />
      <div className="w-4/5 m-auto xl:border-2 xl:border-black ">
        <div className="text-black py-3 ">
          <ul className="flex flex-wrap  gap-5 text-xl justify-center  m-3 md:h-16 md:items-center md:text-3xl md:gap-5 ">
            <NavLink className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
            <li className="hover:cursor-pointer hover:text-white uppercase border-2 border-black md:px-3 hover:bg-black" onClick={()=>setData(ProductData)}>
              All
            </li>
            </NavLink>
            <NavLink className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
            <li className="hover:cursor-pointer hover:text-white uppercase border-2 border-black md:px-3 hover:bg-black" onClick={()=>filterResult("Phone")}>
              Phones
            </li>
            </NavLink>
            <NavLink className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
            <li className="hover:cursor-pointer hover:text-white uppercase border-2 border-black md:px-3 hover:bg-black" onClick={()=>filterResult("Watch")}>
              Watches
            </li>
            </NavLink>
            <NavLink className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
            <li className="hover:cursor-pointer hover:text-white uppercase border-2 border-black md:px-3 hover:bg-black" onClick={()=>filterResult("Sofa")}>
              Sofa
            </li>
            </NavLink>
            <NavLink className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
            <li className="hover:cursor-pointer hover:text-white uppercase border-2 border-black md:px-3 hover:bg-black" onClick={()=>filterResult("Laptop")}>
              Laptop
            </li>
            </NavLink>
            <NavLink className={({ isActive }) =>
    isActive ? 'text-black font-bold' : ''
  }>
            <li className="hover:cursor-pointer hover:text-white uppercase border-2 border-black md:px-3 hover:bg-black" onClick={()=>filterResult("tablet")}>
              Tablet
            </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="w-4/5 m-auto space-y-10 p-2">
        <div className="products grid xl:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-4 -content-center  ">
          {data.map((item) => {
            const { id, name, price, image } = item;
            const link = `/SingleProductPage/${id}`
            return (
              <>
              
              <NavLink to={link}>
                <div
                  className="product h-[370px] space-y-2 border-2 border-black  xl:my-6 xl:py-3 p-5"
                  key={id}
                >
                  <img
                    className="w-full h-4/5"
                    src={image}
                    alt=""
                  />
                  <p className="font-semibold text-gray-600 px-3">{name}</p>
                  <h1 className="text-xl font-semibold px-3">{price}</h1>
                </div>
                </NavLink>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;

