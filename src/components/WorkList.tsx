import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import Reveal from './Reveal'

export default function WorkList({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<Project | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const previewX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const previewY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      }}
    >
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <li
              onMouseEnter={() => setHovered(project)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group flex items-center gap-5 py-7 sm:gap-8 sm:py-9"
              >
                <span className="font-serif text-sm text-muted sm:text-base">
                  {project.index}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-clay sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {project.category} · {project.building}
                  </p>
                </div>

                <img
                  src={project.cover}
                  alt=""
                  className="h-16 w-24 shrink-0 rounded-sm object-cover md:hidden"
                />

                <span
                  aria-hidden
                  className="hidden shrink-0 font-serif text-xl text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-clay sm:inline-block"
                >
                  →
                </span>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {hovered && (
          <motion.img
            key={hovered.slug}
            src={hovered.cover}
            alt=""
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            style={{ x: previewX, y: previewY }}
            className="pointer-events-none fixed top-0 left-0 z-40 hidden h-56 w-80 -translate-x-1/2 -translate-y-1/2 rounded-md object-cover shadow-xl md:block"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
