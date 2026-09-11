"use client";

import { motion } from "framer-motion";

const LINKS = {
  github: "https://github.com/Suri2904",
  strataRepo: "https://github.com/Suri2904/strata",
  strataLive: "https://strata-flax-theta.vercel.app/" as string | undefined,
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[var(--border-hairline)] bg-[var(--page)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
          <span className="font-display text-sm font-semibold tracking-tight">Suryansh Chandel</span>
          <nav className="flex items-center gap-5 text-sm text-[var(--ink-secondary)]">
            <a href="#work" className="hover:text-[var(--ink-primary)]">
              Work
            </a>
            <a href="#about" className="hover:text-[var(--ink-primary)]">
              About
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border-hairline)] px-3.5 py-1.5 hover:border-[var(--border-strong)] hover:text-[var(--ink-primary)]"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[var(--border-hairline)] px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] bg-[var(--surface-1)] px-3.5 py-1.5 text-xs text-[var(--ink-secondary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
            Product Analyst
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Suryansh Chandel
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-[var(--ink-secondary)] sm:text-lg">
            SQL, Python, BigQuery — and building small interactive explainers for fun.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="rounded-xl bg-[var(--ink-primary)] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-opacity hover:opacity-90"
            >
              See what I&apos;m building
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold hover:bg-[var(--surface-1)]"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <section id="work" className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-wider text-[var(--ink-muted)]">Selected work</p>
          <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Strata</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-base">
            A personal learning engine. Type any topic and get an AI-generated prerequisite graph — the actual
            order concepts need to be learned in to reach near-foundational mastery — then work through it with
            confidence-calibrated quizzes and spaced-repetition review scheduled around each concept&apos;s real
            retention half-life.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Gemini API", "Zustand", "Tailwind CSS", "Framer Motion"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border-hairline)] bg-[var(--surface-1)] px-3 py-1 text-xs text-[var(--ink-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {LINKS.strataLive && (
              <a
                href={LINKS.strataLive}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[var(--ink-primary)] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] hover:opacity-90"
              >
                Open Strata →
              </a>
            )}
            <a
              href={LINKS.strataRepo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[var(--border-strong)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--surface-1)]"
            >
              View source
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-wider text-[var(--ink-muted)]">About</p>
          <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Currently</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-base">
            Working as a Product Analyst — SQL, Python, and BigQuery day to day — and building small interactive
            projects on the side, mostly things that make a topic click faster than a wall of text would.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["SQL", "Python", "BigQuery", "Data Analysis", "Product Analytics"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--border-hairline)] px-3 py-1 text-xs text-[var(--ink-secondary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-[var(--border-hairline)] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[var(--ink-muted)]">© 2026 Suryansh Chandel</p>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-xs text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]">
            github.com/Suri2904
          </a>
        </div>
      </footer>
    </div>
  );
}
