import { color } from "framer-motion";
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
    backgroundColor: isHovered ? "#FFFBED" : "white", // red-500 on hover

  };

  return (
    <div
      className={`shadow-xl flex flex-col justify-between p-6 w-[250px] h-[300px] transition-all duration-300 ${className}`}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={isHovered ? hoverIconSrc : iconSrc}
          alt="icon"
          className="w-full h-36 object-contain"
        />
      </div>

      {/* Text Content */}
      <div>
        <div className={`text-sm font-semibold mb-1 ${isHovered ? "text-primaryCardText" : "text-gray-500"}`}>
          {number}
        </div>
        <div className={`text-2xl font-medium leading-snug ${isHovered ? "text-primaryCardText" : "text-gray-500"}`}>
          {title}
        </div>
      </div>
    </div>
  );
}
