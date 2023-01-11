import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import {IoMdCart} from 'react-icons/io'
const Header = () => {
  const [showHam, setShowHam] = useState(false)
  return (
    <>
      <nav className='font-mono'>
      <div className={showHam ? 'w-screen h-screen bg-black/25' :'hidden md:hidden '}>
        <div className='flex text-center items-center w-full pb-4 pl-10 pt-6 border-b-2 border-black/40'>
            <h1 className='text-3xl
             font-bold text-center'>Fusion Store</h1>
             <RxCross1 size={30} className='ml-16' onClick={()=>setShowHam(false)}/>
        </div>
        <div className='pt-7 text-2xl text-center border-b-2 border-black/40'>
            <h3 className='pb-4'>Home</h3>
            <h3 className='pt-6  pb-4'>About</h3>
            <h3 className='pt-6  pb-4'>Contact</h3>
            <h3 className='pt-6  pb-4'>Products</h3>
            <h3 className='pt-6  pb-10'>cart</h3>
        </div>
        <div className='pt-7 text-xl text-center '>
            <button className='border-2 border-black/40 rounded-full px-3 mx-5'>Log In</button>
            <button className='border-2 border-black/40 rounded-full px-3 mx-5'>Sign Up</button>
        </div>
            </div>
        <div className='w-screen h-12 border-b-2 border-black-200'>
            <div className='flex items-center h-full ml-7 uppercase font-bold text-2xl md:text-4xl
            pt-5 pb-5'>
                <h1>Fusion Store</h1>
                <div className='hidden md:flex text-xl items-center ml-32 space-x-28'>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3>Products</h3>
                    <h3 className='flex'>
                        Cart
                        <IoMdCart size={30} className='ml-2'/>
                        <span className='bg-black text-white rounded-full px-1 py-1 text-sm'>10</span>
                    </h3>  
                </div>
            <AiOutlineMenu className='absolute right-7 md:hidden' onClick={()=>setShowHam(true)}/>
            <div className='hidden md:flex ml-16 '>
            <button className=' bg-black text-white text-sm px-3 rounded-full ml-4 py-2'>Log In</button>
            <button className=' bg-black text-white text-sm px-3 rounded-full ml-6 py-2'>Sign Up</button>
            </div>
            </div>
            
        </div>
        {/* these will be show on clik on hamburger */}
        
      </nav>
    </>
  )
}

export default Header
