import { useState } from "react";
import { certifications, certificationCategories } from "../data/certifications";
import { useReveal } from "../hooks/useReveal";
import BrandIcon from "../components/BrandIcon";

function CertRow({ cert, delay }) {
  return (
    <div className="certifications__row glass-panel reveal" style={{ transitionDelay: `${delay}ms` }}>
      <span className="certifications__logo">
        <BrandIcon name={cert.icon || cert.issuer} size={20} />
      </span>
      <div className="certifications__row-text">
        <p className="certifications__row-title">{cert.title}</p>
        <p className="certifications__row-issuer">
          {cert.issuer} · {cert.date}
        </p>
      </div>
      {cert.credentialUrl ? (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="certifications__row-badge certifications__row-badge--link"
        >
          View Credential
        </a>
      ) : (
        <span className="certifications__row-badge">✓ Certified</span>
      )}
    </div>
  );
}

export default function Certifications() {
  const rootRef = useReveal();
  const [filter, setFilter] = useState("All");

  const featured = certifications.filter((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);
  const visibleRest = filter === "All" ? rest : rest.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="section slide academic" ref={rootRef}>
      <p className="eyebrow">Certifications</p>
      <h2 className="section-heading reveal">Certificates</h2>

      <div className="certifications__featured-grid">
        {featured.map((cert, i) => (
          <div className="certifications__featured-card glass-panel reveal" key={cert.title} style={{ transitionDelay: `${i * 60}ms` }}>
            <span className="certifications__featured-logo">
              <BrandIcon name={cert.icon || cert.issuer} size={30} />
            </span>
            <p className="certifications__featured-title">{cert.title}</p>
            <p className="certifications__featured-issuer">{cert.issuer} · {cert.date}</p>
            {cert.credentialUrl && (
              <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="btn btn-primary certifications__featured-link">
                View Credential
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="projects__filters reveal">
        {certificationCategories.map((cat) => (
          <button
            key={cat}
            className={`projects__filter ${filter === cat ? "is-active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="certifications__list">
        {visibleRest.map((cert, i) => (
          <CertRow cert={cert} key={cert.title} delay={i * 40} />
        ))}
      </div>
    </section>
  );
}
