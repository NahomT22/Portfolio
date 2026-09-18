import { softwareIcons } from '../data/softwareIcons'

export default function SoftwareIconBadge({ name }: { name: string }) {
  const icon = softwareIcons[name]
  if (!icon) return null

  if (icon.kind === 'brand') {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
        <path d={icon.path} fill={icon.color} />
      </svg>
    )
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-3.5 min-w-3.5 shrink-0 items-center justify-center rounded-[3px] border border-ink/25 px-0.5 text-[8px] leading-none font-medium tracking-tighter text-ink/70"
    >
      {icon.label}
    </span>
  )
}
