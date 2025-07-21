import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Home from "./Home"
import AboutUs from "./Pages/AboutUs"



function App() {
 

  return (
   <div className="min-h-screen  bg-[#000000]  ">

  <Routes>

    <Route path="/" element={ <Home/>}/>
    <Route path="/about-us" element={<AboutUs/>}/>

  </Routes>

   </div>
  )
}

export default App
