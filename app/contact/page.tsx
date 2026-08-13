import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Volodymyr Chyzhevskyi',
  description:
    'Get in touch with Volodymyr Chyzhevskyi for collaborations, roles, or a chat about software.',
}

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@volodymyr.dev',
    href: 'mailto:hello@volodymyr.dev',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/volodymyr',
    href: 'https://github.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/volodymyr',
    href: 'https://linkedin.com',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-24">
          <p className="mb-5 font-mono text-sm text-accent">// contact</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether it&apos;s a project, a role, or just a good technical
            conversation — my inbox is open. I usually reply within a day or two.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <aside className="md:col-span-2">
            <h2 className="font-display text-lg font-semibold">
              Other ways to reach me
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {channels.map((channel) => {
                const Icon = channel.icon
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        channel.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50"
                    >
                      <span className="inline-flex rounded-md border border-border bg-muted p-2 text-accent">
                        <Icon size={18} />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="text-sm text-foreground transition-colors group-hover:text-accent">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <span className="inline-flex rounded-md border border-border bg-muted p-2 text-accent">
                <MapPin size={18} />
              </span>
              <span className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Based in
                </span>
                <span className="text-sm text-foreground">
                  Ukraine {'\u00B7'} Remote-friendly
                </span>
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
