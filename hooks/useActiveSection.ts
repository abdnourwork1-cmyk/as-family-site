"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently most in view, for a
 * scroll-spy nav indicator. Returns "" if none of the sections are mounted
 * or in view yet.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setActive((current) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          return visible ? visible.target.id : current;
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
