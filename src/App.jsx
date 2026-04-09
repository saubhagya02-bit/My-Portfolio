import React from "react";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Education />
        <Skills />
      </main>
    </div>
  );
}

export default App;
