import { useState } from "react";
import useScrollSpy from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["about", "skills", "projects", "services", "contact"];
  const active = useScrollSpy(sections);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-full mx-auto px-4 md:px-10 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <span className="text-green-500 font-mono">&lt;&gt;</span>

          <span className="text-white">Ushani</span>
        </div>

        <ul className="hidden md:flex gap-10 text-gray-400 text-sm font-medium">
          <li
            className={`cursor-pointer hover:text-white transition ${active === "about" ? "text-[#39FF14]" : ""}`}
          >
            <a href="#about">About</a>
          </li>

          <li
            className={`cursor-pointer hover:text-white transition ${active === "skills" ? "text-[#39FF14]" : ""}`}
          >
            <a href="#skills">Skills</a>
          </li>

          <li
            className={`cursor-pointer hover:text-white transition ${active === "projects" ? "text-[#39FF14]" : ""}`}
          >
            <a href="#projects">Projects</a>
          </li>

          <li
            className={`cursor-pointer hover:text-white transition ${active === "contact" ? "text-[#39FF14]" : ""}`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hidden md:block">
          <button className="px-6 py-2 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Hire Me
          </button>
        </div>

        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black px-6 py-6 border-b border-white/10">
          <ul className="flex flex-col gap-5 text-gray-300">
            <li
              className={`cursor-pointer ${active === "about" ? "text-[#39FF14]" : ""}`}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`cursor-pointer ${active === "skills" ? "text-[#39FF14]" : ""}`}
            >
              <a href="#about">Skills</a>
            </li>
            <li
              className={`cursor-pointer ${active === "projects" ? "text-[#39FF14]" : ""}`}
            >
              <a href="#about">Projects</a>
            </li>
            <li
              className={`cursor-pointer ${active === "contact" ? "text-[#39FF14]" : ""}`}
            >
              <a href="#about">Contact</a>
            </li>
          </ul>

          <button className="mt-6 w-full px-6 py-2 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
