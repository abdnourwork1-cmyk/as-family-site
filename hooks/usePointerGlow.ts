"use client";

import { useCallback } from "react";
import type { PointerEvent } from "react";

/**
 * Very subtle pointer-reactive lighting for premium cards: writes the pointer
 * position into CSS custom properties consumed by the `.pointer-glow` class
 * (see globals.css). Uses direct style writes (no re-render) and mouse-only
 * pointer events, so it's inert on touch devices.
 */
export function usePointerGlow<T extends HTMLElement>() {
  const onPointerMove = useCallback((event: PointerEvent<T>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--glow-x", `${x}%`);
    event.currentTarget.style.setProperty("--glow-y", `${y}%`);
  }, []);

  return { onPointerMove };
}
