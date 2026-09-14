import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__title">{profile.title}</p>
          <p className="footer__tagline">Building intelligent systems that see, learn & automate.</p>
        </div>

        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <p className="footer__copy">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
