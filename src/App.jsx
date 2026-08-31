import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-[#0D1015] dark:bg-[#F2F1EC] text-white">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
