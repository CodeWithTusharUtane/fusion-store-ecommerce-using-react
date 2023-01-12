import React from 'react'
import {AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='bg-[#172337] text-white  w-screen h-fit md:flex md:space-x-10 lg:flex lg:space-x-44'>
<div className=' pt-4 text-xl '>
        <span  className='text-3xl text-center ml-3 border-2 border-white/40 px-4'>Fusion Store</span>
        <h3 className=' pt-3 ml-5'>Contact Us</h3>
        <h3 className='pt-1 ml-5'>About Us</h3>
        <h3 className='pt-1 ml-5'>Payments</h3>
        <h3 className='pt-1 ml-5'>Shipping</h3>
        <h3 className='pt-1 ml-5'>Cancellation & Return</h3>
        <h3 className='pt-1 ml-5'>FAQ's</h3>
        <h3 className='pt-1 ml-5'>Return Policy</h3>
        <h3 className='pt-1 ml-5'>Security</h3>
        <h3 className='pt-1 ml-5 mb-4'>Privacy</h3>
    </div>
    <div className='md:mt-4'>
        <span className='text-3xl text-center ml-3  border-2 border-white/40 px-4 '>Socials</span>
        <h3 className='pt-3 ml-5 flex'>Instagram<AiOutlineInstagram className='ml-2 mt-1' size={20}/></h3>
        <h3 className='pt-1 ml-5 flex'>Twitter<AiOutlineTwitter className='ml-2 mt-1' size={20}/></h3>
        <h3 className='pt-1 ml-5 flex'>Facebook<AiOutlineFacebook className='ml-2 mt-1' size={20}/></h3>
        <h3 className='pt-1 ml-5 flex'>Linked In<AiOutlineLinkedin className='ml-2 mt-1' size={20}/></h3>
        <h3 className='pt-1 ml-5 flex'>Github<AiOutlineGithub className='ml-2 mt-1' size={20}/></h3>
        <div>
            <h2 className='ml-5'>Fusion Store &copy; All Copyright Reserved 2023 </h2>
        </div>
        </div>
        
    </footer>
  )
}

export default Footer
