import { ReactNode, createContext, useCallback, useContext, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'

type LoadingContextType = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

const LoadingContext = createContext({} as LoadingContextType)

export function useLoading() {
  return useContext(LoadingContext)
}

type LoadingProviderProps = {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false)
  const cachedSetLoading = useCallback((val: boolean) => {
    setLoading(val)
  }, [])

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading: cachedSetLoading,
      }}
    >
      {loading && <LoadingScreen />}
      {children}
    </LoadingContext.Provider>
  )
}
