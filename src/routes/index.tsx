import { Suspense, lazy } from 'react'
import { Navigate, useRoutes, RouteObject } from 'react-router-dom'
import { AuthGuard, GuestGuard } from '../guards'

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense
      fallback={
        <div>
          <p>loading...</p>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <AuthGuard>
          <Home />
        </AuthGuard>
      ),
    },
    {
      path: 'about',
      element: (
        <AuthGuard>
          <About />
        </AuthGuard>
      ),
    },
    {
      path: 'contacts',
      element: (
        <AuthGuard>
          <Contacts />
        </AuthGuard>
      ),
    },
    {
      path: 'login',
      element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      ),
    },
  ] as RouteObject[])
}

const Home = Loadable(lazy(() => import('../pages/home')))
const About = Loadable(lazy(() => import('../pages/about')))
const Contacts = Loadable(lazy(() => import('../pages/contacts')))
const Login = Loadable(lazy(() => import('../pages/auth')))
