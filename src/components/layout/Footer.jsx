import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "../animations/ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 border-t border-gray-200 dark:border-gray-800 px-6 py-10">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">
              Ushani Saubhagya
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Software Engineering Undergraduate
            </p>
          </div>

          <div></div>

          {/* Social Links */}
          <div className="flex justify-end gap-5 text-2xl text-gray-400 dark:text-gray-400">
            <a
              href="https://github.com/saubhagya02-bit"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ushani-saubhagya-5216992a4/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:saubhagyaushani03@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">
          © {new Date().getFullYear()} Ushani Saubhagya. All rights reserved.
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
