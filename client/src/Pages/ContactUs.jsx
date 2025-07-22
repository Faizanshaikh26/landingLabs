// "use client"

// import React, { useState } from "react"
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Send,
//   MessageSquare,
//   Users,
//   Zap,
//   CheckCircle,
//   Twitter,
//   Linkedin,
//   Github,
// } from "lucide-react"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     setIsSubmitting(false)
//     setIsSubmitted(true)
//     setTimeout(() => {
//       setIsSubmitted(false)
//       setFormData({ name: "", email: "", subject: "", message: "" })
//     }, 3000)
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const contactMethods = [
//     {
//       icon: Mail,
//       title: "Email Us",
//       description: "Send us an email anytime",
//       value: "hello@company.com",
//       action: "mailto:hello@company.com",
//     },
//     {
//       icon: Phone,
//       title: "Call Us",
//       description: "Mon-Fri from 8am to 5pm",
//       value: "+1 (555) 123-4567",
//       action: "tel:+15551234567",
//     },
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       description: "Come say hello at our office",
//       value: "123 Business Ave, Suite 100\nSan Francisco, CA 94105",
//       action: "#",
//     },
//   ]

//   const stats = [
//     { icon: MessageSquare, value: "24/7", label: "Support Available" },
//     { icon: Users, value: "10k+", label: "Happy Customers" },
//     { icon: Zap, value: "<2hrs", label: "Response Time" },
//   ]

//   const socialLinks = [
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Github, href: "#", label: "GitHub" },
//   ]

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-800 py-20 text-center text-white relative">
//         <div className="relative z-10 max-w-4xl mx-auto px-4">
//           <span className="text-sm uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Get In Touch</span>
//           <h1 className="text-4xl md:text-6xl font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-300">
//             Let's Start a Conversation
//           </h1>
//           <p className="text-orange-100 text-lg max-w-2xl mx-auto">
//             We're here to help and answer any question you might have.
//           </p>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-12 h-12 mx-auto bg-white/30 rounded-full flex items-center justify-center mb-3">
//                   <stat.icon className="w-6 h-6" />
//                 </div>
//                 <div className="text-2xl font-bold">{stat.value}</div>
//                 <div className="text-orange-200 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="py-20 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {contactMethods.map((method, index) => (
//             <div key={index} className="bg-neutral-900 p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform">
//               <div className="flex flex-col items-center text-center">
//                 <div className="bg-orange-600 p-4 rounded-full mb-4">
//                   <method.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold">{method.title}</h3>
//                 <p className="text-gray-400 text-sm">{method.description}</p>
//                 <a
//                   href={method.action}
//                   className="mt-3 text-orange-400 hover:text-orange-500 break-words whitespace-pre-line"
//                 >
//                   {method.value}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Form + Info */}
//       <section className="py-20 bg-neutral-950 px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Form */}
//           <div>
//             <h2 className="text-3xl font-bold text-orange-400 mb-4">Send us a Message</h2>
//             <p className="text-gray-400 mb-6">Fill the form below and we'll get back shortly.</p>

//             <div className="bg-black p-6 rounded-lg shadow-lg">
//               {isSubmitted ? (
//                 <div className="text-center py-12">
//                   <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
//                   <p className="text-gray-400">Thanks for reaching out. We'll get back soon.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm mb-1">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         className="w-full p-3 bg-neutral-800 border border-gray-700 rounded text-white"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm mb-1">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full p-3 bg-neutral-800 border border-gray-700 rounded text-white"
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="subject" className="block text-sm mb-1">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       required
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       className="w-full p-3 bg-neutral-800 border border-gray-700 rounded text-white"
//                       placeholder="Your Subject"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm mb-1">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={5}
//                       required
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className="w-full p-3 bg-neutral-800 border border-gray-700 rounded text-white resize-none"
//                       placeholder="Your message..."
//                     ></textarea>
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded"
//                   >
//                     {isSubmitting ? "Sending..." : (
//                       <span className="inline-flex items-center justify-center">
//                         <Send className="w-4 h-4 mr-2" /> Send Message
//                       </span>
//                     )}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             {/* Office Hours */}
//             <div className="bg-neutral-900 p-6 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <Clock className="w-6 h-6 text-orange-500 mr-2" />
//                 <h3 className="text-xl font-semibold">Office Hours</h3>
//               </div>
//               <ul className="space-y-2 text-gray-400 text-sm">
//                 <li className="flex justify-between">
//                   <span>Mon - Fri</span> <span>8:00 AM – 6:00 PM</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span>Saturday</span> <span>9:00 AM – 4:00 PM</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span>Sunday</span> <span>Closed</span>
//                 </li>
//               </ul>
//             </div>

