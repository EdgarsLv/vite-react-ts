import { router } from './routes'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts'
import { ThemeProvider } from './theme'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider as ModeProvider } from './contexts'
import { store } from './redux/store'

function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <HelmetProvider>
          <ModeProvider>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </ModeProvider>
        </HelmetProvider>
      </AuthProvider>
    </ReduxProvider>
  )
}

export default App
