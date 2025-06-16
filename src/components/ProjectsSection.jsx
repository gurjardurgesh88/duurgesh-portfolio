import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ProjectsSection = () => {
  const projectsRef = useRef();
  const isVisible = useIntersectionObserver(projectsRef, { threshold: 0.3 });

  const projects = [
    {
      title: "Snake Game",
      description:
        "Classic Snake game built with pure JavaScript, HTML & CSS. Includes scoring and speed logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "fas fa-gamepad",
      liveLink: "https://snakemania-game.vercel.app/",
      codeLink: "https://github.com/gurjardurgesh88/Snakemania.git",
    },
    {
      title: "TextUtils App",
      description:
        "A text editor tool with features like word/character count, case conversion, and space cleanup. Styled using Bootstrap.",
      tech: ["React", "Bootstrap", "JavaScript"],
      icon: "fas fa-text-width",
      liveLink: "https://text-editor-online.vercel.app",
      codeLink: "https://github.com/gurjardurgesh88/Text-editor-app.git",
    },
    {
      title: "Dino Game",
      description:
        "A basic dinosaur runner game using JavaScript and keyboard events for jumping.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "fas fa-running",
      liveLink: "https://i-dino-game.vercel.app/",
      codeLink:
        "https://github.com/gurjardurgesh88/iDragon.git",
    }
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 orbitron neon-glow-purple dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-lg shadow-lg dark:bg-gray-100 dark:text-black transition-all duration-700 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex items-center mb-4">
                <i
                  className={`${project.icon} text-3xl text-pink-400 mr-4`}
                ></i>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <p className="text-gray-300 dark:text-gray-700 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-600 bg-opacity-30 dark:bg-gray-300 rounded-full text-sm text-purple-300 dark:text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 neon-border rounded dark:border-gray-400 text-sm"
                >
                  Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 neon-border-purple rounded dark:border-gray-400 text-sm"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
