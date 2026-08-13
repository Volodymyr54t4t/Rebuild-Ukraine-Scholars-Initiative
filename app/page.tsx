import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Docker',
]

const projects = [
  {
    name: 'Realtime Analytics Dashboard',
    description:
      'A high-throughput dashboard streaming millions of events with sub-second query latency.',
    tags: ['Next.js', 'WebSocket', 'ClickHouse'],
  },
  {
    name: 'Distributed Job Scheduler',
    description:
      'A fault-tolerant scheduler coordinating background work across a fleet of workers.',
    tags: ['Go', 'Redis', 'gRPC'],
  },
  {
    name: 'Design System & Component Library',
    description:
      'An accessible, themeable component library adopted across multiple product teams.',
    tags: ['React', 'Radix', 'Storybook'],
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-24 md:py-32">
          <p className="mb-5 font-mono text-sm text-accent">
            Software Engineer
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
            Volodymyr Chyzhevskyi
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I design and build reliable, well-crafted web applications — from
            the database to the pixel. I care about clean architecture, honest
            performance, and interfaces people actually enjoy using.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/motivation"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Why I build
            </Link>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Selected work
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            03 projects
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold leading-snug text-pretty">
                  {project.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
