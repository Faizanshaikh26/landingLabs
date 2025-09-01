import React, { useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  appointmentType: yup.string().required("Please select a service"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  date: yup.date().required("Please select a date"),
});

export default function AppointmentDialog({ isOpen, onClose }) {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      appointmentType: "",
      phoneNumber: "",
      email: "",
      date: null,
    },
  });

  const selectedDate = watch("date");

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/appointment`, data);
      if (res.data.success) {
        toast.success("Appointment booked successfully!");
        reset();
        onClose();
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      toast.error("Failed to submit appointment.");
    }
  };

  // Build calendar days
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const isSelected =
      selectedDate && new Date(selectedDate).toDateString() === date.toDateString();
    const isToday = date.toDateString() === today.toDateString();

    days.push(
      <button
        key={i}
        type="button"
        className={`h-8 w-8 flex items-center justify-center rounded-full text-xs font-medium transition-colors duration-200
        ${isToday ? "bg-orange-500 text-white" : "text-gray-200 hover:bg-gray-700"}
        ${isSelected && !isToday ? "bg-orange-200 text-orange-800" : ""}
        ${isSelected && isToday ? "bg-orange-700" : ""}
        focus:outline-none focus:ring-2 focus:ring-orange-500`}
        onClick={() => setValue("date", date)}
      >
        {i}
      </button>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0  bg-transparent">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-0 bg-transparent">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Dialog */}
        <div className="relative w-full max-w-sm sm:max-w-md p-3 sm:p-4 rounded-lg shadow-xl bg-gray-900/95 backdrop-blur-md text-white z-10 border border-gray-700">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-white"
          >
            <X size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Title */}
          <h2 className="text-base sm:text-lg font-semibold text-center mb-1 sm:mb-2">
            Book Appointment
          </h2>
          <p className="text-center text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">
            Fill in your details and select a date
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
            {/* Row: Appointment Type + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div>
                <label className="block text-xs sm:text-sm mb-1">Type</label>
                <select
                  {...register("appointmentType")}
                  className="w-full p-1.5 sm:p-2 text-xs sm:text-sm bg-gray-800 border border-gray-700 rounded-md"
                >
                  <option value="">Choose</option>
                  <option value="consultation">Consultation</option>
                  <option value="checkup">Check-up</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  {...register("phoneNumber")}
                  className="w-full p-1.5 sm:p-2 text-xs sm:text-sm bg-gray-800 border border-gray-700 rounded-md"
                  placeholder="9876543210"
                />
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm mb-1">Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full p-1.5 sm:p-2 text-xs sm:text-sm bg-gray-800 border border-gray-700 rounded-md"
                placeholder="Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm mb-1">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full p-1.5 sm:p-2 text-xs sm:text-sm bg-gray-800 border border-gray-700 rounded-md"
                placeholder="you@example.com"
              />
            </div>

            {/* Calendar */}
            <div>
              <label className="block text-xs sm:text-sm mb-1">Select Date</label>
              <div className="border border-gray-700 rounded-md p-2 sm:p-3 bg-gray-800">
                <div className="text-center font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                  {new Date(currentYear, currentMonth).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[9px] sm:text-[11px] text-gray-400 mb-1">
                  <div>Su</div>
                  <div>Mo</div>
                  <div>Tu</div>
                  <div>We</div>
                  <div>Th</div>
                  <div>Fr</div>
                  <div>Sa</div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, i) => (
                    <div key={i} className="h-6 w-6 sm:h-7 sm:w-7">
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-orange-500 hover:bg-orange-600 transition font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking" : "Book Now"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
