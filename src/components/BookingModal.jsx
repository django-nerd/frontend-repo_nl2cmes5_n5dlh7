import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'

export default function BookingModal() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-booking', handler)
    return () => window.removeEventListener('open-booking', handler)
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]" />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 140, damping: 20 }}
                className="fixed left-1/2 top-1/2 z-[101] w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#0B0B0B] shadow-[0_0_40px_rgba(212,175,55,0.20)]"
              >
                <div className="relative">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500" />
                  <div className="p-1">
                    <iframe
                      title="Calendly"
                      src="https://calendly.com/melioram/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                      className="h-[75vh] w-full rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
