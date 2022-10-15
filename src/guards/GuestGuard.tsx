import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const PATH_MAIN = { root: '/' }

export default function GuestGuard({ children }: any) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={PATH_MAIN.root} />
  }

  return <>{children}</>
}
