import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from '../pages/Landing'
import Room from '../pages/Room'
import styled from '@emotion/styled'

const AppBg = styled.div`
  height: 100%;
  background-color: white;
`

function AppBase() {
  return (
    <>
      <AppBg>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/room/:roomId" element={<Room />} />
          </Routes>
        </Router>
      </AppBg>
    </>
  )
}

export default AppBase
