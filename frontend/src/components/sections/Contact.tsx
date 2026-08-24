"use client";

import { useState, type FormEvent } from "react";
import { Check, CircleAlert, LoaderCircle, Mail, Send } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

/** Maps the API's error codes onto something a visitor can act on. */
const ERROR_COPY: Record<string, string> = {
  not_configured: "The form isn't wired up yet.",
  invalid_email: "That email address doesn't look right.",
  missing_fields: "Please fill in every field.",
  too_long: "That message is a little too long — try trimming it.",
  invalid_body: "Something went wrong sending that.",
  send_failed: "The message couldn't be delivered.",
};

const INPUT_CLASS =
  "w-full rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:-translate-y-0.5 focus:border-accent-light focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-slate-500";

const LABEL_CLASS =
  "mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  // Honeypot: hidden from people, irresistible to bots.
  const [company, setCompany] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const code =
          (data as { error?: string } | null)?.error ?? "send_failed";
        setError(ERROR_COPY[code] ?? ERROR_COPY.send_failed);
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError("Couldn't reach the server — check your connection.");
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind? Send a message and I'll get back to you as soon as I can."
        />
        <Reveal>
          {status === "sent" ? (
            <div className="glass animate-pop-in rounded-2xl p-10 text-center">
              <div
                className="mx-auto mb-4 flex h-16 w-16 animate-pop-in items-center justify-center rounded-full bg-emerald-400/10"
                style={{ animationDelay: "100ms" }}
              >
                <Check size={28} className="text-emerald-400" />
              </div>
              <p className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                Thanks, {form.name || "friend"}!
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                Your message is on its way to my inbox — I&apos;ll reply to{" "}
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {form.email}
                </span>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass space-y-6 rounded-2xl p-8 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={LABEL_CLASS}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    disabled={sending}
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={INPUT_CLASS}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={LABEL_CLASS}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    required
                    disabled={sending}
                    type="email"
                    autoComplete="email"
                    maxLength={200}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={INPUT_CLASS}
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className={LABEL_CLASS}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  disabled={sending}
                  rows={5}
                  maxLength={5000}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`resize-none ${INPUT_CLASS}`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Off-screen rather than display:none, which some bots skip. */}
              <div
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                aria-hidden
              >
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              {status === "error" && error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm"
                >
                  <CircleAlert
                    size={18}
                    className="mt-0.5 shrink-0 text-red-400"
                  />
                  <p className="text-slate-600 dark:text-slate-300">
                    {error} You can email me directly at{" "}
                    <a
                      href={`mailto:${PORTFOLIO_CONFIG.email}`}
                      className="font-medium text-accent-light underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                    >
                      {PORTFOLIO_CONFIG.email}
                    </a>
                    .
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-accent/50 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
                >
                  {sending ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                      />
                      Send message
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PORTFOLIO_CONFIG.email}`}
                  className="inline-flex items-center justify-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  <Mail size={15} />
                  {PORTFOLIO_CONFIG.email}
                </a>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
