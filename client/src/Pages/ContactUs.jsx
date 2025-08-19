

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   MessageSquare,
//   Users,
//   Zap,
//   MapPinCheck,
//   PhoneCall,
//   MailIcon,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../Footer";
// import GetInTouchImg from "../assets/images/getIn-Touch-banner.webp";
// import { useState } from "react";
// import axios from "axios";


// export default function ContactPage() {

//   const [formData, setFormData] = useState({
//   fullName: "",
//   phoneNumber: "",
//   email: "",
//   service: "",
//   serviceDescription: "",
//   message: "",
// });


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post("http://localhost:3000/api/contacts", formData);
//     if (res.data.success) {
//       alert("Message sent successfully!");
//       setFormData({
//         fullName: "",
//         phoneNumber: "",
//         email: "",
//         service: "",
//         serviceDescription: "",
//         message: "",
//       });
//     } else {
//       alert("Something went wrong.");
//     }
//   } catch (err) {
//     console.error("Error submitting contact form:", err);
//     alert("Submission failed. Please try again.");
//   }
// };


//   const stats = [
//     { icon: MessageSquare, value: "24/7", label: "Support Available" },
//     { icon: Users, value: "10k+", label: "Happy Customers" },
//     { icon: Zap, value: "<2hrs", label: "Response Time" },
//   ];

//   const cards = [
//     {
//       title: "Main Office",
//       icon: <MapPinCheck className="text-orange-500 text-3xl" />,
//       boldText: "Office 610, Suratwala Mark Plazzo, Hinjewadi",
//       text: "PUNE, MAHARASHTRA, 411057",
//     },
//     {
//       title: "Make a Call",
//       icon: <PhoneCall className="text-orange-500 text-2xl" />,
//       boldText: "+91 739 738 2708",
//       text: "MON– SAT: 10am – 07pm",
//     },
//     {
//       title: "Send a Mail",
//       icon: <MailIcon className="text-orange-500 text-3xl" />,
//       boldText: "team@landinglabs.in",
//       text: "",
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       <div
//         className="min-h-screen text-white"
//         style={{
//           background:
//             "linear-gradient(135deg, hsla(0, 4%, 9%, 1) 9%, hsla(113, 73%, 4%, 1) 63%, hsla(177, 80%, 15%, 1) 100%)",
//         }}
//       >
//         {/* Hero */}
//         <motion.section
//           className="pt-44 pb-20 text-center relative"
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="relative z-10 max-w-4xl mx-auto px-4">
//             <span className="text-sm uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
//               Get In Touch
//             </span>
//             <motion.h1
//               className="text-4xl md:text-6xl font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-300"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               Let's Start a Conversation
//             </motion.h1>
//             <p className="text-orange-100 text-lg max-w-2xl mx-auto">
//               We're here to help and answer any question you might have.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="text-center"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2, duration: 0.5 }}
//                  viewport={{ once: false,amount:0.2}}
//                 >
//                   <div className="w-12 h-12 mx-auto bg-white/30 rounded-full flex items-center justify-center mb-3 animate-bounce">
//                     <stat.icon className="w-6 h-6" />
//                   </div>
//                   <div className="text-2xl font-bold">{stat.value}</div>
//                   <div className="text-orange-200 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* Contact Cards */}
//         <section className="px-4 max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6 py-10 text-orange-200">
//             {cards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#0B0B0C] border border-gray-800 rounded-lg shadow p-6 flex-1 max-w-md"
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//                viewport={{ once: false,amount:0.2}}
//               >
//                 <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
//                 <div className="w-10 h-0.5 bg-orange-500 mb-4"></div>
//                 <div className="flex items-start gap-4">
//                   {card.icon}
//                   <div>
//                     <p className="font-semibold">{card.boldText}</p>
//                     {card.text && <p className="mt-1">{card.text}</p>}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Contact Form */}
//         <motion.section
//           className="bg-black text-white py-16 px-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//          viewport={{ once: false,amount:0.2}}
//         >
//           <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//             <motion.img
//               src={GetInTouchImg}
//               alt="Digital Marketing Proposal"
//               className="w-full rounded-lg shadow-xl"
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.6 }}
//             />

//             <motion.div
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//              viewport={{ once: false,amount:0.2}}
//             >
//               <h4 className="text-orange-500 font-semibold text-sm uppercase mb-2">
//                 Get In Touch
//               </h4>
//               <h2 className="text-3xl font-bold mb-6 leading-snug">
//                 Any Question? <br /> Write Down And Send Us
//               </h2>

//               <form className="space-y-4" onSubmit={handleSubmit}>
//   <input
//     type="text"
//     placeholder="Enter your full name"
//     className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
//     value={formData.fullName}
//     onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//     required
//   />

//   <input
//     type="text"
//     placeholder="Phone number"
//     className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
//     value={formData.phoneNumber}
//     onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//     required
//   />

//   <input
//     type="email"
//     placeholder="Your email"
//     className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
//     value={formData.email}
//     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//     required
//   />

//   <input
//     type="text"
//     placeholder="Service Description"
//     className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
//     value={formData.serviceDescription}
//     onChange={(e) => setFormData({ ...formData, serviceDescription: e.target.value })}
//   />

//   <select
//     className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
//     value={formData.service}
//     onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//     required
//   >
//     <option value="" disabled>Select a Service</option>
//     <option value="web-design" className="text-black">Web Design</option>
//     <option value="seo" className="text-black">SEO</option>
//     <option value="digital-marketing" className="text-black">Digital Marketing</option>
//     <option value="app-development" className="text-black">App Development</option>
//   </select>

