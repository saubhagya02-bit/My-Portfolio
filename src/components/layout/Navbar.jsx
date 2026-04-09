import { useState, useEffect } from "react";
import useScrollSpy from "../../hooks/useScrollSpy";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const sections = ["about", "skills", "projects", "blogs", "contact"];
  const active = useScrollSpy(sections);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-black border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 md:px-10 h-20 flex justify-between items-center">
        <div
          className="flex items-center gap-2 font-bold text-2xl tracking-tight cursor-pointer"
          onClick={() => {
            const hero = document.getElementById("hero");
            if (hero) hero.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-green-500 font-mono">&lt;&gt;</span>
          <span className="text-black dark:text-white">Ushani</span>
        </div>

        <ul className="hidden md:flex gap-10 text-gray-600 dark:text-gray-400 text-sm font-medium">
          {sections
            .filter((s) => s !== "services")
            .map((item) => (
              <li
                key={item}
                className={`cursor-pointer hover:text-black dark:hover:text-white transition ${
                  active === item ? "text-green-600 dark:text-[#39FF14]" : ""
                }`}
              >
                <a href={`#${item}`} className="capitalize">
                  {item}
                </a>
              </li>
            ))}
        </ul>

        {/* Theme Toggle */}
        <div className="hidden md:block">
          <button
            onClick={toggleTheme}
            className="p-2 text-black dark:text-white border border-black/30 dark:border-white/30 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-black dark:text-white text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 py-6 border-b border-black/10 dark:border-white/10">
          <ul className="flex flex-col gap-5 text-gray-600 dark:text-gray-400">
            {sections
              .filter((s) => s !== "services")
              .map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer capitalize ${
                    active === item ? "text-green-600 dark:text-[#39FF14]" : ""
                  }`}
                >
                  <a href={`#${item}`} onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="mt-6 w-full px-6 py-2 text-sm font-medium text-black dark:text-white border border-black/30 dark:border-white/30 rounded-lg transition-all"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
