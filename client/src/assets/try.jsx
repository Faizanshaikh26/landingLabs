import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const titles = {
  "/": "Home",
  "/contact": "Contact Us",
  "/about": "About Us",
};

function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "My App";
  }, [location]);

  return null; // this component doesn't render anything
}
