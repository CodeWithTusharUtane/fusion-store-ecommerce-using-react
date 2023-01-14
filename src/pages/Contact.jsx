import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const Contact = () => {
  return (
    <div>
      <Header/>
      <div className='w-screen  py-5 xl:w-[69%] border-4 rounded-2xl m-auto my-8 '>
        <h1 className='text-5xl text-center hover:text-rose-400 hover:underline hover:underline-offset-8 '>Contact Us</h1>
      <div className='w-3/4 xl:w-2/4 text-center m-auto py-8'>
        <form action="https://formspree.io/f/xqkokree" method='POST' className='flex flex-col'>
          <input type="text" placeholder='username' name='username' required autoComplete='off' autoCorrect='on' className='border-2 border-black py-3 my-3 text-center text-2xl '/>
          <input type="email" placeholder='Email' name='Email' required autoComplete='off' autoCorrect='on' className='border-2 border-black py-3 my-3 text-center text-2xl '/>
          <textarea name="Message"  cols="20" rows="10" autoComplete='off' placeholder='Enter your message here' className='border-2 border-black py-3 my-3 text-center text-2xl '></textarea>
          <input type="submit" value="Submit" className='border-2 border-black py-3 my-3 text-center text-2xl hover:bg-blue-200 bg-purple-300' />
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact