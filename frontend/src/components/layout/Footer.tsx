import { PORTFOLIO_CONFIG } from "@/data/portfolio";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/5 px-6 py-10 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          {PORTFOLIO_CONFIG.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <BrandIcon brand={s.brand} size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
