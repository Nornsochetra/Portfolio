import { PORTFOLIO_CONFIG } from "@/data/portfolio";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500">
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
              className="text-slate-400 transition-colors hover:text-white"
            >
              <BrandIcon brand={s.brand} size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
