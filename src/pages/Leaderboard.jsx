import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Leaderboard() {
  const [rows, setRows] = useState([])
  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/leaderboard`)
        const data = await res.json()
        setRows(data)
      } catch (e) {}
    }
    load()
  }, [])
  return (
    <PageShell>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-neutral-600">Smooth ranking animations with vibrant accents.</p>
        </div>
        <div className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl">
          {rows.map((r, i) => (
            <motion.div
              key={r.username + i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="grid grid-cols-6 gap-2 px-4 py-3 items-center border-b border-white/40 last:border-0"
            >
              <div className="col-span-1 text-sm text-neutral-500">#{i + 1}</div>
              <div className="col-span-3 font-medium">{r.username}</div>
              <div className="col-span-2 text-right font-bold text-neutral-900">{r.chips.toLocaleString()} chips</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
