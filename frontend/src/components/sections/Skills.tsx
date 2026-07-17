import { SKILLS } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-white/[0.02] px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="A toolkit refined over years of building production interfaces."
        />
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 80}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                <span className="text-sm text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
