import FadeIn from "../animations/FadeIn";
import ScrollReveal from "../animations/ScrollReveal";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-white dark:bg-black text-black dark:text-white px-6 pt-24 pb-10 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <FadeIn>
            <span className="inline-block bg-green-500/10 text-green-500 px-4 py-1.5 rounded-full text-sm font-medium">
              Software Engineering Undergraduate | Full Stack & DevOps
            </span>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Hi, I'm Ushani
              <br />
              <span className="text-gray-500 dark:text-gray-400">
                Saubhagya.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-xl text-base md:text-lg leading-relaxed">
              I’m a Software Engineering undergraduate passionate about building
              modern full-stack applications and scalable backend systems.
              I work with React, TypeScript, Node.js, Java, and Spring Boot,
              while exploring Docker, AWS, CI/CD, and cloud technologies to
              build reliable software.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/Ushani Saubhagya_CV.pdf"
                download
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-block border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              >
                View Projects
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="flex gap-5 mt-7 text-2xl text-gray-500 dark:text-gray-400">
              <a
                href="https://github.com/saubhagya02-bit"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-black dark:hover:text-white hover:-translate-y-1 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ushani-saubhagya-5216992a4/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-black dark:hover:text-white hover:-translate-y-1 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://medium.com/@saubhagyaushani03"
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
                className="hover:text-black dark:hover:text-white hover:-translate-y-1 transition"
              >
                <FaMedium />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Profile Image */}
        <ScrollReveal>
          <div className="relative">
            <img
              src="/Profile.jpeg"
              alt="Ushani Saubhagya"
              className="rounded-2xl w-full max-w-md mx-auto object-cover"
            />

            <div className="absolute -inset-3 bg-green-500/20 blur-3xl rounded-2xl -z-10"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
