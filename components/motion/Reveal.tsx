"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE, REVEAL_VARIANTS, VIEWPORT, type RevealVariant } from "@/lib/motion";

type RevealProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> & {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
};

/**
 * Fades/slides a block in once when it enters the viewport. Shared entrance
 * primitive so every section animates consistently instead of hand-rolling
 * IntersectionObserver logic per component.
 */
export function Reveal({
  variant = "up",
  delay = 0,
  duration = 0.7,
  transition,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={REVEAL_VARIANTS[variant]}
      transition={{ duration, ease: EASE, delay, ...transition }}
      {...props}
    />
  );
}
