import { profile } from '../data/profile'

export default function Footer() {
  const hasSocial = profile.social.tiktok || profile.social.youtube

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:px-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl text-ink sm:text-3xl">
            Let's build something worth coordinating.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 inline-block text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-clay"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted md:items-end">
          <span>{profile.location}</span>
          {hasSocial && (
            <div className="flex gap-4">
              {profile.social.tiktok && (
                <a href={profile.social.tiktok} className="hover:text-clay">
                  TikTok
                </a>
              )}
              {profile.social.youtube && (
                <a href={profile.social.youtube} className="hover:text-clay">
                  YouTube
                </a>
              )}
            </div>
          )}
          <span className="text-xs">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
      </div>
    </footer>
  )
}
