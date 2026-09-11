import type { Variants } from "framer-motion";

/** Shared premium easing curve used across every animation on the site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Default viewport trigger: animate once, slightly before fully in view. */
export const VIEWPORT = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export const REVEAL_VARIANTS = {
  up: fadeUp,
  fade: fadeIn,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
} as const;

export type RevealVariant = keyof typeof REVEAL_VARIANTS;

export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}
