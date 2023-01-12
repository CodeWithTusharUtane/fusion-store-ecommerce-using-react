import React from 'react'
import Countdown from 'react-countdown';
import doubleSofa from '../Assests/double-sofa-02.png'
const SaleSection = () => {
  return (
    <div className='w-4/5 h-96 bg-blue-100 m-auto rounded-xl mb-5 xl:flex'>
        <div className="countertimer text-center pt-6 xl:text-start xl:ml-20 xl:mt-10">
            <p className='capitalize text-xl xl:text-2xl'>Sale ends in</p>
        <Countdown date={Date.now() + 600000000} className="text-5xl font-bold"/>
            <p className='capitalize pt-4 text-xl font-semibold xl:text-3xl'>Price starting from ₹14,990.00</p>
            <p className='capitalize text-xl font-semibold xl:text-3xl'>Buy before price hike</p>
        </div>
      <img src={doubleSofa} alt="" className='xl:ml-60'/>
    </div>
  )
}

export default SaleSection
