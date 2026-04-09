import React from "react";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        {/* Other sections like Home */}
        <About />
        {/* Other sections like Skills, Projects, Contact */}
      </main>
    </div>
  );
}

export default App;