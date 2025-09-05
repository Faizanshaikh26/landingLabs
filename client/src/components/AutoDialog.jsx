// import React, { useEffect, useState } from "react";
// import { X } from "lucide-react";

// /* --- Replace/keep these with your actual imports --- */
// import Aaradhya from "../assets/images/clientLogo/Aaradhya.Logo TP.png";
// import Crunchy from "../assets/images/clientLogo/Crunchy.Logo TP.png";
// import EzeDesign from "../assets/images/clientLogo/Eze Design.Logo TP.png";
// import Ezepune from "../assets/images/clientLogo/Ezepune.Logo TP.png";
// import Kiara from "../assets/images/clientLogo/Kiara.Logo TP.png";
// import Kohinoor from "../assets/images/clientLogo/Kohinoor.Logo TP.png";
// import MadakeJewellers from "../assets/images/clientLogo/Madake Jewellers.Logo TP.png";
// import MrMS from "../assets/images/clientLogo/Mr& MS.Logo TP.png";
// import NikolEV from "../assets/images/clientLogo/NikolEV.Logo TP.png";
// import Sidenest from "../assets/images/clientLogo/Sidenest.Logo TP.png";
// import SuncityVilla from "../assets/images/clientLogo/Suncity Villa.Logo TP.png";
// import Techmark from "../assets/images/clientLogo/Techmark.Logo TP.png";
// import Zelc from "../assets/images/clientLogo/Zelc.Logo TP.png";
// /* ------------------------------------------------- */

// export default function AutoPopupDialog() {
//   const logos = [
//     Aaradhya,
//     Crunchy,
//     EzeDesign,
//     Ezepune,
//     Kiara,
//     Kohinoor,
//     MadakeJewellers,
//     MrMS,
//     NikolEV,
//     Sidenest,
//     SuncityVilla,
//     Techmark,
//     Zelc,
//   ];

//   const [open, setOpen] = useState(false);
//   const [countryOpen, setCountryOpen] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     countryCode: "+91",
//     phone: "",
//     email: "",
//   });

//   const countryCodes = [
//     { code: "+91", label: "IN" },
//     { code: "+1", label: "US" },
//     { code: "+44", label: "UK" },
//     { code: "+86", label: "CN" },
//   ];

//   useEffect(() => {
//     const t = setTimeout(() => setOpen(true), 5000);
//     return () => clearTimeout(t);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     // handle submission...
//     console.log("submit", form);
//     setOpen(false);
//   };

//   const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

//   if (!open) return null;

//   return (
//      <div
//       className="fixed inset-0 z-50 lg:flex items-center justify-center px-4 hidden"
//       role="dialog"
//       aria-modal="true"
//       aria-label="Contact us dialog"
//     >
//       {/* Backdrop */}
//       <button
//         aria-label="Close dialog"
//         className="absolute inset-0 bg-black/50"
//         onClick={() => setOpen(false)}
//       />

//       {/* Dialog box */}
//       <div
//         className="relative bg-white rounded-xl shadow-xl w-[90vw] max-w-4xl  max-h-[90vh] overflow-hidden"
//         role="document"
//       >
//         {/* Close */}
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute top-3 right-3 p-1 rounded-md hover:bg-gray-100 z-30"
//           aria-label="Close"
//         >
//           <X className="w-5 h-5 text-gray-700" />
//         </button>

//         {/* Content - columns stretch to fill height */}
//         <div className="grid grid-cols-1 md:grid-cols-2 h-full">
//           {/* Left: info panel */}
//           <div className="bg-gradient-to-b from-sky-600 to-sky-700 text-white p-6 md:p-8 flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-semibold">Let's build together</h3>
//               <p className="text-sm md:text-base mt-2 text-sky-100">
//                 Fast digital transformation for better growth. Quick chat — no obligations.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="flex gap-6 mt-6 text-sm md:text-base">
//               <div className="flex flex-col">
//                 <span className="font-bold text-xl md:text-2xl">95%</span>
//                 <span className="opacity-90 text-xs md:text-sm">Retention</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-xl md:text-2xl">2000+</span>
//                 <span className="opacity-90 text-xs md:text-sm">Projects</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-xl md:text-2xl">20+</span>
//                 <span className="opacity-90 text-xs md:text-sm">Offices</span>
//               </div>
//             </div>

