import { useState } from "react";
import { Mail, Download } from "lucide-react";
import { profile } from "../data/profile";
import { projectCategories } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import BrandIcon from "../components/BrandIcon";

const CATEGORY_OPTIONS = projectCategories.filter((c) => c !== "All");
const WEB3FORMS_ACCESS_KEY = "256742db-5426-41cd-a294-f06622df3ef8";

export default function Contact() {
  const rootRef = useReveal();
  const [form, setForm] = useState({ name: "", email: "", category: CATEGORY_OPTIONS[0], message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry: ${form.category} (${form.name})`,
          from_name: form.name,
          email: form.email,
          category: form.category,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", category: CATEGORY_OPTIONS[0], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section slide contact" ref={rootRef}>
      <p className="eyebrow">Get In Touch</p>
      <h2 className="contact__heading gradient-text reveal">{profile.contactTagline}</h2>
      <p className="contact__supporting reveal">
        Have an AI, Machine Learning, Computer Vision, automation, or robotics project in mind?
        Tell me a bit about it below.
      </p>

      <div className="contact__grid">
        <form className="contact__form glass-panel reveal" onSubmit={handleSubmit}>
          <div className="contact__row">
            <label>
              Name
              <input name="name" required value={form.name} onChange={handleChange} />
            </label>
            <label>
              Email
              <input type="email" name="email" required value={form.email} onChange={handleChange} />
            </label>
          </div>
          <label>
            Project category
            <select name="category" value={form.category} onChange={handleChange}>
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required value={form.message} onChange={handleChange} />
          </label>
          <button type="submit" className="btn btn-primary contact__submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent" : "Send Message"}
          </button>
          {status === "error" && (
            <p className="contact__form-error">
              Something went wrong. Please try again, or email me directly at {profile.email}.
            </p>
          )}
        </form>

        <div className="contact__info reveal">
          <a className="btn btn-primary contact__hire" href={`mailto:${profile.email}`}>
            Hire Me
          </a>
          <div className="contact__detail">
            <span className="contact__detail-label">
              <Mail size={14} strokeWidth={2} /> Email
            </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact__detail">
            <span className="contact__detail-label">
              <BrandIcon name="github" size={14} adaptive /> GitHub
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace("https://", "")}</a>
          </div>
          <div className="contact__detail">
            <span className="contact__detail-label">
              <span className="contact__icon-chip">
                <BrandIcon name="linkedin" size={14} adaptive />
              </span>{" "}
              LinkedIn
            </span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">View Profile</a>
          </div>
          <div className="contact__detail">
            <span className="contact__detail-label">
              <Download size={14} strokeWidth={2} /> Resume
            </span>
            <a href={profile.resumeFile} download={profile.resumeDownloadName}>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}