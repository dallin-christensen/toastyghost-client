import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Landing from "./pages/Landing"
import Room from "./pages/Room"
import { RoomProvider } from "./context/RoomContext"

function App() {
  return (
    <RoomProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/room/:roomId' element={<Room />} />
        </Routes>
      </Router>
    </RoomProvider>
  )
}

export default App
