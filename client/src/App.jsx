import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Home from "./Home"
import AboutUs from "./Pages/AboutUs"
import CustomCursor from "./components/custome-cursor"
import ContactUs from "./Pages/ContactUs"
import Carrer from "./Pages/Carrer"
import Service from "./Pages/Services/service-mainPage"

import WebDevelopment from "./Pages/Services/details/Web-development"
import SocialMediaMarketing from "./Pages/Services/details/SocialMediaMarketing"
import PPCAds from "./Pages/Services/details/PPCAds"
import AppDevelopment from "./Pages/Services/details/App-development"
import UIUXDesign from "./Pages/Services/details/UIUXDesign"
import GraphicDesign from "./Pages/Services/details/GraphicDesign"
import InfluencerMarketing from "./Pages/Services/details/InfluencerMarketing"
import ContentMarketing from "./Pages/Services/details/ContentMarketing"
import ScrollToTop from "./components/ScrollToTop"
import SEO from "./Pages/Services/details/SEO.jsx"





function App() {
 

  return (
   <div className="min-h-screen  bg-[#000000]  ">

<ScrollToTop/>
    <CustomCursor/>
  <Routes>


    <Route path="/" element={ <Home/>}/>
    <Route path="/about-us" element={<AboutUs/>}/>
    <Route path="/contact-us" element={<ContactUs/>}/>
    <Route path="/carrer" element={<Carrer/>}/>
    <Route path="/services" element={<Service/>}/>
   
    <Route path="/services/search-engine-optimization" element={<SEO/>}/>
    <Route path="/services/web-development" element={<WebDevelopment/>}/>
    <Route path="/services/social-media-marketing" element={<SocialMediaMarketing/>}/>
    <Route path="/services/ppc-ads" element={<PPCAds/>}/>
    <Route path="/services/app-development" element={<AppDevelopment/>}/>
    <Route path="/services/ui-ux-design" element={<UIUXDesign/>}/>
    <Route path="/services/graphic-design" element={<GraphicDesign/>}/>
    <Route path="/services/influencer-marketing" element={<InfluencerMarketing/>}/>
    <Route path="/services/content-marketing" element={<ContentMarketing/>}/>

  </Routes>

   </div>
  )
}

export default App
