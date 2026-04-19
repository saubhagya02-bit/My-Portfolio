import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import { FaGithub } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    title: "MERN E-Commerce Web Application",
    description:
      "Full-stack e-commerce application with authentication and payment integration.",
    image: "/Ecommerce.png",
    github: "https://github.com/saubhagya02-bit/MERN_Ecommerce_App",
  },
  {
    title: "RusHome",
    description:
      "Modern responsive frontend website to browse, search and view rental properties",
    image: "/RusHome.png",
    github: "https://github.com/saubhagya02-bit/RusHome",
  },
  {
    title: "ChatSphere",
    description: "Real-time chat app using WebSockets and modern UI.",
    image: "/ChatSphere.png",
    github: "https://github.com/saubhagya02-bit/ChatSphere",
  },
  {
    title: "Reservation System",
    description: "Full-stack room booking platform.",
    image: "/Reservation.png",
    github: "https://github.com/saubhagya02-bit/Reservation-System",
  },
  {
    title: "Weather App",
    description: "A web app that shows real-time weather updates for any city.",
    image: "/Weather-App.png",
    github: "https://github.com/saubhagya02-bit/weather-app",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const project = projects[current];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white px-6 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
            My Projects
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            Some of the work I've built using modern technologies
          </p>
        </ScrollReveal>

        {/* Carousel wrapper with arrows outside */}
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white transition flex-shrink-0"
          >
            <FiChevronLeft size={20} />
          </button>

          <div className="flex-1 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/5 transition-colors duration-300">
            <div className="w-full h-64 md:h-80 overflow-hidden bg-gray-200 dark:bg-gray-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* GitHub link */}

              <button
                onClick={() => window.open(project.github, "_blank")}
                className="inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:text-green-500 dark:hover:text-green-400 transition"
              >
                <FaGithub size={16} />
                GitHub Repo
              </button>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white transition flex-shrink-0"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="flex justify-center gap-6 mt-6 md:hidden">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-green-500 w-4"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
