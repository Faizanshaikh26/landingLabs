import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "../Footer"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

import axios from "axios"


export default function Appointment() {
  const [selectedAppointment, setSelectedAppointment] = useState("")
  const [selectedDate, setSelectedDate] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()


 const handleSubmit = async (e) => {
  e.preventDefault()

  if (!selectedAppointment || !selectedDate || !phoneNumber || !email) {
    alert("Please fill in all fields.")
    return
  }

  try {
    const res = await axios.post("http://localhost:3000/api/appointment", {
      appointmentType: selectedAppointment,
      date: selectedDate,
      phoneNumber,
      email,
    })

    if (res.data.success) {
      alert("Appointment submitted successfully and emailed.")
      // Reset form
      setSelectedAppointment("")
      setSelectedDate(null)
      setPhoneNumber("")
      setEmail("")
    } else {
      alert("Something went wrong.")
    }
  } catch (error) {
    console.error("Error submitting appointment:", error)
    alert("Failed to submit appointment. Please try again.")
  }
}

  // Calendar setup
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i)
    const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString()
    const isToday = date.toDateString() === today.toDateString()

    days.push(
      <button
        key={i}
        type="button"
        className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200
        ${isToday ? "bg-orange-500 text-white" : "text-white hover:bg-gray-700"}
        ${isSelected && !isToday ? "bg-orange-200 text-orange-800" : ""}
        ${isSelected && isToday ? "bg-orange-700" : ""}
        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
        onClick={() => setSelectedDate(date)}
        aria-label={`Select ${date.toLocaleDateString()}`}
      >
        {i}
      </button>
    )
  }

  return (


    <>








    
    <div className="min-h-screen flex items-center justify-center bg-black p-4 sm:p-6 lg:p-8 text-white relative">

      
<div className="bg-orange-500 w-[60px] h-[60px] rounded-full flex items-center justify-center absolute top-4 left-[400px] shadow-lg hover:bg-orange-600 transition-colors duration-200 z-50">
  <button
    className="flex items-center justify-center text-white"
    type="button"
    onClick={() => navigate(-1)}
  >
    <ArrowLeft size={28} />
  </button>
</div>


    
      <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md">

    
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Book Your Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Appointment Type */}

          
          <div>
            <label htmlFor="appointment-type" className="block text-sm font-medium text-gray-200 mb-1">
              Select Appointment Type
            </label>
            <div className="relative">
              <select
                id="appointment-type"
                value={selectedAppointment}
                onChange={(e) => setSelectedAppointment(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md shadow-sm appearance-none"
                required
              >
                <option value="">-- Please choose an option --</option>
                <option value="consultation">Consultation</option>
                <option value="checkup">Check-up</option>
                <option value="follow-up">Follow-up</option>
                <option value="emergency">Emergency</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Select Date</label>
            <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
              <div className="flex justify-center items-center mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {new Date(currentYear, currentMonth).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-gray-400 mb-2">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
              <div className="grid grid-cols-7 gap-2">{days}</div>
              {selectedDate && (
                <p className="mt-4 text-sm text-gray-400 text-center">
                  Selected Date:{" "}
                  <span className="font-semibold">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-200 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full bg-gray-800 text-white border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
              placeholder="e.g., +1 (555) 123-4567"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full bg-gray-800 text-white border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            >
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </div>


    <Footer/>

    </>

  )
}
