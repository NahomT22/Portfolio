import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Nahom Haile
        </Link>

        <nav className="hidden items-center gap-8 text-sm tracking-wide text-ink sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `uppercase transition-colors hover:text-clay ${isActive ? 'text-clay' : 'text-muted'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-ink px-4 py-1.5 uppercase tracking-wide transition-colors hover:border-clay hover:text-clay"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px bg-ink transition-all duration-300 ${open ? 'w-6 translate-y-[3.5px] rotate-45' : 'w-6'}`}
          />
          <span
            className={`h-px bg-ink transition-all duration-300 ${open ? 'w-6 -translate-y-[3.5px] -rotate-45' : 'w-4'}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-line/70 bg-paper sm:hidden"
          >
            <nav className="flex flex-col gap-6 px-6 py-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-ink"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
