import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'

export default function Landing() {
  return (
    <PageShell>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Ultra-smooth animations', color: 'from-fuchsia-400 to-rose-400' },
            { title: 'Minimalist UI', color: 'from-sky-400 to-cyan-400' },
            { title: 'Pastel neon palette', color: 'from-violet-400 to-indigo-400' },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl p-6 bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg"
            >
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${f.color}`} />
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-neutral-600">A premium feel with clean spacing, glassy surfaces, and delightful micro-interactions.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
