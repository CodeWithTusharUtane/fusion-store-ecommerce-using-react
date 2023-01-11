import React from "react";
import xiiaomi5g from "../Assests/xiaomi5g.webp";
const HeroSection = () => {
  return (
    <div className="">
      <img src={xiiaomi5g} alt="" />
      <div className="absolute text-white top-11 text-xl left-3 md:flex md:absolute md:text-white md:top-28  md:text-8xl md:left-14">XIAOMI 11i</div>
      <div className="absolute text-white top-[62px] text-lg left-3 md:flex md:absolute md:text-white md:top-52 md:text-5xl md:left-14">Hypercharge 5G</div>
      <div className="absolute text-white top-[85px] text-base left-3 md:flex md:absolute md:text-white md:top-[270px] md:text-3xl md:left-14">India's Fastest Charging Smartphone</div>
      <div className="absolute text-white top-[110px] text-sm left-3 md:flex md:absolute md:text-white md:top-[350px] md:text-3xl md:left-14 ">From ₹26,999 <strike className="text-xs md:text-2xl ">₹31,999</strike></div>
      <div className="absolute  bg-white top-[140px] px-1 text-xs left-5 p-1 rounded-full hover:bg-gray-300 md:flex md:absolute  md:bg-white md:top-[410px] md:px-4 md:text-xl md:left-14 md:p-2 md:rounded-full md:hover:bg-gray-300">Buy Now </div>
    </div>
  );
};

export default HeroSection;
