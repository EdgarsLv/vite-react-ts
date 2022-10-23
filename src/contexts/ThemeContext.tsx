import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { ReactNode } from 'react'
import { useContext } from 'react'

const initialState = {
  onToggleMode: () => {},
  themeMode: 'light',
}

const ThemeContext = createContext(initialState)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setTheme] = useLocalStorage('themeMode', 'light')

  const onToggleMode = () => {
    setTheme(themeMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        onToggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useThemeMode = () => {
  const context = useContext(ThemeContext)

  if (!context) throw new Error('Auth context must be use inside AuthProvider')

  return context
}
