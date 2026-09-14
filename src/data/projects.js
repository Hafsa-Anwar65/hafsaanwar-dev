// ─────────────────────────────────────────────────────────
// PROJECTS — add a project by adding one object here.
//
// featured: true → large card in the top row (order in this
//           array is the display order for featured cards)
// status: "completed" | "in-progress"
// github/demo: real URL, or null to hide the button
// ─────────────────────────────────────────────────────────

export const projects = [
  {
    id: "facebook-lead-extractor",
    number: "01",
    title: "Facebook Lead Extractor",
    tagline: "AI-powered lead intelligence, built on browser automation and vector search.",
    category: "AI Automation",
    status: "in-progress",
    problem:
      "Manually finding and organizing business leads from Facebook is slow and unstructured.",
    solution:
      "An AI-powered lead intelligence system that automates the extraction of business leads from Facebook using browser automation, structures the extracted data, and stores it in a vector database for fast retrieval and downstream automation workflows.",
    description:
      "An AI-powered lead intelligence system that automates the extraction of business leads from Facebook using browser automation, structures the extracted data, and stores it in a vector database for fast retrieval and downstream automation workflows.",
    features: [
      "Automated browser-driven extraction of lead data from Facebook",
      "Structured storage of extracted leads in a vector database for retrieval",
      "Built for integration into downstream automation workflows",
    ],
    role: "Building this end-to-end as part of an AI & Automation Engineer role at Tandorge Limited. Currently in progress.",
    tech: ["Python", "FastAPI", "Playwright", "ChromaDB"],
    github: null,
    demo: null,
    image: null,
    featured: true,
  },
  {
    id: "hersafeai",
    number: "02",
    title: "HerSafeAI",
    tagline: "AI-Powered Harassment Reporting Assistant",
    category: "Generative AI",
    status: "completed",
    problem: "Reporting harassment incidents is often intimidating and unstructured for the reporter.",
    solution:
      "A conversational AI assistant that guides users through reporting a harassment incident and transforms their input into a structured incident report.",
    description:
      "An AI-powered assistant designed to help users report harassment incidents through a structured conversational workflow. The system extracts relevant information and transforms user input into a structured incident report.",
    features: [
      "Structured, guided conversational reporting flow",
      "Extracts relevant incident details from free-form user input",
      "Outputs a clean, structured incident report",
    ],
    role: "Designed and built the full workflow, including the n8n automation backing the conversational flow.",
    tech: ["Generative AI", "AI Automation", "Chatbot", "n8n", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Hafsa-Anwar65/HerSafeAI",
    demo: "https://hersafeai.netlify.app",
    image: null,
    featured: true,
  },
  {
    id: "github-commit-notifier",
    number: "03",
    title: "GitHub Commit Notifier",
    tagline: "Real-time terminal notifications for GitHub pushes and pull requests.",
    category: "Backend / DevOps",
    status: "completed",
    problem: "Checking GitHub manually for new pushes or pull requests is repetitive and easy to miss.",
    solution:
      "A lightweight Flask server that listens for GitHub webhook events and prints a clean, formatted notification straight to the terminal in real time, exposed to the internet via a Cloudflare Tunnel.",
    description:
      "A lightweight Flask server that listens for GitHub webhook events (pushes and pull requests) and prints a clean, formatted notification straight to the terminal in real time, with no manual checking required.",
    features: [
      "Listens for GitHub push and pull request webhook events",
      "Parses payloads and prints formatted, readable notifications",
      "Publicly reachable via a Cloudflare Tunnel, with no cloud hosting needed",
    ],
    role: "Built solo end-to-end (server, webhook handling, and tunnel setup) to understand how webhooks, tunnels, and a receiving server connect in practice.",
    tech: ["Python", "Flask", "GitHub Webhooks", "Cloudflare Tunnel"],
    github: "https://github.com/Hafsa-Anwar65/github-commit-notifier",
    demo: null,
    image: null,
    featured: true,
  },
  {
    id: "ai-support-ticket-triage",
    number: "04",
    title: "AI Support Ticket Triage",
    tagline: "Turning unstructured support requests into reliable AI workflows.",
    category: "AI Automation",
    status: "completed",
    problem: "Unstructured incoming support tickets are slow to triage and easy to misroute.",
    solution:
      "An AI-powered workflow that classifies incoming support tickets, validates LLM outputs, evaluates confidence and risk, and routes uncertain cases for human review.",
    description:
      "An AI-powered workflow that analyzes incoming support tickets, classifies requests, validates LLM outputs, evaluates confidence and risk, and routes uncertain cases for human review.",
    features: [
      "Automatic ticket classification",
      "LLM output validation with confidence/risk scoring",
      "Human-in-the-loop routing for uncertain cases",
    ],
    role: "Built during an AI Automation internship at DevelopersHub Corporation.",
    tech: ["Python", "LLM", "Automation", "Validation", "Human-in-the-Loop"],
    github: "https://github.com/Hafsa-Anwar65/AI-Support-Ticket-Triage",
    demo: null,
    image: null,
    featured: true,
  },
  {
    id: "object-detection-tracking-api",
    number: "05",
    title: "AI Object Detection & Tracking API",
    tagline: "Real-time detection, tracking, and inference behind a REST API.",
    category: "Computer Vision",
    status: "completed",
    problem: "Running object detection models in isolation doesn't make them usable by other systems.",
    solution:
      "A real-time computer vision system using YOLO and OpenCV that detects and classifies objects, tracks them across frames, and exposes inference through a FastAPI backend.",
    description:
      "A real-time computer vision system using YOLO and OpenCV to detect and classify multiple object classes from images and video, implement multi-object tracking, and expose model inference through a FastAPI backend.",
    features: [
      "Multi-class object detection and classification with YOLO",
      "Multi-object tracking across video frames",
      "Inference exposed through a FastAPI REST endpoint",
      "Experiment tracking with MLflow",
    ],
    role: "Designed and built the full pipeline from model integration to API deployment.",
    tech: ["Python", "YOLO", "OpenCV", "FastAPI", "MLflow"],
    github: null,
    demo: null,
    image: null,
    featured: false,
  },
  {
    id: "robotic-arm-simulation",
    number: "06",
    title: "6-DOF Robotic Arm Simulation",
    tagline: "Kinematics, trajectory planning, and obstacle avoidance in simulation.",
    category: "Robotics",
    status: "completed",
    problem: "Robotic arm motion needs to be planned and validated safely before touching real hardware.",
    solution:
      "A robotic simulation implementing Forward and Inverse Kinematics, trajectory planning, and obstacle avoidance using ROS 2 and robotic simulation tools.",
    description:
      "A robotic simulation system implementing Forward and Inverse Kinematics, trajectory planning, and obstacle avoidance using ROS 2 and robotic simulation tools.",
    features: [
      "Forward and Inverse Kinematics for a 6-DOF arm",
      "Trajectory planning integrated with MoveIt",
      "Obstacle avoidance in a Gazebo/RViz simulation environment",
    ],
    role: "Built during the Robotics & Automation internship at Decode Labs.",
    tech: ["Python", "C++", "ROS 2", "MoveIt", "RViz", "Gazebo"],
    github:
      "https://github.com/Hafsa-Anwar65/decodelabs-tasks/tree/main/6-DOF%20Robotic%20Arm%20Simulation",
    demo: null,
    image: null,
    featured: false,
  },
  {
    id: "hand-tracking",
    number: "07",
    title: "Real-Time Hand Tracking",
    tagline: "21-point landmark tracking for gesture-based interaction.",
    category: "Computer Vision",
    status: "completed",
    problem: "Gesture-based interaction needs accurate, low-latency hand landmark tracking.",
    solution:
      "A real-time computer vision application using MediaPipe to detect 21 hand landmarks per frame and enable gesture-based interactions and dynamic visual effects.",
    description:
      "A real-time computer vision application using MediaPipe to detect 21 hand landmarks per frame and enable gesture-based interactions and dynamic visual effects.",
    features: [
      "Real-time 21-point hand landmark detection",
      "Gesture-based interaction triggers",
      "Dynamic visual effects driven by hand position",
    ],
    role: "Built solo as a personal computer vision project.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: null,
    demo: null,
    image: null,
    featured: false,
  },
  {
    id: "ocr",
    number: "08",
    title: "Handwritten Text Recognition / OCR",
    tagline: "Extracting text from images with classical CV preprocessing.",
    category: "Computer Vision",
    status: "completed",
    problem: "Handwritten or scanned text needs to be converted into machine-readable form.",
    solution:
      "A computer vision application using image preprocessing and OCR techniques to extract text from images.",
    description:
      "A computer vision application using image preprocessing and OCR techniques to extract text from images.",
    features: [
      "Image preprocessing pipeline for improved OCR accuracy",
      "Text extraction using Tesseract OCR",
    ],
    role: "Built solo as a personal computer vision project.",
    tech: ["Python", "OpenCV", "Tesseract OCR"],
    github: "https://github.com/Hafsa-Anwar65/Handwritten-Text-Recognition-OCR",
    demo: null,
    image: null,
    featured: false,
  },
  {
    id: "gear-inspection-system",
    number: "09",
    title: "Gear Inspection System",
    tagline: "Automated PASS/FAIL gear defect detection on a conveyor belt.",
    category: "Computer Vision",
    status: "completed",
    problem: "Manual gear inspection on a production line is slow and inconsistent.",
    solution:
      "A computer vision pipeline in OpenCV that detects gear defects on a conveyor belt and classifies parts as PASS/FAIL using contour analysis.",
    description:
      "A computer vision pipeline built in OpenCV to detect gear defects on a conveyor belt, classifying parts as PASS/FAIL using contour analysis.",
    features: [
      "Contour-based defect detection",
      "Automated PASS/FAIL classification",
      "Designed for a simulated conveyor-belt inspection line",
    ],
    role: "Built during the Robotics & Automation internship at Decode Labs.",
    tech: ["Python", "OpenCV", "Contour Analysis"],
    github:
      "https://github.com/Hafsa-Anwar65/decodelabs-tasks/tree/main/Gear%20Inspection%20System",
    demo: null,
    image: null,
    featured: false,
  },
  {
    id: "autonomous-mobile-robot",
    number: "10",
    title: "Autonomous Mobile Robot",
    tagline: "LiDAR-based mapping and navigation with dynamic replanning.",
    category: "Robotics",
    status: "completed",
    problem: "A mobile robot needs to navigate and avoid obstacles in an environment it hasn't fully mapped.",
    solution:
      "A LiDAR-based mapping and navigation system using A* path planning with dynamic replanning for obstacle avoidance in simulated maze environments.",
    description:
      "A LiDAR-based mapping and navigation system using A* path planning with dynamic replanning for obstacle avoidance in simulated maze environments.",
    features: [
      "LiDAR-based environment mapping",
      "A* path planning",
      "Dynamic replanning for obstacle avoidance",
    ],
    role: "Built during the Robotics & Automation internship at Decode Labs.",
    tech: ["Python", "LiDAR", "A* Path Planning"],
    github:
      "https://github.com/Hafsa-Anwar65/decodelabs-tasks/tree/main/Autonomous%20Mobile%20Robot",
    demo: null,
    image: null,
    featured: false,
  },
];

export const projectCategories = [
  "All",
  "AI Automation",
  "Generative AI",
  "Computer Vision",
  "Robotics",
  "Backend / DevOps",
];
