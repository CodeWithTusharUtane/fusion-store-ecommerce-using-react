import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Card from '../Components/Card'
import SaleSection from '../Components/SaleSection'
const Home = () => {
  return (
    <div className=''>
      <Header />
      <HeroSection/>
      <Card/>
      <SaleSection/>
      <Footer />
    </div>
  )
}

export default Home
