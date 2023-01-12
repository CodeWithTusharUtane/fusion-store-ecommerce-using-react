import React from "react";
import heroImg from '../Assests/hero-img.png'
const HeroSection = () => {
  return (
   <div>
    <div className="w-11/12 xl:w-4/5 xl:h-[350px] m-auto bg-stone-200 rounded-xl md:mb-5 xl:flex">
      <div className="xl:my-5">
        <h2 className="p-4 text-2xl  font-semibold">Trending Product in 2022</h2> 
        <h2 className="text
        text-3xl capitalize  px-4 font-bold xl:text-4xl ">make your interior more minimalistic & Modern</h2>
        <h5 className="capitalize px-4 py-3 xl:py-[5rem] xl:text-2xl">Modern Sofas, Artificial Plants, Lamps, and many more Room decor at low and affordable cost. Get this amazing deal today before price hike</h5>
      </div>
      <img src={heroImg} alt="" className=""/>
    </div>
   </div>
  );
};

export default HeroSection;
