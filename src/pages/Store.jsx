import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Store() {
  const [packages, setPackages] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/store`)
        const data = await res.json()
        setPackages(data.packages || [])
      } catch (e) {}
    }
    load()
  }, [])

  const purchase = async (pkg) => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    await fetch(`${base}/purchase`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'Guest', package_id: pkg.id })
    })
    alert(`Purchased ${pkg.label}! (demo)`)
  }

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Store</h1>
          <p className="text-neutral-600">Clean, bright, minimal cards for chip packs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg">
              <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400" />
              <h3 className="mt-4 text-xl font-semibold">{pkg.label}</h3>
              <p className="text-neutral-600">{pkg.chips.toLocaleString()} chips</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold">${pkg.price}</span>
                <motion.button whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }} onClick={() => purchase(pkg)} className="px-4 py-2 rounded-xl bg-neutral-900 text-white shadow-lg">Buy</motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
