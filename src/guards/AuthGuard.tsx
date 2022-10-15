import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Login from '../pages/auth'

export default function AuthGuard({ children }: any) {
  const { isAuthenticated, isInitialized } = useAuth()
  const { pathname } = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<any>(null)

  if (!isInitialized) {
    return <div>loading</div>
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    return <Login />
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <>{children}</>
}
