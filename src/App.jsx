import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Lobby from './pages/Lobby'
import Table from './pages/Table'
import Profile from './pages/Profile'
import Store from './pages/Store'
import Leaderboard from './pages/Leaderboard'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/table/:id" element={<Table />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/store" element={<Store />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App
