import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects"
          subtitle="A few things I've designed, built, and shipped recently."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1">
                <div
                  className={
                    "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br " +
                    p.color +
                    " opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                  }
                ></div>
                <div className="relative">
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className={
                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br " +
                        p.color +
                        " font-bold text-white"
                      }
                    >
                      {p.title.charAt(0)}
                    </div>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={"Visit " + p.title}
                        className="text-slate-500 transition-colors hover:text-white"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{p.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
