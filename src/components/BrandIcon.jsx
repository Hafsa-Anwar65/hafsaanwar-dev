import brandIcons from "../data/brand-icons.json";
import { simpleIconsMap } from "../data/simpleIconsMap";
import decodeLabsLogo from "../assets/logos/decode-labs-logo.png";
import microsoftLogo from "../assets/logos/microsoft.png";
import ibmLogo from "../assets/logos/ibm.png";
import linkedinLearningLogo from "../assets/logos/linkedin-learning.png";
import linkedinLogo from "../assets/logos/linkedin.png";
import uniathenaLogo from "../assets/logos/uniathena.png";
import tenPearlsLogo from "../assets/logos/10pearls.png";
import mathworksLogo from "../assets/logos/mathworks.png";
import tandorgeLogo from "../assets/logos/tandorge.png";
import developershubLogo from "../assets/logos/developershub.png";
import mindworksLogo from "../assets/logos/mindworks.png";
import mongodbLogo from "../assets/logos/mongodb.png";
import kaggleLogo from "../assets/logos/kaggle.png";
import sololearnLogo from "../assets/logos/sololearn.png";
import hpLifeLogo from "../assets/logos/hp-life.png";
import automationAnywhereLogo from "../assets/logos/automation-anywhere.png";
import bahriaUniversityLogo from "../assets/logos/bahria-university.png";
import bahriaCollegeLogo from "../assets/logos/bahria-college.png";

// Real logo images (uploaded directly by the site owner) take
// priority over the generic SVG/monogram system below.
const IMAGE_LOGOS = {
  decodelabs: decodeLabsLogo,
  microsoft: microsoftLogo,
  ibm: ibmLogo,
  linkedinlearning: linkedinLearningLogo,
  linkedin: linkedinLogo,
  uniathena: uniathenaLogo,
  "10pearls": tenPearlsLogo,
  mathworks: mathworksLogo,
  matlab: mathworksLogo,
  tandorge: tandorgeLogo,
  developershub: developershubLogo,
  mindworks: mindworksLogo,
  mongodb: mongodbLogo,
  kaggle: kaggleLogo,
  sololearn: sololearnLogo,
  hp: hpLifeLogo,
  automationanywhere: automationAnywhereLogo,
  bahriauniversity: bahriaUniversityLogo,
  bahriacollege: bahriaCollegeLogo,
};

// Brand marks that are essentially black/near-black single-color
// silhouettes can optionally render with currentColor instead of
// their fixed hex, for spots with no white backing chip beneath
// them (e.g. inline label icons). Opt in via the `adaptive` prop —
// contexts with a white icon chip (Tools, Experience) should NOT
// use this, since the real hex is what keeps them visible there.
const MONOCHROME_BRANDS = new Set(["github", "anthropic", "jetbrains", "yolo"]);

// Tools/issuers with no official mark in our icon set get a flat,
// deliberately-styled monogram badge instead — never a fabricated logo.
const FALLBACK_COLORS = {
  matlab: "#E16737",
  solidworks: "#C60000",
  ibm: "#0530AD",
  microsoft: "#5E5E5E",
  linkedin: "#0A66C2",
  tesseract: "#4285F4",
  vscode: "#007ACC",
  gazebo: "#8B5CF6",
  moveit: "#8B5CF6",
  rviz: "#8B5CF6",
  mathworks: "#E16737",
  uniathena: "#8B5CF6",
  sololearn: "#1A5CFF",
  "10pearls": "#00A19A",
  tandorge: "#7C3AED",
  mindworks: "#5B21B6",
  rag: "#6D28D9",
  developershub: "#7C3AED",
  automationanywhere: "#E01F5A",
  make: "#6D00CC",
  playwright: "#2EAD33",
  chromadb: "#FF6F61",
  autocad: "#E51050",
  xilinx: "#E31937",
  circuitlab: "#3B82F6",
  nimultisim: "#F59E0B",
  restapi: "#0891B2",
  swagger: "#85EA2D",
  linux: "#000000",
  dataanalysis: "#0891B2",
  ml: "#8B5CF6",
  deeplearning: "#8B5CF6",
  cnn: "#8B5CF6",
  featureengineering: "#8B5CF6",
  modeldev: "#8B5CF6",
  genai: "#7C3AED",
  promptengineering: "#7C3AED",
  llm: "#7C3AED",
  objectdetection: "#22D3EE",
  objecttracking: "#22D3EE",
  imageprocessing: "#22D3EE",
  kinematics: "#8B5CF6",
  trajectory: "#8B5CF6",
  pathplanning: "#8B5CF6",
  lidar: "#8B5CF6",
  workflow: "#7C3AED",
};

const FALLBACK_LABELS = {
  matlab: "MAT",
  solidworks: "SW",
  ibm: "IBM",
  microsoft: "MS",
  linkedin: "in",
  tesseract: "OCR",
  vscode: "VS",
  gazebo: "GZ",
  moveit: "MV",
  rviz: "RV",
  mathworks: "MW",
  uniathena: "UA",
  sololearn: "SL",
  "10pearls": "10P",
  tandorge: "TD",
  mindworks: "MW",
  rag: "RAG",
  developershub: "DH",
  automationanywhere: "AA",
  make: "MK",
  playwright: "PW",
  chromadb: "CD",
  autocad: "CAD",
  xilinx: "XL",
  circuitlab: "CL",
  nimultisim: "NI",
  restapi: "API",
  swagger: "SWG",
  linux: "LX",
  dataanalysis: "DA",
  ml: "ML",
  deeplearning: "DL",
  cnn: "CNN",
  featureengineering: "FE",
  modeldev: "MD",
  genai: "AI",
  promptengineering: "PE",
  llm: "LLM",
  objectdetection: "OD",
  objecttracking: "OT",
  imageprocessing: "IP",
  kinematics: "KIN",
  trajectory: "TRJ",
  pathplanning: "A*",
  lidar: "LID",
  workflow: "WF",
};

export default function BrandIcon({ name, size = 22, adaptive = false }) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (IMAGE_LOGOS[key]) {
    return (
      <img
        src={IMAGE_LOGOS[key]}
        alt={name}
        style={{ height: "100%", width: "100%", objectFit: "contain", borderRadius: "inherit" }}
      />
    );
  }

  const icon = simpleIconsMap[key] || brandIcons[key];

  if (icon) {
    const fill = adaptive && MONOCHROME_BRANDS.has(key) ? "currentColor" : `#${icon.hex}`;
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={fill}
        aria-label={icon.title}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  const label = FALLBACK_LABELS[key] || name.slice(0, 2).toUpperCase();
  const color = FALLBACK_COLORS[key] || "#8B5CF6";

  return (
    <span
      className="brand-icon-fallback"
      style={{ "--fallback-color": color, width: size, height: size, fontSize: size * 0.34 }}
      aria-label={name}
    >
      {label}
    </span>
  );
}
