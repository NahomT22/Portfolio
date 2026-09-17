import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-text">About</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{profile.bio}</p>
    </section>
  )
}
