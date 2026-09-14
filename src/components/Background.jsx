import { useEffect, useRef } from "react";

// Flowing gradient ribbon background — approved directly with the
// site owner. A few translucent glowing ribbons drift slowly across
// the hero (blue -> purple -> pink gradient), with a scattering of
// twinkling particles along them. Dark mode sits on near-black;
// light mode sits on white with deeper, saturated ribbon colors so
// contrast holds. Respects prefers-reduced-motion (static frame).

function buildRibbons(width, height) {
  return [
    { baseY: height * 0.34, amp: height * 0.09, freq: 1.6, speed: 0.35, phase: 0, width: 2.4, glow: 22 },
    { baseY: height * 0.5, amp: height * 0.12, freq: 1.2, speed: 0.26, phase: 2.1, width: 3.2, glow: 30 },
    { baseY: height * 0.62, amp: height * 0.07, freq: 2.0, speed: 0.44, phase: 4.4, width: 1.8, glow: 16 },
  ];
}

const DARK_STOPS = ["#3ec6f0", "#8b5cf6", "#e8489a"];
const LIGHT_STOPS = ["#0f172a", "#1d4ed8", "#38bdf8"];

export default function Background({ theme }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDark = theme === "dark";

    let width = 0;
    let height = 0;
    let t = 0;
    let ribbons = [];
    let sparkles = [];

    function resize() {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ribbons = buildRibbons(width, height);
      sparkles = Array.from({ length: 70 }, () => ({
        x: Math.random() * width,
        y: height * 0.25 + Math.random() * height * 0.5,
        r: 0.6 + Math.random() * 1.4,
        tw: Math.random() * Math.PI * 2,
        drift: 0.02 + Math.random() * 0.05,
      }));
    }

    resize();
    window.addEventListener("resize", resize);

    const baseColor = isDark ? "#050512" : "#ffffff";
    const stops = isDark ? DARK_STOPS : LIGHT_STOPS;
    const ribbonAlpha = isDark ? 0.85 : 0.7;
    const sparkleColor = isDark ? "255,255,255" : "29,78,216";

    function ribbonPath(ribbon, time) {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const progress = x / width;
        const y =
          ribbon.baseY +
          Math.sin(progress * Math.PI * ribbon.freq + time * ribbon.speed + ribbon.phase) * ribbon.amp +
          Math.sin(progress * Math.PI * ribbon.freq * 0.4 - time * ribbon.speed * 0.6) * ribbon.amp * 0.25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
    }

    function drawFrame() {
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, width, height);

      ribbons.forEach((ribbon) => {
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, stops[0]);
        gradient.addColorStop(0.5, stops[1]);
        gradient.addColorStop(1, stops[2]);

        ctx.save();
        ctx.globalAlpha = ribbonAlpha;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ribbon.width;
        ctx.lineCap = "round";
        ctx.shadowColor = stops[1];
        ctx.shadowBlur = ribbon.glow;
        ribbonPath(ribbon, t);
        ctx.stroke();
        ctx.restore();
      });

      sparkles.forEach((s) => {
        s.tw += s.drift;
        s.x += 0.06;
        if (s.x > width) s.x = 0;
        const alpha = 0.25 + Math.sin(s.tw) * 0.25;
        ctx.fillStyle = `rgba(${sparkleColor},${Math.max(alpha, 0.05)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function loop() {
      t += 0.01;
      drawFrame();
      rafRef.current = requestAnimationFrame(loop);
    }

    if (prefersReducedMotion) {
      drawFrame();
    } else {
      loop();
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [theme]);

  return (
    <div className="site-background" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
