import React from "react";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Blogs from "./components/sections/Blogs";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Hero />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
