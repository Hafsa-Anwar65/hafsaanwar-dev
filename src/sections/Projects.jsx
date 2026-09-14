import { useState } from "react";
import { projects, projectCategories } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

function DetailBlock({ project }) {
  return (
    <div className="project-card__detail">
      {project.problem && (
        <>
          <p className="project-card__detail-label">Problem</p>
          <p className="project-card__detail-text">{project.problem}</p>
        </>
      )}
      {project.solution && (
        <>
          <p className="project-card__detail-label">Solution</p>
          <p className="project-card__detail-text">{project.solution}</p>
        </>
      )}
      {project.features?.length > 0 && (
        <>
          <p className="project-card__detail-label">Key features</p>
          <ul className="project-card__feature-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </>
      )}
      {project.role && (
        <>
          <p className="project-card__detail-label">Role</p>
          <p className="project-card__detail-text">{project.role}</p>
        </>
      )}
    </div>
  );
}

function ProjectLinks({ project }) {
  const githubUrl = project.github;
  return (
    <div className="project-card__actions">
      {githubUrl ? (
        <a href={githubUrl} target="_blank" rel="noreferrer" className="btn" onClick={(e) => e.stopPropagation()}>
          GitHub
        </a>
      ) : (
        <span className="project-card__no-link">No public link</span>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
          Live Demo
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="project-card project-card--featured glass-panel reveal">
      <div className="project-card__top">
        <span className="project-card__number">{project.number}</span>
        {project.status === "in-progress" ? (
          <span className="status-pill in-progress">In Progress</span>
        ) : (
          <span className="project-card__category">{project.category}</span>
        )}
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__tagline">{project.tagline}</p>

      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span className="badge" key={t}>{t}</span>
        ))}
      </div>

      <button className="project-card__toggle" onClick={() => setOpen((o) => !o)}>
        {open ? "Hide details" : "View details"} <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>

      {open && <DetailBlock project={project} />}

      <ProjectLinks project={project} />
    </article>
  );
}

function GridCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="project-card glass-panel reveal">
      <div className="project-card__top">
        <span className="project-card__number">{project.number}</span>
        {project.status === "in-progress" ? (
          <span className="status-pill in-progress">In Progress</span>
        ) : (
          <span className="project-card__category">{project.category}</span>
        )}
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__tagline">{project.tagline}</p>

      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span className="badge" key={t}>{t}</span>
        ))}
      </div>

      <button className="project-card__toggle" onClick={() => setOpen((o) => !o)}>
        {open ? "Hide details" : "View details"} <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>

      {open && <DetailBlock project={project} />}

      <ProjectLinks project={project} />
    </article>
  );
}

export default function Projects() {
  const rootRef = useReveal();
  const [filter, setFilter] = useState("All");

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visibleRest = filter === "All" ? rest : rest.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section slide projects" ref={rootRef}>
      <p className="eyebrow">Projects</p>
      <h2 className="section-heading reveal">Featured Projects</h2>

      <div className="projects__featured-grid">
        {featured.map((project) => (
          <FeaturedCard project={project} key={project.id} />
        ))}
      </div>

      <h3 className="projects__more-heading reveal">More Projects</h3>

      <div className="projects__filters reveal">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            className={`projects__filter ${filter === cat ? "is-active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {visibleRest.map((project) => (
          <GridCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
