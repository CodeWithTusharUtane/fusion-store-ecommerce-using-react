import React from "react";
import { filterResult } from "../pages/SingleProductPage";
import ProductData from "../pages/ProductData";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="w-4/5 m-auto space-y-10 p-2">
      <h2 className="text-center text-3xl font-semibold pt-4 xl:text-6xl  pb-2 rounded-lg uppercase mt-4 ">
        Trending Smartwatches
      </h2>

      <div className="products grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 -content-center  ">
        <NavLink to="/SingleProductPage/1">
          <div className="product h-[370px] space-y-2 border-2 border-black  xl:my-6 xl:py-3 hover:p-5">
            <img
              className="w-full h-4/5 object-cover"
              src={ProductData[0].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[0].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[0].price}
            </h1>
          </div>
        </NavLink>
        <NavLink to="/SingleProductPage/2">
          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  md:my-6 hover:p-5">
            <img
              className="w-full h-4/5 object-cover"
              src={ProductData[1].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[1].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[1].price}
            </h1>
          </div>
        </NavLink>
        <NavLink to="/SingleProductPage/3">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3 md:my-6 hover:p-5">
          <img
            className="w-full h-4/5 object-cover"
            src={ProductData[2].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[2].name}
          </p>
          <h1 className="text-xl font-semibold px-3">{ProductData[2].price}</h1>
        </div>
        </NavLink>
        <NavLink to="/SingleProductPage/4">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3 md:my-6 hover:p-5">
          <img
            className="w-full h-4/5  object-cover"
            src={ProductData[3].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[3].name}
          </p>
          <h1 className="text-xl font-semibold px-3">{ProductData[3].price}</h1>
        </div>
        </NavLink>
        <h2 className="text-center text-3xl font-semibold pt-4  xl:text-6xl xl:col-span-4  pb-2 rounded-lg uppercase ">
          Best Deals on Smartphone
        </h2>
        <NavLink to="/SingleProductPage/5">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img
            className="w-full h-4/5  px-6"
            src={ProductData[4].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[4].name}
          </p>
          <h1 className="text-xl font-semibold px-3">{ProductData[4].price}</h1>
        </div>
        </NavLink>
        <NavLink to="/SingleProductPage/6">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img
            className="w-full h-4/5  px-6"
            src={ProductData[5].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[5].name}
          </p>
          <h1 className="text-xl font-semibold px-3">{ProductData[5].price}</h1>
        </div>
        </NavLink>
        <NavLink to="/SingleProductPage/7">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img
            className="w-full h-4/5  px-6"
            src={ProductData[6].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[6].name}
          </p>
          <h1 className="text-xl font-semibold px-3">{ProductData[6].price}</h1>
        </div>
        </NavLink>
        <NavLink to="/SingleProductPage/8">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img
            className="w-full h-4/5 px-6"
            src={ProductData[7].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[7].name}
          </p>
          <h1 className="text-xl font-semibold px-3">{ProductData[7].price}</h1>
        </div>
        </NavLink>
        
        <h2 className="text-center text-3xl font-semibold pt-4 xl:text-6xl xl:col-span-4  pb-2 rounded-lg uppercase ">
          Home Essentials
        </h2>
        <NavLink to="/SingleProductPage/9">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img
            className="w-full h-4/5 px-6"
            src={ProductData[8].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[8].name}
          </p>
          <h1 className="text-xl font-semibold px-3">{ProductData[8].price}</h1>
        </div>
        </NavLink>
        <NavLink to="/SingleProductPage/10">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img
            className="w-full h-4/5 px-6"
            src={ProductData[9].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[9].name}
          </p>
          <h1 className="text-xl font-semibold px-3">{ProductData[9].price}</h1>
        </div>
        </NavLink>
        <NavLink to="/SingleProductPage/11">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img
            className="w-full h-4/5 px-6"
            src={ProductData[10].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[10].name}
          </p>
          <h1 className="text-xl font-semibold px-3">
            {ProductData[10].price}
          </h1>
        </div>
        </NavLink>
        <NavLink to="/SingleProductPage/12">
        <div className="product h-[370px] space-y-2 border-2 border-black my-4   hover:p-5 ">
          <img
            className="w-full h-4/5 px-6"
            src={ProductData[11].image}
            alt=""
          />
          <p className="font-semibold text-gray-600 px-3">
            {ProductData[11].name}
          </p>
          <h1 className="text-xl font-semibold px-3">
            {ProductData[11].price}
          </h1>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
