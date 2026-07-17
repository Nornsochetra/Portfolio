"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={
        className +
        " transition-all duration-700 ease-out " +
        (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")
      }
      style={{ transitionDelay: delay + "ms" }}
    >
      {children}
    </div>
  );
}
