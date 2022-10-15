import { createContext, useEffect, useReducer, useState, useContext } from 'react'
// import { supabase } from '../services/supabase'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

const reducer = (state: any, action: any) => {
  if (action.type === 'INITIALISE') {
    const { isAuthenticated, user } = action.payload
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    }
  }

  return state
}

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
})

function AuthProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    if (session) {
      dispatch({
        type: 'INITIALISE',
        payload: { isAuthenticated: true, user: session },
      })
    } else {
      dispatch({
        type: 'INITIALISE',
        payload: { isAuthenticated: false, user: null },
      })
    }
  }, [session])

  // useEffect(() => {
  //   setSession(supabase.auth.session())

  //   const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {

  //     setSession(session)
  //   })

  //   if (session) {
  //     dispatch({
  //       type: 'INITIALISE',
  //       payload: { isAuthenticated: true, user: session.user },
  //     })
  //   } else {
  //     dispatch({
  //       type: 'INITIALISE',
  //       payload: { isAuthenticated: false, user: null },
  //     })
  //   }

  //   return () => {
  //     authListener.unsubscribe()
  //   }

  // }, [session])

  const login = () => {
    setSession(true)
  }
  const register = () => {
    setSession(true)
  }
  const logout = () => {
    setSession(null)
  }
  // const login = (email, password) => supabase.auth.signIn({ email, password })

  // const register = ({ email, password }) => supabase.auth.signUp({ email, password })

  // const logout = () => supabase.auth.signOut()

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('Auth context must be use inside AuthProvider')

  return context
}
