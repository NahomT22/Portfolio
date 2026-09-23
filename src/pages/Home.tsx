import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import WorkList from '../components/WorkList'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-24 sm:px-10 sm:pt-52 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-wide text-muted uppercase"
        >
          {profile.role} — {profile.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ink sm:text-7xl"
        >
          Design, coordinated.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
        >
          I'm {profile.name}, an architecture graduate and BIM management
          student working across Revit, Navisworks, and Dynamo —{' '}
          {profile.tagline.toLowerCase()}
        </motion.p>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="flex items-end justify-between pb-8">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">Selected Work</h2>
          <span className="text-sm text-muted">{projects.length} projects</span>
        </Reveal>
        <WorkList projects={projects} />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
            {profile.bio[0]}
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-ink uppercase underline decoration-line underline-offset-4 transition-colors hover:text-clay"
          >
            More about me →
          </Link>
        </Reveal>
      </section>
    </>
  )
}
