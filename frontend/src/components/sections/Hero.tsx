import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
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
      <div
        className="glow absolute right-1/4 top-1/3 h-64 w-64 animate-float-slow rounded-full opacity-60"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute left-1/2 top-24 h-2 w-2 -translate-x-1/2 animate-ping rounded-full bg-indigo-400/60"></div>
      <div
        className="absolute bottom-1/3 left-1/4 h-1.5 w-1.5 animate-ping rounded-full bg-purple-400/60"
        style={{ animationDelay: "1.2s" }}
      ></div>

      <div className="relative mx-auto max-w-4xl animate-fade-in text-center">
        <p className="glass mb-6 inline-flex animate-pop-in items-center gap-2 rounded-full px-4 py-1.5 text-sm text-slate-600 transition-transform hover:scale-105 dark:text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          Available for new projects
        </p>
        <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-7xl">
          {firstPart}, <br />
          <span className="gradient-text-animated animate-gradient-x bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {secondPart}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
          {PORTFOLIO_CONFIG.intro}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-accent/50 active:translate-y-0 active:scale-95"
          >
            View my work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900/10 active:translate-y-0 active:scale-95 dark:text-white dark:hover:bg-white/10"
          >
            Get in touch
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 transition-colors hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
