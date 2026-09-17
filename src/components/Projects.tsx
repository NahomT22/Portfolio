import { projects } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-text">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <h3 className="font-medium text-text">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              {project.link && (
                <a href={project.link} className="text-text underline-offset-4 hover:underline">
                  Live
                </a>
              )}
              {project.repo && (
                <a href={project.repo} className="text-muted underline-offset-4 hover:underline">
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
