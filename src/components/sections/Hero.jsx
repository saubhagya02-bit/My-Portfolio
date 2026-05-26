import FadeIn from "../animations/FadeIn";
import ScrollReveal from "../animations/ScrollReveal";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-white dark:bg-black text-black dark:text-white px-6 pt-24 pb-10 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <FadeIn>
            <span className="bg-green-500/10 text-green-500 px-4 py-1 rounded-full text-sm">
              Software Engineering Student | Fullstack Developer
            </span>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-tight">
              Hi! I'm Ushani <br />
              Saubhagya
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-lg">
              I create seamless user experiences with React and modern
              JavaScript, while powering the backend with MongoDB, MySQL, and
              the MERN stack. I’m also expanding my expertise into DevOps,
              exploring Docker and AWS to bring scalable, efficient solutions to
              life.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <a
              href="/Ushani Saubhagya_Software Engineer_CV.pdf"
              download
              className="inline-block mt-6 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Download Resume
            </a>
          </FadeIn>
          <FadeIn delay={800}>
            <div className="flex gap-5 mt-6 text-2xl text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/saubhagya02-bit"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ushani-saubhagya-5216992a4/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://medium.com/@saubhagyaushani03"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition"
              >
                <FaMedium />
              </a>
            </div>
          </FadeIn>
        </div>

        <ScrollReveal>
          <div className="relative">
            <img
              src="/Profile.jpeg"
              alt="profile"
              className="rounded-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute -inset-2 bg-green-500/20 blur-2xl rounded-2xl -z-10"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
