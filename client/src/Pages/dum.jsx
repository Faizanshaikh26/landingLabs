"use client"

import { motion, useAnimation, useInView } from "framer-motion"
  
import { useEffect, useRef, useState } from "react"

export default function PricingPage() {
const [billingCycle, setBillingCycle] = useState("yearly")
  const containerRef = useRef(null)
  const lastY = useRef(0)
  const topLayerRef = useRef(null)
  const bottomLayerRef = useRef(null)
  const [shrinkHeader, setShrinkHeader] = useState(false)

  
  

  useEffect(() => {
    const container = containerRef.current
    let scrollTimeout

    const clearAnimations = () => {
      topLayerRef.current?.classList.remove("move-to-top", "move-to-bottom", "paused-animation")
      bottomLayerRef.current?.classList.remove("move-to-top", "move-to-bottom", "paused-animation")
    }

    const pauseAnimations = () => {
      topLayerRef.current?.classList.add("paused-animation")
      bottomLayerRef.current?.classList.add("paused-animation")
    }

    const handleScrollGesture = (e) => {
      let clientY = 0

      if ("deltaY" in e) {
        clientY = e.deltaY
      } else if ("touches" in e && e.touches.length > 0) {
        clientY = e.touches[0].clientY - lastY.current
        lastY.current = e.touches[0].clientY
      }

      clearAnimations()

      if (clientY > 5) {
        setShrinkHeader(true)
        topLayerRef.current?.classList.add("move-to-bottom")
        bottomLayerRef.current?.classList.add("move-to-bottom")
      } else if (clientY < -5) {
        setShrinkHeader(false)
        topLayerRef.current?.classList.add("move-to-top")
        bottomLayerRef.current?.classList.add("move-to-top")
      }

      // Pause animation after 1 second of inactivity
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        pauseAnimations()
      }, 1000)
    }

    if (container) {
      container.addEventListener("wheel", handleScrollGesture)
      container.addEventListener("touchmove", handleScrollGesture)
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScrollGesture)
        container.removeEventListener("touchmove", handleScrollGesture)
      }
      clearTimeout(scrollTimeout)
    }
  }, [])




  
  const pricingPlans = [
    {
      name: "Launch",
      description: "Essentials for solo marketers starting out with landing pages.",
      monthlyPrice: "$129",
      yearlyPrice: "$69",
      saveText: "save $240/year",
      visits: "100,000",
      landingPages: "50",
      customDomains: "5",
      teamMembers: "1",
    },
    {
      name: "Grow",
      description: "Built for growing teams with tools for optimization.",
      monthlyPrice: "$219",
      yearlyPrice: "$119",
      saveText: "save $360/year",
      isPopular: true,
      visits: "500,000",
      landingPages: "125",
      customDomains: "15",
      teamMembers: "5",
    },
    {
      name: "Scale",
      description: "For teams that want to scale and drive more results.",
      monthlyPrice: "$429",
      yearlyPrice: "$239",
      saveText: "save $720/year",
      visits: "2,000,000",
      landingPages: "350",
      customDomains: "50",
      teamMembers: "15",
    },
    {
      name: "Enterprise",
      description: "Enterprise level, high-volume and large-scale campaigns.",
      monthlyPrice: "$1199",
      yearlyPrice: "$639",
      saveText: "save $1920/year",
      visits: "10,000,000",
      landingPages: "1,000",
      customDomains: "Unlimited",
      teamMembers: "Unlimited",
    },
  ]


  const featuresTable = [
  {
    label: "Features",
    values: ["100,000", "500,000", "2,000,000", "10,000,000"],
  },
  {
    label: "Published Landing Pages",
    values: ["50", "125", "350", "1,000"],
  },
  {
    label: "Custom Domains",
    values: ["5", "15", "50", "125"],
  },
  {
    label: "Lead / Webhook Integrations",
    values: ["3", "15", "50", "150"],
  },
  {
    label: "Workspaces",
    values: ["3", "10", "25", "100"],
  },
  {
    label: "Import from URL",
    values: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    label: "Features",
    values: ["100,000", "500,000", "2,000,000", "10,000,000"],
  },
  {
    label: "Published Landing Pages",
    values: ["50", "125", "350", "1,000"],
  },
  {
    label: "Custom Domains",
    values: ["5", "15", "50", "125"],
  },
  {
    label: "Lead / Webhook Integrations",
    values: ["3", "15", "50", "150"],
  },
  {
    label: "Workspaces",
    values: ["3", "10", "25", "100"],
  },
  {
    label: "Import from URL",
    values: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    label: "Features",
    values: ["100,000", "500,000", "2,000,000", "10,000,000"],
  },
  {
    label: "Published Landing Pages",
    values: ["50", "125", "350", "1,000"],
  },
  {
    label: "Custom Domains",
    values: ["5", "15", "50", "125"],
  },
  {
    label: "Lead / Webhook Integrations",
    values: ["3", "15", "50", "150"],
  },
  {
    label: "Workspaces",
    values: ["3", "10", "25", "100"],
  },
  {
    label: "Import from URL",
    values: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    label: "Features",
    values: ["100,000", "500,000", "2,000,000", "10,000,000"],
  },
  {
    label: "Published Landing Pages",
    values: ["50", "125", "350", "1,000"],
  },
  {
    label: "Custom Domains",
    values: ["5", "15", "50", "125"],
  },
  {
    label: "Lead / Webhook Integrations",
    values: ["3", "15", "50", "150"],
  },
  {
    label: "Workspaces",
    values: ["3", "10", "25", "100"],
  },
  {
    label: "Import from URL",
    values: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    label: "Features",
    values: ["100,000", "500,000", "2,000,000", "10,000,000"],
  },
  {
    label: "Published Landing Pages",
    values: ["50", "125", "350", "1,000"],
  },
  {
    label: "Custom Domains",
    values: ["5", "15", "50", "125"],
  },
  {
    label: "Lead / Webhook Integrations",
    values: ["3", "15", "50", "150"],
  },
  {
    label: "Workspaces",
    values: ["3", "10", "25", "100"],
  },
  {
    label: "Import from URL",
    values: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    label: "Features",
    values: ["100,000", "500,000", "2,000,000", "10,000,000"],
  },
  {
    label: "Published Landing Pages",
    values: ["50", "125", "350", "1,000"],
  },
  {
    label: "Custom Domains",
    values: ["5", "15", "50", "125"],
  },
  {
    label: "Lead / Webhook Integrations",
    values: ["3", "15", "50", "150"],
  },
  {
    label: "Workspaces",
    values: ["3", "10", "25", "100"],
  },
  {
    label: "Import from URL",
    values: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    label: "Features",
    values: ["100,000", "500,000", "2,000,000", "10,000,000"],
  },
  {
    label: "Published Landing Pages",
    values: ["50", "125", "350", "1,000"],
  },
  {
    label: "Custom Domains",
    values: ["5", "15", "50", "125"],
  },
  {
    label: "Lead / Webhook Integrations",
    values: ["3", "15", "50", "150"],
  },
  {
    label: "Workspaces",
    values: ["3", "10", "25", "100"],
  },
  {
    label: "Import from URL",
    values: ["✔️", "✔️", "✔️", "✔️"],
  },
]



 

  return (
   <div
      className="relative min-h-screen bg-black text-white px-4 py-16 overflow-hidden"
      ref={containerRef}
    >
      {/* Animated Background Layers */}
      <div
        ref={topLayerRef}
        className={`pointer-events-none absolute top-0 left-0 w-full transition-all duration-700 ease-in-out opacity-10 z-0 ${
          shrinkHeader ? "h-32" : "h-full"
        }`}
      >
        <div className="w-full h-full bg-gradient-to-b from-blue-800 via-purple-900 to-black" />
      </div>

      <div
        ref={bottomLayerRef}
        className="pointer-events-none absolute top-0 left-0 w-full h-full opacity-10 z-0"
      >
        <div className="w-full h-full bg-gradient-to-t from-yellow-700 via-red-800 to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible Pricing</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each plan is designed to support your growth at every stage.
          </p>
          <div className="mt-6 inline-flex rounded-full bg-gray-800 p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                billingCycle === "monthly" ? "bg-gray-700 text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative px-5 py-2 rounded-full text-sm font-medium ${
                billingCycle === "yearly" ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
            >
              Yearly
              <span className="absolute -top-2 right-0 translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>
        

        {/* Pricing Table */}
        <div className="bg-[#0d0d0d] text-white max-w-7xl mx-auto mt-16 rounded-lg overflow-x-auto ">
          <div className={`grid grid-cols-5 text-center text-white border border-gray-700 z-30  ${shrinkHeader ? 'z-40  sticky' :'move-to'} `} >
            <div className="bg-[#121212] p-6 text-left border-r border-gray-700 font-semibold">
              Plans
            </div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-6 border-r border-gray-700 space-y-2   ${shrinkHeader ? 'z-40  overflow  bg-[#121212]' :'move-to'} `}   >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
                <div className="mt-2">
                  <span className="line-through text-gray-500">
                    {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <div className="text-2xl font-bold">
                    {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    <span className="text-base font-normal"> /mo</span>
                  </div>
                  <p className="text-green-400 text-sm">
                    {billingCycle === "yearly" ? plan.saveText : "billed monthly"}
                  </p>
                </div>
                <button
                  className={`mt-2 px-4 py-2 rounded border ${
                    index === 1 ? "bg-blue-600 text-white" : "border-white text-white"
                  }`}
                >
                  Start 7 Days Free Trial
                </button>
              </div>
            ))}
          </div>

          {/* Features Table */}
          <div className={`grid grid-cols-5 border-t border-gray-700 text-sm bg-[#0d0d0d]   ${shrinkHeader ? 'move-to-top' :''}  `} >
            {featuresTable.map((row, rowIndex) => (
              <>
                <div
                  key={`label-${rowIndex}`}
                  className="border border-gray-700 text-left font-medium bg-[#121212] p-4"
                >
                  {row.label}
                </div>
                {row.values.map((val, colIndex) => (
                  <div
                    key={`val-${rowIndex}-${colIndex}`}
                    className="border border-gray-700 text-center bg-[#1a1a1a] p-4"
                  >
                    {val}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}