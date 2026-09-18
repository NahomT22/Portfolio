import Reveal from './Reveal'
import SoftwareIconBadge from './SoftwareIconBadge'
import { profile } from '../data/profile'

export default function SoftwareSkills() {
  return (
    <div>
      <Reveal>
        <h2 className="font-serif text-2xl text-ink">Software</h2>
      </Reveal>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {profile.toolGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <li className="flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <p className="w-full shrink-0 text-xs tracking-wide text-muted uppercase sm:w-48">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-sm text-ink"
                  >
                    <SoftwareIconBadge name={tool} />
                    {tool}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
