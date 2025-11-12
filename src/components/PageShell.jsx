import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

export default function PageShell({ children }) {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_80%_at_50%_-10%,rgba(236,72,153,0.18),transparent),radial-gradient(60%_80%_at_120%_20%,rgba(56,189,248,0.18),transparent)]">
      <Navbar />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
