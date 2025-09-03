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
import NavbarServices from './components/nav-services'
import Loading from './components/Loading'

import { Helmet } from "react-helmet-async";



export default function Home() {
  return (
    <div className='space-y-10  w-full'>

      
      <Helmet>
<title>Landing Labs | Digital Marketing & IT Solutions</title>
<meta name="description" content="Landing Labs helps businesses grow smarter with digital marketing, IT solutions, and high-converting web experiences." />
<meta name="keywords" content="React, SEO, Web Development, Digital Marketing, IT Solutions, Landing Labs, Marketing Agency" />
<link rel="canonical" href="https://landinglabs.in/" />

    
        
      </Helmet>

      <Navbar />

    

      <Hero />


{/* <Loading/> */}
      <StateSection />



      <ServicesSnapshot />

      {/* <Features /> */}

      <Process/>

{/* <Testimonies/> */}

     
      {/* <Portfolio /> */}

 
 <Industries/>

  <Banner />



  <Footer/>


    </div>
  )
}
