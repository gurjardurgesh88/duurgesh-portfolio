import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  const scrollToSection = (label) => {
    const id = label.toLowerCase();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      console.warn(`Section with id="${id}" not found`);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black dark:bg-white bg-opacity-90 backdrop-blur-md transition-colors duration-300 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo (Left side) */}
        <h1
          className="text-2xl font-bold orbitron text-cyan-400 dark:text-cyan-600 cursor-pointer mr-auto"
          onClick={() => scrollToSection("home")}
        >
          Durgesh | Portfolio
        </h1>

        {/* Mobile view: Theme toggle + burger */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white dark:text-black text-2xl"
            aria-label="Toggle Menu"
            title="Toggle Navigation"
          >
            <span
              className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
            ></span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white dark:text-black hover:text-cyan-400 dark:hover:text-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_0_6px_#22d3ee]"
            >
              {item}
            </button>
          ))}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black dark:bg-white bg-opacity-95 px-4 py-6 space-y-4 text-center transition-all">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-white dark:text-black hover:text-cyan-400 dark:hover:text-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_0_6px_#22d3ee] py-2"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
