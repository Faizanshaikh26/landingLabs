import React, { useState } from "react";

export default function ServiceCard({
  iconSrc,
  hoverIconSrc,
  number,
  title,
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    clipPath: `
      polygon(
        0% 0%,
        100% 0%,
        100% calc(50% - 20px),
        calc(100% - 10px) 50%,
        100% calc(50% + 20px),
        100% 100%,
        0% 100%,
        0% calc(50% + 20px),
        10px 50%,
        0% calc(50% - 20px)
      )
    `,
    borderRadius: "16px",
    backgroundColor: isHovered ? "#FFFBED" : "white",
    transition: "background-color 0.4s ease, transform 0.3s ease",
  };

  return (
    <div
      className={`shadow-xl flex flex-col justify-between p-6 w-[250px] h-[300px] ${className}`}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative w-full h-36 flex justify-center mb-6">
        {/* Default Image */}
        <img
          src={iconSrc}
          alt="icon"
          className={`absolute w-full h-full object-contain transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
        {/* Hover Image */}
        <img
          src={hoverIconSrc}
          alt="hover-icon"
          className={`absolute w-full h-full object-contain transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-100 " : "opacity-0 "
          }`}
        />
      </div>

      {/* Text Content */}
      <div className="transition-colors duration-300 ease-in-out">
        <div
          className={`text-sm font-semibold mb-1 ${
            isHovered ? "text-primaryCardText" : "text-gray-500"
          } transition-colors duration-300 ease-in-out`}
        >
          {number}
        </div>
        <div
          className={`text-2xl font-medium leading-snug ${
            isHovered ? "text-primaryCardText" : "text-gray-500"
          } transition-colors duration-300 ease-in-out`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
