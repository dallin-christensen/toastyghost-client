import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Landing from "./pages/Landing"
import Room from "./pages/Room"
import { RoomProvider } from "./context/RoomContext"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CurrentUserProvider } from "./context/UserContext"
import './app.css'
import MuiProvider from "./styles/MuiProvider"
import Header from "./components/Header"


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentUserProvider>
        <RoomProvider>
          <MuiProvider>
            <>
              <Header />
              <Router>
                <Routes>
                  <Route path='/' element={<Landing />} />
                  <Route path='/room/:roomId' element={<Room />} />
                </Routes>
              </Router>
            </>
          </MuiProvider>
        </RoomProvider>
      </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default App
