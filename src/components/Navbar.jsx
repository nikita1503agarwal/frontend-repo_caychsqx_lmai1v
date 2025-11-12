import { Link, useLocation } from 'react-router-dom'
import { Menu, Settings, User, Store, Trophy, Home, Gamepad2 } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/lobby', label: 'Lobby', icon: Gamepad2 },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { to: '/store', label: 'Store', icon: Store },
  { to: '/profile', label: 'Profile', icon: User },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Navbar() {
  const location = useLocation()
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border-b border-white/20 dark:border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-fuchsia-400 via-sky-400 to-emerald-400 shadow-sm" />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">Pastel Poker</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`group inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                    active
                      ? 'bg-gradient-to-br from-fuchsia-500/20 to-sky-500/20 text-neutral-900 dark:text-white'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              )
            })}
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/60 dark:hover:bg-white/10 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </header>
  )
}
