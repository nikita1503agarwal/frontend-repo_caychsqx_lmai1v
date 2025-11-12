import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import { Link } from 'react-router-dom'

const rooms = [
  { id: 'casual', title: 'Casual', players: 3, color: 'from-fuchsia-400 to-rose-400' },
  { id: 'standard', title: 'Standard', players: 5, color: 'from-sky-400 to-cyan-400' },
  { id: 'pro', title: 'Pro', players: 2, color: 'from-violet-400 to-indigo-400' },
]

export default function Lobby() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Game Lobby</h1>
            <p className="text-neutral-600">Pick a table. Smooth hover, minimal cards, vibrant accents.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg p-6 flex flex-col"
            >
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${r.color}`} />
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">{r.title}</h3>
              <p className="text-neutral-600">Players online: {r.players}</p>
              <div className="mt-6">
                <Link to={`/table/${r.id}`} className="inline-flex items-center px-4 py-2 rounded-xl bg-neutral-900 text-white hover:opacity-90 transition-colors">Join Table</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
