import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <button className="navbar__logo-group" onClick={() => scrollTo("home")} aria-label="Go to home">
          <span className="navbar__logo">{profile.initials}</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">{profile.name}</span>
            <span className="navbar__logo-role">{profile.title}</span>
          </span>
        </button>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${active === link.id ? "is-active" : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="navbar__theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          title={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button className="navbar__hire" onClick={() => scrollTo("contact")}>
          Hire Me <span aria-hidden="true">→</span>
        </button>

        <button
          className="navbar__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__mobile-link ${active === link.id ? "is-active" : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button className="navbar__hire navbar__hire--mobile" onClick={() => scrollTo("contact")}>
            Hire Me
          </button>
          <button className="navbar__theme-toggle navbar__theme-toggle--mobile" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark theme" : "☀️ Light theme"}
          </button>
        </nav>
      )}
    </header>
  );
}
