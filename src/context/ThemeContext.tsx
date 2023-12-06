import { ReactNode, createContext, useContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'

type ThemeType = 'light' | 'dark'

type ThemeContextType = {
  setTheme: (theme: ThemeType) => void
  theme: ThemeType
}

const ThemeContext = createContext({} as ThemeContextType)

export function useTheme() {
  return useContext(ThemeContext)
}

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<ThemeType>('theme', 'light')

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
