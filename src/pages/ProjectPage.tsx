import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { getProject, projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug ?? '')

  if (!project) return <Navigate to="/" replace />

  const currentIdx = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIdx + 1) % projects.length]

  return (
    <div className="pt-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <Link
            to="/"
            className="text-sm tracking-wide text-muted uppercase transition-colors hover:text-clay"
          >
            ← All work
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 border-b border-line pb-12 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <p className="font-serif text-sm text-muted">{project.index}</p>
            <h1 className="mt-2 font-serif text-4xl leading-tight text-ink sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5 text-sm">
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">Type</p>
              <p className="mt-1 text-ink">{project.category}</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">Location</p>
              <p className="mt-1 text-ink">{project.location}</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">Building</p>
              <p className="mt-1 text-ink">{project.building}</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">Role</p>
              <p className="mt-1 text-ink">{project.role}</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">Software</p>
              <p className="mt-1 text-ink">{project.software.join(', ')}</p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-16 sm:px-10 sm:py-24">
        {project.gallery.map((image, i) => (
          <Reveal key={image.src} delay={i * 0.05}>
            <img
              src={image.src}
              alt={image.caption}
              className="w-full rounded-sm object-cover"
            />
            <p className="mt-3 text-sm text-muted">{image.caption}</p>
          </Reveal>
        ))}
      </div>

      <div className="border-t border-line">
        <Link
          to={`/work/${next.slug}`}
          className="group mx-auto flex max-w-6xl items-center justify-between px-6 py-16 sm:px-10 sm:py-24"
        >
          <div>
            <p className="text-sm tracking-wide text-muted uppercase">Next project</p>
            <h2 className="mt-3 font-serif text-3xl text-ink transition-colors group-hover:text-clay sm:text-5xl">
              {next.title}
            </h2>
          </div>
          <span className="font-serif text-2xl text-muted transition-all group-hover:translate-x-1 group-hover:text-clay">
            →
          </span>
        </Link>
      </div>
    </div>
  )
}