//             {/* FAQ Accordion */}
//             <div className="bg-neutral-900 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-orange-400 mb-4">FAQs</h3>
//               <details className="mb-4">
//                 <summary className="cursor-pointer font-medium">How quickly do you respond?</summary>
//                 <p className="text-sm text-gray-400 mt-2">Usually within 2 hours during office hours.</p>
//               </details>
//               <details className="mb-4">
//                 <summary className="cursor-pointer font-medium">Do you offer phone support?</summary>
//                 <p className="text-sm text-gray-400 mt-2">Yes, call us Mon–Sat for instant help.</p>
//               </details>
//               <details>
//                 <summary className="cursor-pointer font-medium">Can I schedule a meeting?</summary>
//                 <p className="text-sm text-gray-400 mt-2">Yes, mention your time preference in the message.</p>
//               </details>
//             </div>

//             {/* Social */}
//             <div className="bg-neutral-900 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-orange-700 transition"
//                   >
//                     <social.icon className="w-4 h-4 text-white" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


"use client"

import React from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Zap,
  CheckCircle,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  MapPinCheck,
  PhoneCall,
  MailIcon,
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../Footer"
import GetInTouchImg from '../assets/images/getIn-Touch-banner.webp'

export default function ContactPage() {
  
 



  const stats = [
    { icon: MessageSquare, value: "24/7", label: "Support Available" },
    { icon: Users, value: "10k+", label: "Happy Customers" },
    { icon: Zap, value: "<2hrs", label: "Response Time" },
  ]

  

   const cards = [
    {
      title: "Main Office",
      icon: <MapPinCheck className="text-orange-500 text-3xl" />,
      boldText: "Office 610, Suratwala Mark Plaza, Hinjewadi",
      text: "PUNE, MAHARASHTRA, 411057",
    },
    {
      title: "Make a Call",
      icon: <PhoneCall className="text-orange-500 text-2xl" />,
      boldText: "+91 739 738 2708",
      text: "TUE– SUN: 10am – 07pm",
    },
    {
      title: "Send a Mail",
      icon: <MailIcon className="text-orange-500 text-3xl" />,
      boldText: "team@landinglabs.in",
      text: "",
    },
  ];
  return (
<>
<Navbar/>
    <div className="min-h-screen bg-bla text-white" style={{
        background:' linear-gradient(135deg, hsla(0, 4%, 9%, 1) 9%, hsla(113, 73%, 4%, 1) 63%, hsla(177, 80%, 15%, 1) 100%)'
      }}>
      {/* Hero Section */}
      <section className=" pt-44 pb-20 text-center text-white relative" >
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-sm uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-300">
            Let's Start a Conversation
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            We're here to help and answer any question you might have.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/30 rounded-full flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-orange-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className=" px-4  max-w-7xl mx-auto ">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6 py-10  text-orange-200 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#0B0B0C] ring-1 ring-gray-900/10  border border-gray-200 rounded-lg shadow p-6 flex-1 max-w-md"
        >
          <h3 className="text-xl font-semibold  mb-1">
            {card.title}
          </h3>
          <div className="w-10 h-0.5 bg-orange-500 mb-4"></div>
          <div className="flex items-start gap-4">
            {card.icon}
            <div>
              <p className="font-semibold ">{card.boldText}</p>
              {card.text && (
                <p className=" mt-1">{card.text}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
      </section>

   

 


<section className="bg-black text-white py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left: Image */}
    <div>
      <img
        src={GetInTouchImg}
        alt="Digital Marketing Proposal"
        className="w-full rounded-lg shadow-xl"
      />
    </div>

    {/* Right: Form */}
    <div>
      <h4 className="text-orange-500 font-semibold text-sm uppercase mb-2">Get In Touch</h4>
      <h2 className="text-3xl font-bold mb-6 leading-snug">
        Any Question? <br /> Write Down And Send Us
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
        />
        <input
          type="text"
          placeholder="Service Description"
          className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
        />

        {/* Select Service Dropdown */}
        <select
          className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
          defaultValue=""
        >
          <option value="" disabled>Select a Service</option>
          <option value="web-design" className="text-black">Web Design</option>
          <option value="seo" className="text-black">SEO</option>
          <option value="digital-marketing" className="text-black">Digital Marketing</option>
          <option value="app-development" className="text-black">App Development</option>
        </select>

        <textarea
          placeholder="Message"
          rows={4}
          className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
        ></textarea>

        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded transition duration-200"
        >
          GET A FREE QUOTE
        </button>
      </form>
    </div>
  </div>
</section>

<section className="bg-black text-white py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Our Location</h2>

    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Our Location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6844.389343535898!2d73.74328612704322!3d18.589892071999216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b960040a8f1d%3A0x442ddcbba499eb66!2sSuratwala%20Mark%20Plaza%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057%2C%20India!5e1!3m2!1sen!2sus!4v1753161809370!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
  </div>
</section>




    </div>

<Footer/>
    </>
  )
}

