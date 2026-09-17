import { skills } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-text">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-border px-3 py-1.5 text-sm text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
