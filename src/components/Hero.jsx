import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/0 to-white/80" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900">
            Minimalist Poker, Reimagined
          </h1>
          <p className="mt-4 text-neutral-700 text-lg">
            Clean lines, candy colors, and silky-smooth animations. A premium poker experience on web.
          </p>
          <div className="mt-8 pointer-events-auto">
            <Link to="/lobby" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-semibold bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 shadow-lg shadow-fuchsia-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Play Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
