import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "hafsa-portfolio-theme";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}
