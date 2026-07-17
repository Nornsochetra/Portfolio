import { PORTFOLIO_CONFIG } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 blur-2xl"></div>
            <div className="glass relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl">
              <span className="text-8xl font-black text-white/10">
                {PORTFOLIO_CONFIG.initials}
              </span>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
              About me
            </p>
            <h2 className="mb-6 text-4xl font-extrabold text-white">
              Turning ideas into interfaces people love
            </h2>
            {PORTFOLIO_CONFIG.about.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-slate-400 last:mb-0">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={150} className="mt-10 grid grid-cols-3 gap-6">
            {PORTFOLIO_CONFIG.stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
