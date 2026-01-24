import React from 'react'
import TopNav from '../../components/topnav'
import HeroSection from './components/HeroSection'
import StatsLabel from './components/Lable'
import AboutUs from './components/AboutUs'
import ChooseUs from './components/ChooseUs'
import Coverage from './components/Coverage'
import Services from './components/Services'
import { Testimonials } from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const HomePage = () => {
  return (
    <div>
      <TopNav/>
      <HeroSection/>
      <StatsLabel/>
      <AboutUs/>
      <ChooseUs/>
      <Coverage/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage
