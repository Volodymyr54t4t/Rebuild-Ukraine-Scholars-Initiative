import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Compass, Layers, Users, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Motivation — Volodymyr Chyzhevskyi',
  description:
    'What drives Volodymyr Chyzhevskyi as a software engineer: the principles and values behind the work.',
}

const principles = [
  {
    icon: Compass,
    title: 'Solve the real problem',
    body: 'Code is a means, not an end. I start from the actual need — the person, the constraint, the outcome — and let that shape the solution rather than reaching for the trendiest tool.',
  },
  {
    icon: Layers,
    title: 'Build things that last',
    body: 'I favor simple, legible systems over clever ones. Good architecture is the kind a teammate can understand six months later and change without fear.',
  },
  {
    icon: Users,
    title: 'Craft for people',
    body: 'Every interface is a conversation. Accessibility, performance, and clarity are not extras — they are the baseline of respect for whoever ends up using what I ship.',
  },
  {
    icon: Wrench,
    title: 'Stay a beginner',
    body: 'The field never stops moving, and neither do I. I treat every project as a chance to learn something I did not know last week.',
  },
]

export default function MotivationPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-20 md:py-24">
          <p className="mb-5 font-mono text-sm text-accent">// motivation</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Why I build
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            I fell in love with software the first time I realized a few lines
            of code could turn an idea into something other people could hold in
            their hands. That feeling still drives me — the gap between
            imagination and reality is smaller than it looks, and my job is to
            close it well.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p) => {
            const Icon = p.icon
            return (
              <article
                key={p.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex rounded-md border border-border bg-muted p-2 text-accent">
                  <Icon size={20} />
                </div>
                <h2 className="font-display text-lg font-semibold text-pretty">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <blockquote className="rounded-lg border-l-2 border-accent bg-card px-6 py-8">
          <p className="font-display text-xl leading-relaxed text-pretty md:text-2xl">
            {'\u201C'}Simplicity is a feature. The best systems are the ones you
            barely notice, because they quietly do exactly what you expected.
            {'\u201D'}
          </p>
        </blockquote>

        <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Working on something interesting?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            I am always happy to talk through a hard problem or a new idea. If
            our motivations align, let&apos;s build something.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Reach out
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
