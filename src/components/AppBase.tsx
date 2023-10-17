import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from '../pages/Landing'
import Room from '../pages/Room'

function AppBase() {
  return (
    <>
      <div className="h-full bg-background">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/room/:roomId" element={<Room />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default AppBase
