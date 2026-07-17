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
              <div className="group relative h-full overflow-hidden rounded-3xl p-[1.5px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
                <div className="absolute -inset-[50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#6366f1_12%,#a855f7_25%,#ec4899_37%,transparent_50%,transparent_100%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="glass relative h-full overflow-hidden rounded-3xl bg-white/95 p-8 dark:bg-[#0f0f1a]/95">
                  <div
                    className={
                      "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br " +
                      p.color +
                      " opacity-20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"
                    }
                  ></div>
                  <div className="relative">
                    <div className="mb-6 flex items-start justify-between">
                      <div
                        className={
                          "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br " +
                          p.color +
                          " font-bold text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
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
                          className="text-slate-400 transition-all duration-300 hover:rotate-45 hover:scale-125 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t, ti) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                          style={{ transitionDelay: ti * 30 + "ms" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
