import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-full mx-auto px-4 md:px-10 h-20 flex justify-between items-center">
        <div className="text-[#39FF14] font-bold text-2xl tracking-tight">
          Ushani
        </div>

        <ul className="hidden md:flex gap-12 text-gray-300 text-sm font-medium">
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Skills</li>
          <li className="hover:text-white cursor-pointer transition">
            Projects
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Contact
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
            <li className="cursor-pointer hover:text-white">About</li>
            <li className="cursor-pointer hover:text-white">Skills</li>
            <li className="cursor-pointer hover:text-white">Projects</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
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
