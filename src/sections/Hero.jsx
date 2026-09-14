import { BrainCircuit, ScanEye, Bot, Workflow, Download } from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { experience } from "../data/experience";

const [firstName, ...restName] = profile.name.split(" ");
const lastName = restName.join(" ");

const STATS = [
  { value: String(projects.length), label: "Projects Built" },
  { value: String(certifications.length), label: "Certifications" },
  { value: String(experience.length), label: "Roles & Fellowships" },
  { value: "4", label: "Core Focus Areas" },
];

const FOCUS_AREAS = [
  { icon: BrainCircuit, label: "Machine Learning & AI", detail: "Model development, RAG, LLM applications" },
  { icon: ScanEye, label: "Computer Vision", detail: "Object detection, tracking, OCR" },
  { icon: Bot, label: "Robotics", detail: "ROS 2, kinematics, path planning" },
  { icon: Workflow, label: "AI Automation", detail: "n8n workflows, agentic pipelines" },
];

export default function Hero() {
  return (
    <section id="home" className="hero section slide">

      <div className="hero__top">
        <div className="hero__content glass-panel">
          <p className="eyebrow">AI/ML &amp; Robotics Engineer</p>

          <h1 className="hero__name">
            <span className="hero__name-first">{firstName}</span>
            <span className="hero__name-last gradient-text">{lastName}</span>
          </h1>

          <p className="hero__title">{profile.title}</p>

          <blockquote className="hero__quote">
            <p>{profile.heroStatement}</p>
          </blockquote>

          <p className="hero__supporting">{profile.heroSupporting}</p>

          <div className="hero__actions">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects <span aria-hidden="true">→</span>
            </button>
            <a className="hero__resume-btn" href={profile.resumeFile} download={profile.resumeDownloadName}>
              <Download size={17} strokeWidth={2.2} />
              Resume
            </a>
            <button className="btn" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact
            </button>
          </div>

          <div className="hero__social">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hero__social-icon">in</a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hero__social-icon">gh</a>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="hero__social-icon">✉</a>
          </div>
        </div>

        <div className="hero__focus glass-panel">
          <p className="hero__focus-label">// core.focus_areas</p>
          <div className="hero__focus-list">
            {FOCUS_AREAS.map((area, i) => (
              <div className="hero__focus-item" key={area.label} style={{ animationDelay: `${i * 90}ms` }}>
                <span className="hero__focus-icon">
                  <area.icon size={19} strokeWidth={2} />
                </span>
                <div>
                  <p className="hero__focus-item-label">{area.label}</p>
                  <p className="hero__focus-item-detail">{area.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__stats">
        {STATS.map((stat) => (
          <div className="hero__stat-card glass-panel" key={stat.label}>
            <span className="hero__stat-value gradient-text">{stat.value}</span>
            <span className="hero__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
