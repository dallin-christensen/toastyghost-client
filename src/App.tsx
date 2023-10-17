import { RoomProvider } from './context/RoomContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CurrentUserProvider } from './context/UserContext'
import AppBase from './components/AppBase'
import { SnackbarProvider } from './context/SnackbarContext'
import './app.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentUserProvider>
        <RoomProvider>
          <SnackbarProvider>
            <AppBase />
          </SnackbarProvider>
        </RoomProvider>
      </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default App
