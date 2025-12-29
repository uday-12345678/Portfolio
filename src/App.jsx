import { useState,useRef } from "react";
import "./App.css";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Usercard from "./Usercard.jsx";
import Skills from "./skills.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillref = useRef(null);
  const projectref = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillref={skillref}
        projectref={projectref}
        contactRef={contactRef}

      />

      <main className="main-content">
        {/* HOME SECTION */}
        <section className="hero">
          <h1>Hi, I’m Uday 👋</h1>

          <h2>Frontend Developer | Data Analyst</h2>

          <p>
            I build clean, responsive, and user-friendly web applications using modern
            React, with a strong focus on UI design and real-world problem solving.
          </p>
          <p>
            I am also skilled in data analysis, leveraging tools like Python and SQL to extract insights
            from complex datasets and support data-driven decision-making.
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection(projectref)}>View Projects</button>
            <button onClick={() => scrollToSection(contactRef)}>Contact Me</button>
          </div>
        </section>  
        {/* ABOUT SECTION */}
        <section ref={aboutRef} className="section">
          <h2>About</h2>
          <div className="cards-container">
            <Usercard name="Uday" email="nani@gmail.com" />
            <Usercard name="Divya Bhargavi" email="pinky@gmail.com" />
            <Usercard name="Anusha" email="anusha@gmail.com" />
            <Usercard name="Vaarshik" email="vaarshik@gmail.com" />
          </div>
        </section>
        {/* SKILLS SECTION */}
        <section ref={skillref} className="section">
          <h2>Skills</h2>
          <Skills />
        </section>

        {/* PROJECTS SECTION */}
        <section ref={projectref} className="section">
          <h2>Projects</h2>
          <Projects />
        </section>


        {/* CONTACT SECTION */}
        <section ref={contactRef} className="section">
          <Contact />
        </section>
        
      </main>

      <Footer />
    </>
  );
}
export default App;
