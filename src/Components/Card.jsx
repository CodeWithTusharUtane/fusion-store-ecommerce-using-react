import React from 'react'
import card1 from '../Assests/card1.jpeg'
import card2 from '../Assests/card2.jpeg'
import card3 from '../Assests/card3.jpeg'
const Card = () => {
  return (
    <div className='md:flex md:space-x-10 md:pl-[89px] md:pt-10 md:pb-10 md:bg-black'>
      <img src={card1} alt="" className='border-b-2 border-t-2 border-b-white md:flex md:rounded-3xl md:border-2 md:border-white md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]'/>
        <div>
          <h4 className='absolute top-[200px] left-4 text-white text-lg  md:absolute md:top[0px] md:left[3rem]'>IPAD PRO</h4>
          <h2 className='absolute top-[240px] left-8 text-white text-3xl md:absolute md:top[653px] md:left[3rem]'>Supercharged by M2.</h2>
          <h3 className='absolute top-[275px] left-8 text-white text-2xlmd:absolute '>From ₹81900.00*</h3>
        </div>
        <img src={card2} alt="" className='border-b-2 border-b-white md:flex md:rounded-3xl md:border-2 md:border-white md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]'/>
        <div>
          <h4 className='absolute top-[685px] left-4 text-white text-lg uppercase md:absolute md:flex  md:top[589px] md:left[38rem]'>Iphone 14 pro</h4>
          <h2 className='absolute top-[710px] left-8 text-white text-3xl md:absolute md:flex md:top[617px] md:left[39rem]'>Pro.Beyond.</h2>
          <h3 className='absolute top-[745px] left-8 text-white text-2xl md:absolute md:flex md:top[657px] md:left[39rem]'>From ₹129900.00*</h3>
        </div>
        <img src={card3} alt="" className='border-b-2 border-b-white md:flex md:rounded-3xl md:border-2 md:border-white md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]' />
        <div>
          <h4 className='absolute top-[1170px] left-4 text-white text-lg uppercase md:top[589px] md:absolute md:left[45rem]'>APPLE WATCH SERIES 8</h4>
          <h2 className='absolute top-[1215px] left-8 text-white text-3xl md:absolute md:top[630px] md:left[45rem]'>A healthy leap ahead.</h2>
          <h3 className='absolute top-[1255px] left-8 text-white text-2xl md:absolute md:top[653px] md:left[45rem]'>From ₹129900.00*</h3>
        </div>
    </div>
  )
}

export default Card