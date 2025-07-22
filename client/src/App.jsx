import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Home from "./Home"
import AboutUs from "./Pages/AboutUs"
import CustomCursor from "./components/custome-cursor"
import ContactUs from "./Pages/ContactUs"
import Carrer from "./Pages/Carrer"
import Service from "./Pages/Service"



function App() {
 

  return (
   <div className="min-h-screen  bg-[#000000]  ">

    <CustomCursor/>
  <Routes>


    <Route path="/" element={ <Home/>}/>
    <Route path="/about-us" element={<AboutUs/>}/>
    <Route path="/contact-us" element={<ContactUs/>}/>
    <Route path="/carrer" element={<Carrer/>}/>
    <Route path="/service" element={<Service/>}/>

  </Routes>

   </div>
  )
}

export default App
