import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-sm text-foreground">
            <span className="text-accent">{'>'}</span> volodymyr
            <span className="text-muted-foreground">.dev</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {'\u00A9'} {new Date().getFullYear()} Volodymyr Chyzhevskyi. Built with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <Link
            href="/contact"
            aria-label="Contact"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
