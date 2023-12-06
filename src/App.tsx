import { RoomProvider } from './context/RoomContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CurrentUserProvider } from './context/UserContext'
import AppBase from './components/AppBase'
import { SnackbarProvider } from './context/SnackbarContext'
import './app.css'
import { LoadingProvider } from './context/LoadingScreenContext'
import { ThemeProvider } from './context/ThemeContext'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentUserProvider>
        <RoomProvider>
          <ThemeProvider>
            <SnackbarProvider>
              <LoadingProvider>
                <AppBase />
              </LoadingProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </RoomProvider>
      </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default App
