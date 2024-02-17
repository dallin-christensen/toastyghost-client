import { ReactNode, createContext, useContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import IconButton from '../elements/IconButton'
import { RiMoonLine } from "react-icons/ri";

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
      <div className={theme}>
        {children}
        <IconButton
          className="dont-register-avatar-movement absolute top-2 right-3"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <RiMoonLine className="h-6 min-h-6 w-6 min-w-6" />
        </IconButton>
      </div>
    </ThemeContext.Provider>
  )
}
