import { ReactNode, useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
} from '@mui/material/styles'
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import componentsOverride from './overrides'
import { useThemeMode } from '../contexts/ThemeContext'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { themeMode } = useThemeMode()
  const isLight = themeMode === 'light'

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 2 },
    }),
    [isLight],
  )

  const theme = createTheme(themeOptions as ThemeOptions)
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
