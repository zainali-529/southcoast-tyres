import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/tyre logo.png'

const TopNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "choose", "testimonials", "contact"];
      const offsets = sections.map((section) => document.getElementById(section)?.offsetTop || 0);

      const currentScroll = window.pageYOffset + 100;
      const activeIndex = offsets.findIndex(
        (offset, index) =>
          currentScroll >= offset &&
          (index === offsets.length - 1 || currentScroll < offsets[index + 1])
      );
      setActiveSection(sections[activeIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <div>
      <div className="topnav mx-auto py-3 px-5">
        <div className="mx-auto  d-flex align-items-center justify-content-between " style={{maxWidth: '1440px'}}>

        <div className="logo"><img src={logo} alt="" /></div>
        <div className={`links ${isMobileMenuOpen ? "active" : ""}`}>
          {["home", "services", "about", "choose", "testimonials", "contact"].map((section) => (
            <a
              key={section}
              onClick={() => handleNavLinkClick(section)}
              style={{ color: activeSection === section ? "inherit" : "inherit", cursor: "pointer" }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </a>
          ))}
        </div>
        <div className="hamburger" onClick={handleMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      </div>

    </div>
  );
};

export default TopNav;
