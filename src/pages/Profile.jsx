import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

export default function Profile() {
  return (
    <PageShell>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl p-6 sm:p-8 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Your Profile</h1>
              <p className="text-neutral-600">Minimal, colorful accents, clean spacing</p>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {['Username', 'Bio', 'Favorite Variant', 'Color Theme'].map((label, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-4 bg-white/60 border border-white/40">
                <p className="text-sm text-neutral-500">{label}</p>
                <p className="mt-1 text-neutral-900">—</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
