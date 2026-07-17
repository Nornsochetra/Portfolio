import { EXPERIENCE } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="bg-slate-900/[0.02] px-6 py-28 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Career" title="Where I've worked" />
        <div className="relative ml-3 border-l border-slate-900/10 dark:border-white/10">
          {EXPERIENCE.map((job, i) => (
            <Reveal
              key={job.role + job.company}
              delay={i * 120}
              className="group relative pb-12 pl-10 last:pb-0"
            >
              <span className="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-accent ring-4 ring-white transition-transform duration-300 group-hover:scale-125 dark:ring-[#0b0b12]">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75"></span>
              </span>
              <p className="mb-1 text-sm font-semibold text-accent-light">{job.period}</p>
              <h3 className="text-lg font-bold text-slate-900 transition-transform duration-300 group-hover:translate-x-1 dark:text-white">
                {job.role} · {job.company}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {job.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
