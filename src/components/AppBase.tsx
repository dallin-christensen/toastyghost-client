import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Landing from "../pages/Landing"
import Room from "../pages/Room"
import Header from "./Header"

function AppBase() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/room/:roomId' element={<Room />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppBase