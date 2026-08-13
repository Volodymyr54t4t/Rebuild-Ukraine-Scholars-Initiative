'use client'

import { useState, type FormEvent } from 'react'
import { Check, Loader2, Send } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(data: FormData) {
    const next: Record<string, string> = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (name.length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Please enter a valid email address.'
    if (message.length < 10)
      next.message = 'Your message should be at least 10 characters.'

    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const validation = validate(data)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('submitting')
    // Simulate delivery. Wire this to a server action or email API when ready.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('success')
    form.reset()
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-10 text-center">
        <div className="mb-4 inline-flex rounded-full border border-accent/40 bg-accent/10 p-3 text-accent">
          <Check size={24} />
        </div>
        <h2 className="font-display text-xl font-semibold">Message sent</h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 md:p-8"
    >
      <div className="flex flex-col gap-5">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </Field>

        <Field label="Message" htmlFor="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me a little about what you have in mind..."
            className="w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </Field>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending
            </>
          ) : (
            <>
              <Send size={16} />
              Send message
            </>
          )}
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-mono text-xs uppercase tracking-wide text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-accent">{error}</p>}
    </div>
  )
}
