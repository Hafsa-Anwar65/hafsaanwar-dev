import { experience } from "../data/experience";
import { useReveal } from "../hooks/useReveal";
import BrandIcon from "../components/BrandIcon";

export default function Experience() {
  const rootRef = useReveal();

  return (
    <section id="experience" className="section slide experience" ref={rootRef}>
      <p className="eyebrow">Experience</p>
      <h2 className="section-heading reveal">Experience</h2>

      <div className="experience__timeline">
        {experience.map((role, i) => (
          <article
            className={`experience__item ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
            key={role.org}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="experience__marker">
              <span className="experience__dot" />
              {i !== experience.length - 1 && <span className="experience__line" />}
            </div>

            <div className="experience__card glass-panel">
              <div className="experience__head">
                <div className="experience__org-row">
                  <span className="experience__logo">
                    <BrandIcon name={role.icon || role.org} size={26} />
                  </span>
                  <div>
                    <h3 className="experience__role">{role.role}</h3>
                    <p className="experience__org">{role.org}</p>
                  </div>
                </div>
                <div className="experience__meta">
                  <span>{role.dates}</span>
                  {role.location && <span>{role.location}</span>}
                </div>
              </div>

              {role.pending && (
                <p className="experience__pending-note">
                  Details for this role are placeholders. Update dates, summary, and highlights in experience.js.
                </p>
              )}

              <p className="experience__summary">{role.summary}</p>

              <ul className="experience__highlights">
                {role.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="experience__badges">
                {role.tech.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
              </div>

              {role.credential && (
                <p className="experience__credential">✓ {role.credential.label}</p>
              )}

              {role.recommendation && (
                <blockquote className="experience__quote">
                  <p>"{role.recommendation.quote}"</p>
                  <footer>
                    {role.recommendation.attribution}
                    {role.recommendation.fileUrl && (
                      <a href={role.recommendation.fileUrl} target="_blank" rel="noreferrer">
                        {" "}View full letter →
                      </a>
                    )}
                  </footer>
                </blockquote>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
