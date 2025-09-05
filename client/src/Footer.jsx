




import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  ChevronUp,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

 const  Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);


  const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  requirement: yup.string().required("Requirement is required"),
});

const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });


   const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/leads`, data);
      if (res.data.success) {
        toast.success("Lead submitted successfully!");
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error, try again later");
    }
  };
  const coreItems = [
    {
      title: "DIGITAL MARKETING",
      items: [
        "Social Media Marketing",
        "Performance Marketing",
        "Email Marketing",
        "Influencer Marketing",
        "Content Marketing",
      ],
    },
    {
      title: "DEVELOPMENT",
      items: [
        "Website Development",
        "App Development",
        "UI/UX Designing",
        "Graphic Designing",
      ],
    },
    {
      title: "SEO",
      items: ["Website SEO", "Ecommerce SEO"],
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-white text-primaryText sm:py-10 px-6 md:px-12 lg:px-20 pb-6">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10 border-b border-gray-600 pb-5">
        {/* Our Core */}
        <div className="flex-1 border-r  border-gray-600 pr-6">
          <h3 className="text-accent font-bold text-lg mb-4">OUR CORE</h3>
          {coreItems.map((section, index) => (
            <div key={section.title} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer font-bold"
                onClick={() => toggle(index)}
              >
                <h4>{section.title}</h4>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
              {openIndex === index && (
                <ul className="ml-2 text-sm mt-2 space-y-1">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Quick Links + Ventures + Social */}
        <div className="flex-1 border-r  border-gray-600 pr-6">
          <h3 className="text-accent font-bold text-lg mb-4">QUICK LINKS</h3>
<ul className="mb-6 grid grid-cols-3 sm:grid-cols-4   lg:mr-0 gap-y-2 text-sm">
  <li><Link to="/" className="hover:underline">Home</Link></li>
  <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
  <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
  <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
  <li><Link to="/career" className="hover:underline">Career</Link></li>
  <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
  <li><Link to="#" className="hover:underline">Blog</Link></li>
</ul>

         

          <h3 className="text-accent font-bold text-lg mb-4">OUR VENTURES</h3>
          <ul className="mb-6 space-y-1 text-sm">
            {/* <li>Influencer Marketing</li>
            <li>YaadRakho</li>
            <li>DI Infotech Courses</li>
            <li>Pratibhashali Initiative</li> */}
          </ul>

          <h3 className="text-accent font-bold text-lg mb-4">SOCIALIZE WITH US</h3>
          <div className="flex gap-3 text-xl">
            <a href="https://www.facebook.com/people/landinglabsin/61564373072403/?rdid=DTVRbgYiFJxHJkkj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16wqfNsNHL%2F" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-secondaryText w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/landing-labs/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-secondaryText w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/landinglabs_?igsh=Njc1YjZvdjc1Y2J1" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-secondaryText w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@landinglabs" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-secondaryText w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
 <div className="flex-1 p-6 border border-gray-600 rounded-md">
    
      <h3 className="font-semibold text-secondaryText mb-4 text-lg">
        Ready to Skyrocket Your Sales and Boost ROI?{" "}
        <span className="text-accent">Let's Talk!</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name")}
          placeholder="Name*"
          className="w-full border-b border-gray-600 text-secondaryText placeholder-gray-400 focus:outline-none pb-2"
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

        <input
          {...register("phone")}
          placeholder="Contact No.*"
          type="tel"
          className="w-full border-b border-gray-600 text-secondaryText placeholder-gray-400 focus:outline-none pb-2"
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

        <input
          {...register("email")}
          placeholder="Email*"
          type="email"
          className="w-full border-b border-gray-600 text-secondaryText placeholder-gray-400 focus:outline-none pb-2"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

        <input
          {...register("requirement")}
          placeholder="Requirement*"
          className="w-full border-b border-gray-600 text-secondaryText placeholder-gray-400 focus:outline-none pb-2"
        />
        {errors.requirement && (
          <p className="text-red-500 text-xs">{errors.requirement.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent text-white font-semibold py-2 px-4 rounded mt-2 hover:bg-accentHover transition disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Yes! I Want to Boost My Sales"}
        </button>
      </form>
    </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-6 text-sm gap-6 px-2">

        {/* Phone */}
         <div className="flex items-start gap-4">
          <Phone className="text-accent mt-2 w-10 h-10" />
          <a href="mailto:info@diinfotech.com" className="hover:underline mt-4">
               +91 738 739 2708
          </a>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <Mail className="text-accent mt-2 w-10 h-10" />
          <a href="" className="hover:underline mt-4">
      
           info@landinglabs.in
          </a>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4 max-w-sm">
          <MapPin className="text-accent mt-1 w-14 h-10" />
          <p>
           Office 610, Suratwala Mark Plazzo, Hinjewadi, 411057
          </p>
        </div>
      </div>
    </footer>
  );
};


 export default Footer