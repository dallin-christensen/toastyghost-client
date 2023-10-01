import { RoomProvider } from "./context/RoomContext"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CurrentUserProvider } from "./context/UserContext"
import './app.css'
import MuiProvider from "./styles/MuiProvider"
import AppBase from "./components/AppBase"
import { SnackbarProvider } from "./context/SnackbarContext"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentUserProvider>
        <RoomProvider>
          <SnackbarProvider>
            <MuiProvider>
              <AppBase />
            </MuiProvider>
          </SnackbarProvider>
        </RoomProvider>
      </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default App
