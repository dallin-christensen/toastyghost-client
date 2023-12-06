import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from '../pages/Landing'
import Room from '../pages/Room'
import { useTheme } from '../context/ThemeContext'

function AppBase() {
  const { theme } = useTheme()
  return (
    <div className={`min-h-screen bg-background ${theme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppBase
