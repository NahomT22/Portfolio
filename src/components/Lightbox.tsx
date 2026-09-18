import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

type LightboxImage = { src: string; caption: string }

export default function Lightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!image) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-ink/95 p-6"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-6 right-6 font-serif text-3xl text-paper transition-opacity hover:opacity-70"
          >
            ×
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            src={image.src}
            alt={image.caption}
            className="max-h-[85vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-sm text-paper/80">{image.caption}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
