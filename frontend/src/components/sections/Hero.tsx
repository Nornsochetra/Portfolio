import { ArrowDown } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/data/portfolio";

export function Hero() {
  const [firstPart, secondPart] = PORTFOLIO_CONFIG.tagline.split(",");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="glow absolute -left-32 -top-32 h-96 w-96 animate-float rounded-full"></div>
      <div
        className="glow absolute bottom-0 right-0 h-96 w-96 animate-float rounded-full"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="relative mx-auto max-w-4xl animate-fade-in text-center">
        <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          Available for new projects
        </p>
        <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl">
          {firstPart}, <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {secondPart}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">{PORTFOLIO_CONFIG.intro}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-light"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="glass rounded-full px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
