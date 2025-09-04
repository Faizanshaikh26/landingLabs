
import { Helmet } from 'react-helmet-async'
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

   <Helmet>
        <title>Services | Landing Labs - Digital Marketing & IT Solutions</title>
        <meta
          name="description"
          content="Discover Landing Labs' services in digital marketing, SEO, IT solutions, and web development. We help businesses grow smarter with impactful strategies."
        />
        <meta
          name="keywords"
          content="Landing Labs Services, Digital Marketing, SEO, IT Solutions, Web Development, Social Media Marketing, Branding, Online Advertising"
        />
        <link rel="canonical" href="https://landinglabs.in/services" />
      </Helmet>


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