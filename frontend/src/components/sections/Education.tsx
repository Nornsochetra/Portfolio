import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Education"
          title="Where I learned it"
          subtitle="A university degree alongside two intensive programs at the Korea Software HRD Center."
        />
        <div className="relative ml-3 border-l border-slate-900/10 dark:border-white/10">
          {EDUCATION.map((item, i) => (
            <Reveal
              key={item.award + item.school}
              delay={i * 120}
              className="group relative pb-12 pl-10 last:pb-0"
            >
              <span className="absolute left-0 top-0.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white text-accent ring-1 ring-slate-900/10 transition-transform duration-300 group-hover:scale-110 dark:bg-[#0b0b12] dark:ring-white/10">
                <GraduationCap size={16} />
              </span>
              {item.period && (
                <p className="mb-1 text-sm font-semibold text-accent-light">{item.period}</p>
              )}
              <h3 className="text-lg font-bold text-slate-900 transition-transform duration-300 group-hover:translate-x-1 dark:text-white">
                {item.award}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-slate-600 dark:text-slate-300">
                {item.school}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
