import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <p className="text-sm font-medium text-accent">{profile.role}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
        Hi, I'm {profile.name}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-muted">{profile.tagline}</p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
