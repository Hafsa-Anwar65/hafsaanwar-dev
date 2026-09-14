// ─────────────────────────────────────────────────────────
// REAL BRAND LOGOS — sourced from `simple-icons`, an open
// source library of official brand marks (MIT/CC0 licensed
// icon paths). Only named imports are used so bundlers can
// tree-shake unused icons out of the final build.
//
// Anything NOT in this map has no verifiable official mark
// available to this build environment — BrandIcon falls back
// to a plain styled initial instead of a fabricated logo.
// ─────────────────────────────────────────────────────────

import {
  siPython,
  siCplusplus,
  siC,
  siJavascript,
  siHtml5,
  siCss,
  siFastapi,
  siFlask,
  siGit,
  siGithub,
  siMlflow,
  siOpencv,
  siN8n,
  siMediapipe,
  siYolo,
  siRos,
  siAutocad,
  siHp,
  siCredly,
  siNumpy,
  siPandas,
  siScikitlearn,
  siMongodb,
  siKaggle,
  siAnthropic,
  siLinux,
  siSwagger,
  siMake,
  siMultisim,
  siSololearn,
} from "simple-icons";

function entry(icon) {
  return { path: icon.path, hex: `#${icon.hex}`, title: icon.title };
}

export const simpleIconsMap = {
  python: entry(siPython),
  cplusplus: entry(siCplusplus),
  c: entry(siC),
  javascript: entry(siJavascript),
  html5: entry(siHtml5),
  css3: entry(siCss),
  fastapi: entry(siFastapi),
  flask: entry(siFlask),
  git: entry(siGit),
  github: entry(siGithub),
  mlflow: entry(siMlflow),
  opencv: entry(siOpencv),
  n8n: entry(siN8n),
  mediapipe: entry(siMediapipe),
  yolo: entry(siYolo),
  ros: entry(siRos),
  autocad: entry(siAutocad),
  hp: entry(siHp),
  credly: entry(siCredly),
  numpy: entry(siNumpy),
  pandas: entry(siPandas),
  scikitlearn: entry(siScikitlearn),
  mongodb: entry(siMongodb),
  kaggle: entry(siKaggle),
  anthropic: entry(siAnthropic),
  linux: entry(siLinux),
  swagger: entry(siSwagger),
  make: entry(siMake),
  nimultisim: entry(siMultisim),
  sololearn: entry(siSololearn),
};
