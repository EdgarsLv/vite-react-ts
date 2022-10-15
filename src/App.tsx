import Router from './routes'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </AuthProvider>
      </BrowserRouter>
    </ReduxProvider>
  )
}

export default App
