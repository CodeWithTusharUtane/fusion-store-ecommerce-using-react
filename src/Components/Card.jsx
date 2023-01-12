import React from "react";
// watch images
import watch1 from "../Assests/watch1.webp";
import watch2 from "../Assests/watch2.webp";
import watch3 from "../Assests/watch3.webp";
import watch4 from "../Assests/watch6.webp";
// phone images
import iphone11 from "../Assests/iphone11.webp";
import iphone12 from "../Assests/iphone12.webp";
import iphone13 from "../Assests/iphone13.webp";
import iphone14 from "../Assests/iphone14.webp";
// chair images
import armChair1 from "../Assests/arm-chair-01.jpg";
import armChair2 from "../Assests/arm-chair-02.jpg";
import armChair3 from "../Assests/arm-chair-03.jpg";
import armChair4 from "../Assests/counter-timer-img.png";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-4/5 m-auto space-y-10 p-2">
      <h2 className="text-center text-3xl font-semibold pt-4 xl:text-6xl bg-gray-300 pb-2 rounded-lg uppercase mt-4 ">
        Trending Smartwatches
      </h2>
      <div className="products grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 -content-center  ">
        <div className="product h-[370px] space-y-2 border-2 border-black  xl:my-6 xl:py-3 hover:p-5">
          <img className="w-full h-4/5 object-cover" src={watch1} alt="" />
          <p className="font-semibold text-gray-600 px-3">
            Samsung Galaxy Watch 5
          </p>
          <h1 className="text-xl font-semibold px-3">₹ 27,999.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  md:my-6 hover:p-5">
          <img className="w-full h-4/5 object-cover" src={watch2} alt="" />
          <p className="font-semibold text-gray-600 px-3">
            Samsung Galaxy Watch 5 Pro
          </p>
          <h1 className="text-xl font-semibold px-3">₹ 44,999.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3 md:my-6 hover:p-5">
          <img className="w-full h-4/5 object-cover" src={watch3} alt="" />
          <p className="font-semibold text-gray-600 px-3">
            Samsung Galaxy Watch 4 LTE
          </p>
          <h1 className="text-xl font-semibold px-3">₹ 20,999.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3 md:my-6 hover:p-5">
          <img className="w-full h-4/5  object-cover" src={watch4} alt="" />
          <p className="font-semibold text-gray-600 px-3">
            Samsung Galaxy Watch 4
          </p>
          <h1 className="text-xl font-semibold px-3">₹23,999.00</h1>
        </div>
        <h2 className="text-center text-3xl font-semibold pt-4  xl:text-6xl xl:col-span-4 bg-gray-300 pb-2 rounded-lg uppercase ">
          Best Deals on Smartphone
        </h2>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img className="w-full h-4/5  px-6" src={iphone12} alt="" />
          <p className="font-semibold text-gray-600 px-3">Iphone 12</p>
          <h1 className="text-xl font-semibold px-3">₹ 59,999.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img className="w-full h-4/5  px-6" src={iphone13} alt="" />
          <p className="font-semibold text-gray-600 px-3">Iphone 13</p>
          <h1 className="text-xl font-semibold px-3">₹ 69,990.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img className="w-full h-4/5  px-6" src={iphone14} alt="" />
          <p className="font-semibold text-gray-600 px-3">Iphone 14</p>
          <h1 className="text-xl font-semibold px-3">₹ 83,990.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img className="w-full h-4/5 px-6" src={iphone11} alt="" />
          <p className="font-semibold text-gray-600 px-3">Iphone 11</p>
          <h1 className="text-xl font-semibold px-3">₹ 39,999.00</h1>
        </div>
        <h2 className="text-center text-3xl font-semibold pt-4 xl:text-6xl xl:col-span-4 bg-gray-300 pb-2 rounded-lg uppercase ">
          Home Essentials
        </h2>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img className="w-full h-4/5 px-6" src={armChair1} alt="" />
          <p className="font-semibold text-gray-600 px-3">Fluffy Sheep Sofa</p>
          <h1 className="text-xl font-semibold px-3">₹ 11,999.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img className="w-full h-4/5 px-6" src={armChair2} alt="" />
          <p className="font-semibold text-gray-600 px-3">Faux Velvet Sofa</p>
          <h1 className="text-xl font-semibold px-3">₹ 9,999.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4 py-3  hover:p-5">
          <img className="w-full h-4/5 px-6" src={armChair3} alt="" />
          <p className="font-semibold text-gray-600 px-3">Fluffy Velvet Sofa</p>
          <h1 className="text-xl font-semibold px-3">₹ 11,999.00</h1>
        </div>
        <div className="product h-[370px] space-y-2 border-2 border-black my-4   hover:p-5 ">
          <img className="w-full h-4/5 px-6" src={armChair4} alt="" />
          <p className="font-semibold text-gray-600 px-3">Modern Arm Sofa </p>
          <h1 className="text-xl font-semibold px-3">₹ 13,999.00</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
