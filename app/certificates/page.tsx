import type { Metadata } from 'next'
import { Award, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certificates — Volodymyr Chyzhevskyi',
  description:
    'Professional certifications and credentials earned by Volodymyr Chyzhevskyi.',
}

type Certificate = {
  title: string
  issuer: string
  year: string
  id: string
  skills: string[]
  url?: string
}

const certificates: Certificate[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2024',
    id: 'AWS-SAA-2024-0417',
    skills: ['Cloud Architecture', 'EC2', 'S3', 'VPC'],
    url: '#',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    year: '2023',
    id: 'META-FE-2023-8829',
    skills: ['React', 'UI/UX', 'Version Control'],
    url: '#',
  },
  {
    title: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    year: '2023',
    id: 'PSM-I-2023-1142',
    skills: ['Agile', 'Scrum', 'Team Facilitation'],
    url: '#',
  },
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    year: '2022',
    id: 'MDB-DEV-2022-6033',
    skills: ['NoSQL', 'Aggregation', 'Data Modeling'],
    url: '#',
  },
  {
    title: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    year: '2022',
    id: 'GCP-ACE-2022-2971',
    skills: ['GCP', 'Kubernetes', 'IAM'],
    url: '#',
  },
  {
    title: 'CS50: Introduction to Computer Science',
    issuer: 'Harvard University / edX',
    year: '2021',
    id: 'CS50-2021-0508',
    skills: ['Algorithms', 'C', 'Python'],
    url: '#',
  },
]

export default function CertificatesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-24">
          <p className="mb-5 font-mono text-sm text-accent">// credentials</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Certificates
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            A record of the certifications I&apos;ve earned along the way. Each
            one marks a deliberate step in deepening how I build and ship
            software.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-md border border-border bg-muted p-2 text-accent">
                  <Award size={20} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {cert.year}
                </span>
              </div>

              <h2 className="mt-4 font-display text-lg font-semibold leading-snug text-pretty">
                {cert.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {cert.issuer}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-[11px] text-muted-foreground">
                  ID: {cert.id}
                </span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-accent"
                  >
                    Verify
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
