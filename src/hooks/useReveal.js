import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to reveal elements with the
 * `.reveal` class as they scroll into view. Call once per section
 * root; children with class="reveal" get "is-visible" added.
 */
export function useReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const selector = ".reveal, .reveal-left, .reveal-right";
    const matchesRoot = root.matches(selector);
    const targets = matchesRoot
      ? [root, ...root.querySelectorAll(selector)]
      : root.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}
