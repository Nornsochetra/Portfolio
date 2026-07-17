"use client";

import { SKILLS } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

interface SkillBarProps {
  skill: (typeof SKILLS)[number];
  delay: number;
}

function SkillBar({ skill, delay }: SkillBarProps) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={
        "transition-all duration-700 ease-out " +
        (visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
      }
      style={{ transitionDelay: delay + "ms" }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          {skill.name}
        </span>
        <span
          className={"text-sm text-slate-400 transition-all duration-500 dark:text-slate-500 " + (visible ? "opacity-100" : "opacity-0")}
          style={{ transitionDelay: delay + 500 + "ms" }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-900/5 dark:bg-white/5">
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 ease-out"
          style={{
            width: visible ? skill.level + "%" : "0%",
            transitionProperty: "width",
            transitionDuration: "1200ms",
            transitionDelay: delay + "ms",
          }}
        >
          <div className="shimmer-bar absolute inset-0 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-slate-900/[0.02] px-6 py-28 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="A toolkit refined over years of building production interfaces."
        />
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
