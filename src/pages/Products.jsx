import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductData from "./ProductData";
import { NavLink } from "react-router-dom";
const Products = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 m-auto ">
        <div className="text-black py-3 ">
          <ul className="flex gap-5 text-xl justify-center  m-3 md:h-16 md:items-center md:text-3xl md:gap-28 ">
            <li className="hover:cursor-pointer hover:text-rose-400 uppercase border-2 border-black md:px-3 hover:bg-black">All</li>

            <li className="hover:cursor-pointer hover:text-rose-400 uppercase border-2 border-black md:px-3 hover:bg-black">Phones</li>

            <li className="hover:cursor-pointer hover:text-rose-400 uppercase border-2 border-black md:px-3 hover:bg-black">Watches</li>

            <li className="hover:cursor-pointer hover:text-rose-400 uppercase border-2 border-black md:px-3 hover:bg-black">Sofa</li>
          </ul>
        </div>
      </div>
      <div className="w-4/5 m-auto space-y-10 p-2">
        <div className="products grid xl:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-4 -content-center  ">
          <NavLink to="/SingleProductPage/01">
            
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
          <NavLink to="/SingleProductPage/02">
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
          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3 md:my-6 hover:p-5">
            <img
              className="w-full h-4/5 object-cover"
              src={ProductData[2].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[2].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[2].price}
            </h1>
          </div>
          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3 md:my-6 hover:p-5">
            <img
              className="w-full h-4/5  object-cover"
              src={ProductData[3].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[3].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[3].price}
            </h1>
          </div>

          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
            <img
              className="w-full h-4/5  px-6"
              src={ProductData[4].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[4].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[4].price}
            </h1>
          </div>
          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
            <img
              className="w-full h-4/5  px-6"
              src={ProductData[5].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[5].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[5].price}
            </h1>
          </div>
          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
            <img
              className="w-full h-4/5  px-6"
              src={ProductData[6].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[6].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[6].price}
            </h1>
          </div>
          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
            <img
              className="w-full h-4/5 px-6"
              src={ProductData[7].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[7].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[7].price}
            </h1>
          </div>

          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
            <img
              className="w-full h-4/5 px-6"
              src={ProductData[8].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[8].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[8].price}
            </h1>
          </div>
          <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
            <img
              className="w-full h-4/5 px-6"
              src={ProductData[9].image}
              alt=""
            />
            <p className="font-semibold text-gray-600 px-3">
              {ProductData[9].name}
            </p>
            <h1 className="text-xl font-semibold px-3">
              {ProductData[9].price}
            </h1>
          </div>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
