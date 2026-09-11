"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  EASE,
  REVEAL_VARIANTS,
  VIEWPORT,
  staggerContainer,
  type RevealVariant,
} from "@/lib/motion";

type StaggerGroupProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> & {
  stagger?: number;
  delayChildren?: number;
};

/** Grid/list wrapper: reveals itself and sequences its StaggerItem children. */
export function StaggerGroup({
  stagger = 0.08,
  delayChildren = 0,
  ...props
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={staggerContainer(stagger, delayChildren)}
      {...props}
    />
  );
}

type StaggerItemProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  variant?: RevealVariant;
  duration?: number;
};

/** Card/item used inside a StaggerGroup — no own viewport trigger, inherits it. */
export function StaggerItem({
  variant = "up",
  duration = 0.55,
  transition,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      variants={REVEAL_VARIANTS[variant]}
      transition={{ duration, ease: EASE, ...transition }}
      {...props}
    />
  );
}