//             {/* Logos row */}
//             <div className="mt-6 border-t border-white/20 pt-4">
//               <div className="flex gap-3 overflow-x-auto pb-2 items-center">
//                 {logos.map((src, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-center flex-shrink-0 w-20 h-12 md:w-24 md:h-14"
//                   >
//                     <img
//                       src={src}
//                       alt={`logo-${i}`}
//                       className="max-h-10 md:max-h-12 object-contain"
//                       loading="lazy"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <p className="text-xs text-sky-100/90 mt-2">Trusted by teams across industries</p>
//             </div>
//           </div>

//           {/* Right: form panel */}
//           <div className="p-6 md:p-8 bg-white flex flex-col justify-center overflow-y-auto">
//             <div className="max-w-md w-full mx-auto">
//               <h4 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">Quick Contact</h4>
//               <form onSubmit={onSubmit} className="mt-4 space-y-4">
//                 <div>
//                   <label htmlFor="name" className="sr-only">Name</label>
//                   <input
//                     id="name"
//                     value={form.name}
//                     onChange={(e) => update("name", e.target.value)}
//                     required
//                     placeholder="Your name"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-3 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-sky-500"
//                   />
//                 </div>

//                 <div className="flex gap-3">
//                   <div className="relative">
//                     <button
//                       type="button"
//                       onClick={() => setCountryOpen((s) => !s)}
//                       className="w-24 bg-gray-50 border border-gray-200 rounded-md px-3 py-3 text-sm md:text-base text-left"
//                       aria-expanded={countryOpen}
//                       aria-haspopup="listbox"
//                     >
//                       {form.countryCode}
//                     </button>

//                     {countryOpen && (
//                       <div className="absolute left-0 top-full mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-sm z-50">
//                         {countryCodes.map((c) => (
//                           <button
//                             key={c.code}
//                             type="button"
//                             onClick={() => {
//                               update("countryCode", c.code);
//                               setCountryOpen(false);
//                             }}
//                             className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
//                           >
//                             {c.code} {c.label}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   <input
//                     value={form.phone}
//                     onChange={(e) => update("phone", e.target.value)}
//                     required
//                     placeholder="Phone"
//                     className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-3 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-sky-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="sr-only">Email</label>
//                   <input
//                     id="email"
//                     value={form.email}
//                     onChange={(e) => update("email", e.target.value)}
//                     required
//                     placeholder="Email"
//                     type="email"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-3 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-sky-500"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-md py-3 text-sm md:text-base font-medium transition"
//                 >
//                   Get a callback
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-1">
//                   We’ll never spam — quick reply within 1 business day.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

/* --- Logos (keep your imports as is) --- */
import Aaradhya from "../assets/images/clientLogo/Aaradhya.Logo TP.png";
import Crunchy from "../assets/images/clientLogo/Crunchy.Logo TP.png";
import EzeDesign from "../assets/images/clientLogo/Eze Design.Logo TP.png";
import Ezepune from "../assets/images/clientLogo/Ezepune.Logo TP.png";
import Kiara from "../assets/images/clientLogo/Kiara.Logo TP.png";
import Kohinoor from "../assets/images/clientLogo/Kohinoor.Logo TP.png";
import MadakeJewellers from "../assets/images/clientLogo/Madake Jewellers.Logo TP.png";
import MrMS from "../assets/images/clientLogo/Mr& MS.Logo TP.png";
import NikolEV from "../assets/images/clientLogo/NikolEV.Logo TP.png";
import Sidenest from "../assets/images/clientLogo/Sidenest.Logo TP.png";
import SuncityVilla from "../assets/images/clientLogo/Suncity Villa.Logo TP.png";
import Techmark from "../assets/images/clientLogo/Techmark.Logo TP.png";
import Zelc from "../assets/images/clientLogo/Zelc.Logo TP.png";

