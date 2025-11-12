import PageShell from '../components/PageShell'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Settings() {
  const [sound, setSound] = useState(true)
  const [animations, setAnimations] = useState(true)
  const [brightness, setBrightness] = useState(50)

  const save = async () => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    await fetch(`${base}/settings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sound, animations, brightness })
    })
  }

  return (
    <PageShell>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl p-6 sm:p-8 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-neutral-600">Smooth toggles and sliders with candy accents.</p>
          </div>

          <div className="space-y-6">
            <label className="flex items-center justify-between p-4 rounded-2xl bg-white/60 border border-white/40">
              <span className="font-medium">Sound</span>
              <button onClick={() => setSound(v => !v)} className={`w-14 h-8 rounded-full p-1 transition-all ${sound ? 'bg-gradient-to-r from-fuchsia-400 to-sky-400' : 'bg-neutral-300'}`}>
                <span className={`block w-6 h-6 bg-white rounded-full transition-all ${sound ? 'translate-x-6' : ''}`}></span>
              </button>
            </label>

            <label className="flex items-center justify-between p-4 rounded-2xl bg-white/60 border border-white/40">
              <span className="font-medium">Animations</span>
              <button onClick={() => setAnimations(v => !v)} className={`w-14 h-8 rounded-full p-1 transition-all ${animations ? 'bg-gradient-to-r from-violet-400 to-indigo-400' : 'bg-neutral-300'}`}>
                <span className={`block w-6 h-6 bg-white rounded-full transition-all ${animations ? 'translate-x-6' : ''}`}></span>
              </button>
            </label>

            <div className="p-4 rounded-2xl bg-white/60 border border-white/40">
              <div className="flex items-center justify-between">
                <span className="font-medium">Brightness</span>
                <span className="text-neutral-600">{brightness}%</span>
              </div>
              <input type="range" min="0" max="100" value={brightness} onChange={e => setBrightness(parseInt(e.target.value))} className="w-full mt-3 appearance-none h-2 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400" />
            </div>
          </div>

          <div className="flex justify-end">
            <motion.button whileTap={{ scale: 0.98 }} onClick={save} className="px-5 py-3 rounded-2xl bg-neutral-900 text-white shadow-lg">Save Changes</motion.button>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
