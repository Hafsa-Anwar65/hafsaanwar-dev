import { education } from "../data/education";
import { useReveal } from "../hooks/useReveal";
import BrandIcon from "../components/BrandIcon";

export default function Education() {
  const rootRef = useReveal();

  return (
    <section id="education" className="section slide" ref={rootRef}>
      <p className="eyebrow">Education</p>
      <h2 className="section-heading reveal">Academic Background</h2>

      <div className="education__list">
        {education.map((ed, i) => (
          <div
            className="education__item glass-panel reveal"
            key={ed.school}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="education__top">
              <span className="education__logo">
                <BrandIcon name={ed.icon || ed.school} size={30} />
              </span>
              <div>
                <h3>{ed.school}</h3>
                <p className="education__degree">{ed.degree}</p>
              </div>
            </div>
            <div className="education__meta">
              <span className="education__dates-badge">{ed.dates}</span>
              {ed.note && <span>{ed.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
