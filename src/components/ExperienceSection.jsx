import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ExperienceSection = () => {
  const experienceRef = useRef();
  const isVisible = useIntersectionObserver(experienceRef, { threshold: 0.3 });

  const experiences = [
    {
      title: "Personal Projects",
      company: "Self-directed",
      period: "2023 – 2024",
      description:
        "Created games like Snake and Dino, and developed a TextUtils app using HTML, CSS, and JavaScript. Gained hands-on experience in responsive UI, basic logic building, and clean interface design.",
    },
    {
      title: "Frontend Learning Journey",
      company: "BCA | Shaheed Bhagat Singh College, Pipariya",
      period: "2024 – Present",
      description:
        "Currently learning ReactJS and Python while strengthening core skills in HTML, CSS, JavaScript, and TailwindCSS. Also exploring problem-solving and basic C++.",
    },
    {
      title: "Future Goals",
      company: "Aspiring Full Stack Developer",
      period: "Planned",
      description:
        "I plan to learn Node.js and backend development in the near future to become a full stack developer with both frontend and backend skills.",
    },
  ];

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 orbitron neon-glow dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-lg dark:bg-gray-100 dark:text-black transition-all duration-700 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-cyan-400 dark:text-cyan-600">
                  {exp.title}
                </h3>
                <span className="text-purple-400 dark:text-purple-600">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg text-pink-400 dark:text-pink-500 mb-2">
                {exp.company}
              </h4>
              <p className="text-gray-300 dark:text-gray-700 text-sm sm:text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
