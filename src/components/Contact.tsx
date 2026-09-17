import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="text-2xl font-semibold text-text">Get in touch</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Have a project in mind or just want to say hi? My inbox is open.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        {profile.email}
      </a>
      <div className="mt-6 flex justify-center gap-6 text-sm text-muted">
        <a href={profile.social.github} className="hover:text-text">
          GitHub
        </a>
        <a href={profile.social.linkedin} className="hover:text-text">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
