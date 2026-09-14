// ─────────────────────────────────────────────────────────
// EXPERIENCE — one object per role, newest/most prominent
// first per the approved order. `highlights` are resume-style
// bullets; `tech` renders as badges.
// ─────────────────────────────────────────────────────────

export const experience = [
  {
    org: "Tandorge Limited",
    role: "AI & Automation Engineer",
    icon: "tandorge",
    dates: "June 2026 - Present",
    location: null,
    summary:
      "Building automation systems including an AI-powered lead intelligence platform and a custom ERP system.",
    highlights: [
      "Building a Facebook Lead Extractor / Lead Intelligence system (in progress) using Python, FastAPI, Playwright, and ChromaDB.",
      "Building a custom ERP system (Python backend, PostgreSQL) covering employee/HR management, production tracking, wastage tracking, and reporting, rolled out in phases from foundation through dashboard and mobile app.",
    ],
    tech: ["Python", "FastAPI", "Playwright", "ChromaDB", "PostgreSQL"],
    credential: null,
    recommendation: null,
  },
  {
    org: "DevelopersHub Corporation",
    role: "AI Automation Intern",
    icon: "developershub",
    dates: "August 2026 - Present",
    location: "Remote",
    summary:
      "AI automation internship focused on support-ticket triage and browser automation.",
    highlights: [
      "Built an AI-powered support ticket triage system that classifies requests, validates LLM outputs, scores confidence and risk, and routes uncertain cases for human review.",
      "Learned and applied Playwright for browser automation.",
    ],
    tech: ["Python", "LLM", "Automation", "Validation", "Human-in-the-Loop", "Playwright"],
    credential: null,
    recommendation: null,
  },
  {
    org: "Decode Labs",
    role: "Robotics & Automation Intern",
    icon: "decodelabs",
    dates: "June 2026 - July 2026",
    location: "Remote",
    summary:
      "Virtual internship building robotics simulation and computer-vision systems across three end-to-end projects.",
    highlights: [
      "6-DOF Robotic Arm Simulation: designed a simulation with Forward & Inverse Kinematics, trajectory planning, and obstacle avoidance, integrated with ROS 2 tools (MoveIt, RViz, Gazebo).",
      "Gear Inspection System: built a computer vision pipeline in OpenCV to detect gear defects on a conveyor belt, classifying parts as PASS/FAIL using contour analysis.",
      "Autonomous Mobile Robot: developed a LiDAR-based mapping and navigation system using A* path planning with dynamic replanning for obstacle avoidance in simulated maze environments.",
    ],
    tech: ["Python", "C++", "ROS 2", "MoveIt", "RViz", "Gazebo", "OpenCV", "LiDAR", "A*"],
    credential: {
      label: "Certificate of Completion (Student ID RA075191)",
    },
    recommendation: {
      quote:
        "Hafsa Anwar showcased a remarkable ability to translate abstract theoretical concepts into robust, production-ready solutions.",
      attribution: "Decode Labs, Letter of Recommendation",
      fileUrl: null,
    },
  },
  {
    org: "Mind Works International",
    role: "Gen AI Fellow",
    icon: "mindworks",
    dates: "July 2026 - August 2026",
    location: "Remote",
    summary:
      "Fellowship focused on applying generative AI and retrieval-augmented generation inside real automation workflows.",
    highlights: [
      "Built workflow automation pipelines using n8n, connecting language-model-based systems with external APIs and data sources.",
      "Applied retrieval-augmented generation (RAG) techniques within automation workflows to structure and route information.",
      "Work was featured in a LinkedIn spotlight post from Mind Works International.",
    ],
    tech: ["n8n", "RAG", "LLMs", "API Integrations", "Prompt Engineering"],
    credential: null,
    recommendation: null,
  },
];
