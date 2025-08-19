
import Navbar from '../../components/Navbar'
import Footer from '../../Footer'
import ServiceBanner from './pages/service-banner'
import ServiceCard from './pages/service-card'
import FAQSection from './pages/service-FAQ'
import ServiceInsights from './pages/service-insights'
import Testimonials from './pages/service-testonomials'


export default function Service() {



 
  return (

    <>  

    <Navbar/>



<div className=' py-20 md:py-30'>  


    <ServiceBanner/>
      

   <ServiceCard/>





 <ServiceInsights/>


 <Testimonials/>

 <FAQSection/>

    </div>


    <Footer/>
    </>

  )
}