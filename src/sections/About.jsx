import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { experience } from "../data/experience";
import { useReveal } from "../hooks/useReveal";

const STATS = [
  { value: String(projects.length), label: "Projects Built" },
  { value: String(certifications.length), label: "Certifications" },
  { value: String(experience.length), label: "Roles & Fellowships" },
  { value: "4", label: "Core Focus Areas" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section slide" ref={ref}>
      <p className="eyebrow">About</p>
      <h2 className="section-heading">{profile.aboutHeading}</h2>

      <div className="about__single">
        <p className="about__body">{profile.aboutBody}</p>

        <div className="about__stats">
          {STATS.map((stat) => (
            <div className="about__stat-tile" key={stat.label}>
              <span className="about__stat-value gradient-text">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
