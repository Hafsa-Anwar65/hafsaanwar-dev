# Hafsa Anwar — Portfolio (React + Vite)

A premium AI/ML & Robotics Engineer portfolio: deep-purple aurora background in
dark mode, white/purple in light mode, Inter typography throughout, and a
fully data-driven content system so new projects/certs/experience never
require touching a component.

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

## Project Structure

```
portfolio/
├── index.html
├── public/
│   └── Hafsa_Anwar_CV.pdf       # served by the Resume download button — ADD THIS FILE
└── src/
    ├── main.jsx
    ├── App.jsx                   # composes all sections
    ├── index.css                 # imports every stylesheet in /styles
    ├── data/                     # ← EDIT THESE to update content
    │   ├── profile.js            # name, bio, contact info, social links
    │   ├── skills.js             # 4 skill categories
    │   ├── experience.js         # work history / fellowships
    │   ├── projects.js           # portfolio projects
    │   ├── certifications.js     # certificates
    │   ├── education.js          # schools/degrees
    │   └── brand-icons.json      # real brand SVGs (auto-consumed by BrandIcon)
    ├── components/                # Navbar, Footer, Background (aurora), BrandIcon
    ├── sections/                  # Hero, About, Skills, Experience, Projects,
    │                               # Certifications, Education, Contact
    ├── hooks/
    │   ├── useReveal.js           # scroll-reveal IntersectionObserver
    │   └── useTheme.js            # light/dark theme persistence
    └── styles/                    # tokens.css holds all colors/fonts
```

## IMPORTANT — before deploying

1. **Add your resume PDF.** Place your CV at `public/Hafsa_Anwar_CV.pdf`
   (or update `resumeFile` / `resumeDownloadName` in `src/data/profile.js`
   to match a different filename). The Resume button in Hero and Contact
   will 404 until this file exists.
2. **Decode Labs certificate link** currently points to a personal Google
   Drive file (`certifications.js`). Confirm you're comfortable with that
   link being public, or swap it for a different hosted copy.

## HOW TO UPDATE THE PORTFOLIO

You don't need to know React to make most of these changes — just edit the
plain JavaScript object arrays in `src/data/`.

### Add a project

Open `src/data/projects.js` and add an object to the `projects` array. Set
`featured: true` to place it in the large top row (order in the array =
display order); otherwise it appears in the smaller filterable grid.

```js
{
  id: "unique-id",
  number: "11",
  title: "Project Name",
  tagline: "One short line",
  category: "AI Automation", // must match one in projectCategories
  status: "completed",       // or "in-progress"
  problem: "What problem this solves.",
  solution: "What you built to solve it.",
  description: "1-2 sentence description.",
  features: ["Feature one", "Feature two"],
  role: "Your specific contribution.",
  tech: ["Python", "FastAPI"],
  github: "https://github.com/you/repo", // or null to hide the button
  demo: "https://your-demo.com",         // or null to hide the button
  image: null,
  featured: false,
}
```

### Add a certification

Open `src/data/certifications.js` and add an object. Set `featured: true`
to place it in the large top row (max recommended: 4).

```js
{
  title: "Certificate Name",
  issuer: "Organization",
  icon: "orgkey",                // looked up by BrandIcon
  date: "Month Year",            // month/year only, by design
  credentialUrl: "https://...",  // or null if you don't have one
  category: "AI / ML",           // must match one in certificationCategories
  featured: false,
}
```

### Update skills

Edit `src/data/skills.js` — 4 fixed categories (AI/ML & Data, Robotics,
Tools & Frameworks, Automation). Each skill is `{ name, icon }`; `icon` is
looked up in `brand-icons.json` first, then falls back to a styled
monogram automatically — never a fabricated logo.

### Add experience

Edit `src/data/experience.js` — one object per role, following the existing
shape (`org`, `role`, `dates`, `summary`, `highlights[]`, `tech[]`).

### Update your bio / contact info

Everything — name, email, GitHub, LinkedIn, hero copy, About text, contact
tagline — lives in `src/data/profile.js`.

### Update the downloadable CV

Replace `public/Hafsa_Anwar_CV.pdf` with your latest PDF (keep the same
filename, or update `resumeFile` in `profile.js` to match a new filename).

### Contact form

The contact form (name, email, project-category dropdown, message) opens
the visitor's email client via `mailto:` — no backend needed. To switch to
a hosted form service instead (Formspree, Web3Forms, etc.), edit the
`handleSubmit` function in `src/sections/Contact.jsx`.

## Theming

- Toggle lives in the navbar; the choice persists via `localStorage` and
  otherwise follows the visitor's OS preference on first visit
  (`src/hooks/useTheme.js`).
- All colors are CSS custom properties in `src/styles/tokens.css` —
  light mode is white with purple text/accents, dark mode is a deep
  purple base with light-purple text and the aurora background in Hero.
- The Hero aurora animation (`src/components/Background.jsx`) is a
  lightweight canvas animation (no external 3D library), and fully
  respects `prefers-reduced-motion`.

## Deployment

**Vercel / Netlify:** connect the GitHub repo, build command `npm run build`,
output directory `dist`. No extra configuration needed.

**GitHub Pages:** run `npm run build`, then deploy the contents of `dist/`
to your `gh-pages` branch (or use a GitHub Action).
