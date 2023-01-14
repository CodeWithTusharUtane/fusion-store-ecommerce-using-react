import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
const About = () => {
  return (
    <div>
      <Header/>
      <div className='w-screen  py-5 xl:w-[69%] border-4 rounded-2xl m-auto my-8 border-blue-300 '>
        <h1 className='text-5xl text-center hover:text-rose-400 hover:underline hover:underline-offset-8 '>About Us</h1>
      <div>
        <p className='text-rose-400 p-5 px-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dignissimos, doloribus rerum labore repellat libero fugiat unde dolorem dicta amet ducimus at quasi voluptates perspiciatis blanditiis possimus asperiores inventore, praesentium corrupti consectetur quia porro architecto. Expedita vero sequi commodi rerum, eveniet fugit eos inventore iusto similique nam accusantium impedit error? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum reprehenderit sed enim consectetur consequuntur doloremque ullam qui eum, necessitatibus voluptatum expedita blanditiis incidunt dignissimos praesentium nulla, explicabo sapiente aperiam eaque eius dolor doloribus quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aperiam. Et id maxime quis! Reprehenderit eius reiciendis iure aut, vero accusamus esse facilis sapiente ut magnam, laborum non, dolor quisquam est enim assumenda dolorem.</p>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
