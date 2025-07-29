import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StateSection from './components/State-section'
import Banner from './components/Banner'
import ServicesSnapshot from './components/Services'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Testimonies from './components/Testonomials'
import Footer from './Footer'
import { Industries } from './components/Industries'
import Process from './components/Process'


export default function Home() {
  return (
    <div className='space-y-20 px-4 sm:px-6 lg:px-8'>

      <Navbar />

      <Hero />




      <StateSection />

      <ServicesSnapshot />

      <Features />


<Testimonies/>

     
      <Process/>
      <Portfolio />

 
 <Industries/>

  <Banner />

  <Footer/>


    </div>
  )
}
