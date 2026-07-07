import React, { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    if (!visibleSection) return;
    const idMap = {
      all: "home",
      about: "about",
      experience: "experience",
      projects: "projects",
      contact: "contact",
    };
    const id = idMap[visibleSection] || "home";
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [visibleSection]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-[#f5e8c6]">
        <div className="max-w-[1400px] mx-auto bg-[#f5e8c6] rounded-2xl shadow-2xl border border-black/10">
        <div className="sticky top-0 z-50">
          <Navbar onNavigate={(s) => setVisibleSection(s)} />
        </div>

        <div id="home" className="scroll-mt-24">
          <Aboutme />
        </div>

        <div id="about" className="scroll-mt-24">
          <AboutSection />
        </div>

        <div id="experience" className="scroll-mt-24">
          <Experience />
        </div>

        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>

        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default App;
