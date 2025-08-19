import { Route, Routes, useLocation } from "react-router-dom"
import { lazy, Suspense } from "react"
import { AnimatePresence, motion } from "framer-motion"

import AutoPopupDialog, {} from './components/AutoDialog.jsx'
// Static Components (not lazy)
import ScrollToTop from "./components/ScrollToTop"
import CustomCursor from "./components/custome-cursor"

import NotFound from "./components/NotFound.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Loading from "./components/Loading.jsx"
import { Toaster } from "react-hot-toast"
import PortfolioDetails from "./Pages/Portfolio-Details.jsx"

// Lazy-loaded pages
const Home = lazy(() => import("./Home"))
const AboutUs = lazy(() => import("./Pages/AboutUs"))
const ContactUs = lazy(() => import("./Pages/ContactUs"))
const Carrer = lazy(() => import("./Pages/Career.jsx"))
const Service = lazy(() => import("./Pages/Services/service-mainPage"))
const WebDevelopment = lazy(() => import("./Pages/Services/details/Web-development"))
const SocialMediaMarketing = lazy(() => import("./Pages/Services/details/SocialMediaMarketing"))
const PPCAds = lazy(() => import("./Pages/Services/details/PPCAds"))
const AppDevelopment = lazy(() => import("./Pages/Services/details/App-development"))
const UIUXDesign = lazy(() => import("./Pages/Services/details/UIUXDesign"))
const GraphicDesign = lazy(() => import("./Pages/Services/details/GraphicDesign"))
const InfluencerMarketing = lazy(() => import("./Pages/Services/details/InfluencerMarketing"))
const ContentMarketing = lazy(() => import("./Pages/Services/details/ContentMarketing"))
const SEO = lazy(() => import("./Pages/Services/details/SEO.jsx"))
const Pricing = lazy(() => import("./Pages/Pricing.jsx"))


// const Appointment = lazy(() => import("./components/Appointment.jsx"))

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen font-poppins   bg-white text-primaryText">
      <ScrollToTop />
       <Toaster position="bottom-center" reverseOrder={false} />
      <CustomCursor />
      <AutoPopupDialog />

      {/* Lazy loading fallback and animation wrapper */}
      <Suspense fallback={<div className="text-primaryText text-center py-20"><Loading/></div>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Main Pages */}
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
            <Route path="/contact-us" element={<PageWrapper><ContactUs /></PageWrapper>} />
            <Route path="/career" element={<PageWrapper><Carrer /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Service /></PageWrapper>} />
            <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
           
            {/* <Route path="/appointment" element={<PageWrapper><Appointment /></PageWrapper>} /> */}
            <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
            <Route path="/portfolio/details" element={<PageWrapper><PortfolioDetails /></PageWrapper>} />
           

            {/* Service Detail Pages */}
            <Route path="/services/search-engine-optimization" element={<PageWrapper><SEO /></PageWrapper>} />
            <Route path="/services/web-development" element={<PageWrapper><WebDevelopment /></PageWrapper>} />
            <Route path="/services/social-media-marketing" element={<PageWrapper><SocialMediaMarketing /></PageWrapper>} />
            <Route path="/services/ppc-ads" element={<PageWrapper><PPCAds /></PageWrapper>} />
            <Route path="/services/app-development" element={<PageWrapper><AppDevelopment /></PageWrapper>} />
            <Route path="/services/ui-ux-design" element={<PageWrapper><UIUXDesign /></PageWrapper>} />
            <Route path="/services/graphic-design" element={<PageWrapper><GraphicDesign /></PageWrapper>} />
            <Route path="/services/influencer-marketing" element={<PageWrapper><InfluencerMarketing /></PageWrapper>} />
            <Route path="/services/content-marketing" element={<PageWrapper><ContentMarketing /></PageWrapper>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  )
}

export default App

// Animation wrapper for each page
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
