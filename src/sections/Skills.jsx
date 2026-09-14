import { BrainCircuit, Bot, Code2, Workflow } from "lucide-react";
import { skillGroups } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

const ICONS = { BrainCircuit, Bot, Code2, Workflow };

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section slide" ref={ref}>
      <p className="eyebrow">Skills</p>
      <h2 className="section-heading">Tech Stack</h2>

      <div className="skills__grid skills__grid--wide">
        {skillGroups.map((group) => {
          const Icon = ICONS[group.icon] || Code2;
          return (
            <div
              className="skills__card"
              key={group.category}
              style={{ "--icon-accent": group.accent }}
            >
              <div className="skills__card-top">
                <span className="skills__card-icon">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <span className="skills__card-count">{group.items.length}</span>
              </div>
              <h3 className="skills__card-title">{group.category}</h3>

              <div className="skills__badge-list">
                {group.items.map((item) => (
                  <span className="badge" key={item.name}>{item.name}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
