import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const SkillsSection = () => {
  const skillsRef = useRef();
  const isVisible = useIntersectionObserver(skillsRef, { threshold: 0.3 });

  const skills = [
    { name: "React.js", level: 80, icon: "fab fa-react" },
    { name: "JavaScript", level: 85, icon: "fab fa-js" },
    { name: "CSS", level: 82, icon: "fab fa-css3-alt" },
    { name: "C++", level: 65, icon: "fas fa-code" },
    { name: "Python", level: 60, icon: "fab fa-python" },
    { name: "TailwindCSS", level: 50, icon: "fas fa-wind" },
  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 orbitron neon-glow dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          My Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`glass-effect dark:bg-gray-100 dark:text-black p-6 rounded-lg transition-all duration-700 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} text-2xl text-cyan-400 mr-3`}></i>
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <span className="ml-auto text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-purple-500 h-full transition-all duration-[2000ms] ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
