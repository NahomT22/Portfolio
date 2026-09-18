import headshot from '../assets/headshot.webp'
import Reveal from '../components/Reveal'
import SoftwareSkills from '../components/SoftwareSkills'
import { profile } from '../data/profile'

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-40 pb-24 sm:px-10 sm:pt-52 sm:pb-32">
      <div className="grid items-end gap-10 sm:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="text-sm tracking-wide text-muted uppercase">About</p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-6xl">
            {profile.role}, based in {profile.location}.
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="justify-self-start sm:justify-self-end">
          <img
            src={headshot}
            alt={profile.name}
            className="h-48 w-auto object-contain sm:h-64"
          />
        </Reveal>
      </div>

      <div className="mt-16 grid gap-16 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.1} className="space-y-6">
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-serif text-xl text-ink">Education</h2>
          <ul className="mt-4 space-y-4 border-t border-line pt-4">
            {profile.education.map((edu) => (
              <li key={edu.school} className="text-sm">
                <p className="font-medium text-ink">{edu.school}</p>
                <p className="mt-1 text-muted">{edu.program}</p>
                <p className="text-muted">{edu.location}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-24">
        <SoftwareSkills />
      </div>
    </div>
  )
}
