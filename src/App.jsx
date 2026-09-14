import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { useTheme } from "./hooks/useTheme";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Background theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
