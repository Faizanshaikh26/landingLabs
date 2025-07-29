


import { useState, useEffect } from "react"
import Aaradhya from '../assets/images/Aaradhya.Logo TP.png'
import Crunchy from '../assets/images/Crunchy.Logo TP.png'
import EzeDesign from '../assets/images/Eze Design.Logo TP.png'
import Ezepune from '../assets/images/Ezepune.Logo TP.png'
import Kiara from '../assets/images/Kiara.Logo TP.png'
import Kohinoor from '../assets/images/Kohinoor.Logo TP.png'
import MadakeJewellers from '../assets/images/Madake Jewellers.Logo TP.png'
import MrMS from '../assets/images/Mr& MS.Logo TP.png'
import NikolEV from '../assets/images/NikolEV.Logo TP.png'
import Sidenest from '../assets/images/Sidenest.Logo TP.png'
import SuncityVilla from '../assets/images/Suncity Villa.Logo TP.png'
import Techmark from '../assets/images/Techmark.Logo TP.png'
import Zelc from '../assets/images/Zelc.Logo TP.png'


export function AutoPopupDialog() {






  const logos = [
    
      Aaradhya,
      Crunchy,EzeDesign,Ezepune,Kiara,Kohinoor,MadakeJewellers,MrMS,NikolEV,Sidenest,SuncityVilla,Techmark,Zelc
    
    ];


  const [isOpen, setIsOpen] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+1",
    phoneNumber: "",
    businessEmail: "",
  })

  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+86", country: "CN" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000) // 5 seconds delay

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    setIsOpen(false)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCountryCodeSelect = (code) => {
    handleInputChange("countryCode", code)
    setIsCountryDropdownOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:flex items-center justify-center pt-20 hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />

      {/* Dialog */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full mx-4">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left side - Blue gradient background */}
          <div className="flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 text-white">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Your Future,</h1>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-4xl font-bold text-yellow-400">Our Focus</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">2024</span>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                Start Your Digital Transformation Journey
                <br />
                Now and Revolutionize Your Business.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-blue-200 text-sm">Customer Retention Ratio</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1800+</div>
                <div className="text-blue-200 text-sm">Certified Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2000+</div>
                <div className="text-blue-200 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-blue-200 text-sm">Global Offices</div>
              </div>


              
            </div>
            <div className="pt-2 border-t border-gray-200">
  <div className="grid grid-cols-3 gap-4 items-center opacity-80">
    {logos.map((logo, index) => (
      <div key={index} className="flex items-center justify-center p-2">
        <img src={logo} alt={`logo-${index}`} className="max-h-12 object-contain" />
      </div>
    ))}
  </div>
</div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 p-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {"Let's Build Your Success Together!"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                    Phone Number*
                  </label>
                  <div className="flex gap-2">
                    {/* Custom Country Code Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
                      >
                        <span className="text-sm">{formData.countryCode}</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-24 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                          {countryCodes.map((item) => (
                            <button
                              key={item.code}
                              type="button"
                              onClick={() => handleCountryCodeSelect(item.code)}
                              className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                            >
                              {item.code}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      required
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Business Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Business Email"
                    value={formData.businessEmail}
                    onChange={(e) => handleInputChange("businessEmail", e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg mt-6 transition-colors duration-200"
                >
                  Submit
                </button>
              </form>

              
              {/* Brand logos */}


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
