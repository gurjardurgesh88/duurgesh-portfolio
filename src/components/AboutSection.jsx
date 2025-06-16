import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import ProfileImage from "./ProfileImage";

const AboutSection = () => {
  const aboutRef = useRef();
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.3 });

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 orbitron neon-glow-purple dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <ProfileImage />
          </div>

          {/* About Text */}
          <div
            className={`${
              isVisible ? "animate-slide-right" : "opacity-0"
            } space-y-6`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold neon-glow-pink dark:neon-glow-none text-center md:text-left">
              Creative Frontend Developer
            </h3>
            <p className="text-gray-300 dark:text-gray-700 text-base sm:text-lg leading-relaxed">
              I specialize in creating modern, responsive websites with a focus
              on performance and clean UI. I enjoy working with technologies
              like React, TailwindCSS, and JavaScript to build engaging user
              experiences. I believe in writing maintainable code, solving
              real-world problems, and constantly evolving my skill set through
              hands-on projects and self-learning.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                ["React", "Core Stack"],
                ["5+", "Projects"],
                ["UI/UX", "Design Focus"],
                ["Growth", "Driven"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="glass-effect dark:bg-gray-100 dark:text-black p-4 rounded-lg"
                >
                  <p className="font-bold text-cyan-400 dark:text-cyan-600">
                    {value}
                  </p>
                  <p className="text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
