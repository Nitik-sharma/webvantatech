"use client";

import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

/** Tracks the user's `prefers-reduced-motion` setting, hydration-safe (starts false on the server). */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handleChange = (event: MediaQueryListEvent) =>
      setReduced(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

/** Returns a fade+slide variant, or a plain fade when reduced motion is preferred. */
export function fadeUpVariants(reduced: boolean): Variants {
  return reduced ? fadeUpReduced : fadeUp;
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const staggerContainerReduced: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

export function staggerVariants(reduced: boolean): Variants {
  return reduced ? staggerContainerReduced : staggerContainer;
}
