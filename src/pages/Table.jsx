import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import { useParams } from 'react-router-dom'

function Card({ rank = 'A', suit = '♠' }) {
  return (
    <motion.div
      layout
      initial={{ rotate: -6, y: 20, opacity: 0 }}
      animate={{ rotate: 0, y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="relative w-20 h-28 bg-white rounded-xl shadow-xl border border-neutral-200 flex items-center justify-center text-2xl"
    >
      <span className="select-none">
        <span className="font-semibold">{rank}</span>
        <span className="ml-1 text-pink-500">{suit}</span>
      </span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-pink-500/5 pointer-events-none" />
    </motion.div>
  )
}

function Chip({ color = 'bg-pink-400', amount = 100 }) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`w-10 h-10 rounded-full ${color} shadow-lg ring-4 ring-white/70`}>
      <div className="w-full h-full rounded-full grid place-items-center text-white text-xs font-bold">{amount}</div>
    </motion.div>
  )
}

export default function Table() {
  const { id } = useParams()
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl p-6 sm:p-8 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Table: {id}</h1>
            <div className="flex items-center gap-2">
              <Chip color="bg-fuchsia-400" amount={100} />
              <Chip color="bg-sky-400" amount={500} />
              <Chip color="bg-emerald-400" amount={1000} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 place-items-center">
            <Card rank="A" suit="♠" />
            <Card rank="K" suit="♥" />
            <Card rank="Q" suit="♦" />
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                key={i}
                className="rounded-2xl px-4 py-3 bg-neutral-900 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Action {i + 1}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
