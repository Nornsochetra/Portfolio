"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

interface CountUpProps {
  value: string | number;
  duration?: number;
}

export function CountUp({ value, duration = 1600 }: CountUpProps) {
  const [ref, visible] = useReveal<HTMLSpanElement>();
  const target = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf: number;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
