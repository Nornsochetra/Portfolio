"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind? Send a message and I'll get back to you within a day."
        />
        <Reveal>
          {sent ? (
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
                This is a prototype, so nothing was actually sent — but in production this form
                would reach my inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass space-y-6 rounded-2xl p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:-translate-y-0.5 focus:border-accent-light focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-slate-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:-translate-y-0.5 focus:border-accent-light focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-slate-500"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:-translate-y-0.5 focus:border-accent-light focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-slate-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-accent/50 active:translate-y-0 active:scale-95 sm:w-auto"
              >
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                />
                Send message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