//   <textarea
//     placeholder="Message"
//     rows={4}
//     className="w-full p-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
//     value={formData.message}
//     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//   ></textarea>

//   <motion.button
//     type="submit"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded transition duration-200"
//   >
//     GET A FREE QUOTE
//   </motion.button>
// </form>

//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Google Map */}
//         <section className="bg-black text-white py-16 px-6">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Our Location</h2>
//             <div className="w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
//               <iframe
//                 title="Our Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6844.389343535898!2d73.74328612704322!3d18.589892071999216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b960040a8f1d%3A0x442ddcbba499eb66!2sSuratwala%20Mark%20Plaza%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057%2C%20India!5e1!3m2!1sen!2sus!4v1753161809370!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// }





import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  Zap,
  MapPinCheck,
  PhoneCall,
  MailIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../Footer";
import GetInTouchImg from "../assets/images/getIn-Touch-banner.webp";
import axios from "axios";
import toast from "react-hot-toast";

// React Hook Form & Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../constant";

// ✅ Validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  service: yup.string().required("Please select a service"),
  serviceDescription: yup.string().nullable(),
  message: yup.string().required("Message is required"),
});

export default function ContactPage() {
  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Submit handler
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/contacts`, data);
      if (res.data.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    }
  };

  const stats = [
    { icon: MessageSquare, value: "24/7", label: "Support Available" },
    { icon: Users, value: "10k+", label: "Happy Customers" },
    { icon: Zap, value: "<2hrs", label: "Response Time" },
  ];

  const cards = [
    {
      title: "Main Office",
      icon: <MapPinCheck className="text-orange-500 text-3xl" />,
      boldText: "Office 610, Suratwala Mark Plazzo, Hinjewadi",
      text: "PUNE, MAHARASHTRA, 411057",
    },
    {
      title: "Make a Call",
      icon: <PhoneCall className="text-orange-500 text-2xl" />,
      boldText: "+91 739 738 2708",
      text: "MON– SAT: 10am – 07pm",
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
      <Navbar />
     

      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <motion.section
          className="pt-44 pb-20 text-center relative"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
         
        >
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-sm uppercase tracking-wider bg-accent px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <motion.h1
              className="text-4xl md:text-6xl font-bold my-6 text-black"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Let's Start a Conversation
            </motion.h1>
            <p className="text-secondaryText text-lg max-w-2xl mx-auto">
              We're here to help and answer any question you might have.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                 viewport={{ once: false,amount:0.2}}
                >
                  <div className="w-12 h-12 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-3 animate-bounce">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-primaryText">{stat.value}</div>
                  <div className="text-secondaryText text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Cards */}
        <section className="px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 px-6 py-10 text-secondaryText">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-800 rounded-lg shadow p-6 flex-1 max-w-md"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
               viewport={{ once: false,amount:0.2}}
              >
                <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                <div className="w-10 h-0.5 bg-orange-500 mb-4"></div>
                <div className="flex items-start gap-4">
                  {card.icon}
                  <div>
                    <p className="font-semibold">{card.boldText}</p>
                    {card.text && <p className="mt-1">{card.text}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <motion.section
          className="bg-white text-primaryText py-16 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
         viewport={{ once: false,amount:0.2}}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.img
              src={GetInTouchImg}
              alt="Digital Marketing Proposal"
              className="w-full rounded-lg shadow-xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
             viewport={{ once: false,amount:0.2}}
            >
              <h4 className="text-orange-500 font-semibold text-sm uppercase mb-2">
                Get In Touch
              </h4>
              <h2 className="text-3xl font-bold mb-6 leading-snug">
                Any Question? <br /> Write Down And Send Us
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Full Name */}
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullName")}
                  className="w-full p-3 border border-gray-600 rounded text-black focus:outline-none focus:border-orange-500"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

                {/* Phone */}
                <input
                  type="text"
                  placeholder="Phone number"
                  {...register("phoneNumber")}
                  className="w-full p-3 border border-gray-600 rounded text-black focus:outline-none focus:border-orange-500"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

                {/* Email */}
                <input
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                  className="w-full p-3 border border-gray-600 rounded text-black focus:outline-none focus:border-orange-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                {/* Service Description */}
                <input
                  type="text"
                  placeholder="Service Description"
                  {...register("serviceDescription")}
                  className="w-full p-3 border border-gray-600 rounded text-black focus:outline-none focus:border-orange-500"
                />

                {/* Service Dropdown */}
                <select
                  {...register("service")}
                  className="w-full p-3 border border-gray-600 rounded text-black focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select a Service</option>
                  <option value="web-design">Web Design</option>
                  <option value="seo">SEO</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="app-development">App Development</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}

                {/* Message */}
                <textarea
                  placeholder="Message"
                  rows={4}
                  {...register("message")}
                  className="w-full p-3 border border-gray-600 rounded text-black focus:outline-none focus:border-orange-500"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded transition duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "GET A FREE QUOTE"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.section>

        {/* Google Map */}
        <section className="bg-white text-black py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Our Location</h2>
            <div className="w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Our Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8971.566460880815!2d73.74558212579804!3d18.589892117051907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b960040a8f1d%3A0x442ddcbba499eb66!2sSuratwala%20Mark%20Plaza%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057%2C%20India!5e1!3m2!1sen!2sus!4v1754974803382!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>


              
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}