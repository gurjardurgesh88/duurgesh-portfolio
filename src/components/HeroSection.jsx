import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const HeroSection = () => {
  const heroRef = useRef();
  const isVisible = useIntersectionObserver(heroRef, { threshold: 0.3 });

  const titles = ["Frontend Developer", "Web Developer"];
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = titles[textIndex];
    if (charIndex <= current.length) {
      const timeout = setTimeout(() => {
        setText(current.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, textIndex]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 dark:bg-white dark:text-black bg-black text-white"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold orbitron text-white dark:text-black neon-glow dark:neon-glow">
          Hey, I'm Durgesh
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-400 dark:text-purple-700 mt-6 mb-6 min-h-[2.5rem]">
          {text}
        </h2>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <a
            href="/your-resume.pdf"
            download
            className="px-8 py-3 rounded-full border border-cyan-400 text-white dark:text-black hover:scale-105 hover:shadow-cyan-400/50 transition-all"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-pink-400 text-white dark:text-black hover:scale-105 hover:shadow-pink-400/50 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