/* ------------------------ Validation Schema ------------------------ */
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{7,15}$/, "Enter a valid phone number"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function AutoPopupDialog() {
  const logos = [
    Aaradhya,
    Crunchy,
    EzeDesign,
    Ezepune,
    Kiara,
    Kohinoor,
    MadakeJewellers,
    MrMS,
    NikolEV,
    Sidenest,
    SuncityVilla,
    Techmark,
    Zelc,
  ];

  const [open, setOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const countryCodes = [
    { code: "+91", label: "IN" },
    { code: "+1", label: "US" },
    { code: "+44", label: "UK" },
    { code: "+86", label: "CN" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ------------------------ React Hook Form ------------------------ */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* ------------------------ Submit Handler ------------------------ */
  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        phoneNumber: `${countryCode}${data.phone}`,
        email: data.email,
      };

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/quick-contacts`, payload);

      if (res.data.success) {
        toast.success("Contact added successfully!");
        reset();
        setOpen(false);
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again later.");
    }
  };

  if (!open) return null;

  return (
    <>
     
      <div
        className="fixed inset-0 z-50 lg:flex items-center justify-center px-4 hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Contact us dialog"
      >
        {/* Backdrop */}
        <button
          aria-label="Close dialog"
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        />

        {/* Dialog box */}
        <div className="relative bg-white rounded-xl shadow-xl w-[90vw] max-w-4xl  max-h-[90vh] overflow-hidden">
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 p-1 rounded-md hover:bg-gray-100 z-30"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Left Panel */}
            <div className="bg-gradient-to-b from-sky-600 to-sky-700 text-white p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Let's build together</h3>
                <p className="text-sm md:text-base mt-2 text-sky-100">
                  Fast digital transformation for better growth. Quick chat — no obligations.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-6 mt-6 text-sm md:text-base">
                <div className="flex flex-col">
                  <span className="font-bold text-xl md:text-2xl">95%</span>
                  <span className="opacity-90 text-xs md:text-sm">Retention</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl md:text-2xl">2000+</span>
                  <span className="opacity-90 text-xs md:text-sm">Projects</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl md:text-2xl">20+</span>
                  <span className="opacity-90 text-xs md:text-sm">Offices</span>
                </div>
              </div>

              {/* Logos */}
              <div className="mt-6 border-t border-white/20 pt-4">
                <div className="flex gap-3 overflow-x-auto pb-2 items-center">
                  {logos.map((src, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center flex-shrink-0 w-20 h-12 md:w-24 md:h-14"
                    >
                      <img
                        src={src}
                        alt={`logo-${i}`}
                        className="max-h-10 md:max-h-12 object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-sky-100/90 mt-2">Trusted by teams across industries</p>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-6 md:p-8 bg-white flex flex-col justify-center overflow-y-auto">
              <div className="max-w-md w-full mx-auto">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">Quick Contact</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                  {/* Name */}
                  <div>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-3 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setCountryOpen((s) => !s)}
                        className="w-24 bg-gray-50 border border-gray-200 rounded-md px-3 py-3 text-sm md:text-base text-left"
                      >
                        {countryCode}
                      </button>

                      {countryOpen && (
                        <div className="absolute left-0 top-full mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-sm z-50">
                          {countryCodes.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => {
                                setCountryCode(c.code);
                                setCountryOpen(false);
                              }}
                              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                            >
                              {c.code} {c.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      {...register("phone")}
                      placeholder="Phone"
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-3 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}

                  {/* Email */}
                  <div>
                    <input
                      {...register("email")}
                      placeholder="Email"
                      type="email"
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-3 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-md py-3 text-sm md:text-base font-medium transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Get a callback"}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-1">
                    We’ll never spam — quick reply within 1 business day.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
