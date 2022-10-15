import { useAuth } from '../../contexts/AuthContext'
import React from 'react'

function Login() {
  const { login } = useAuth()
  return (
    <div>
      <h3>login</h3>
      <button onClick={login}>login</button>
    </div>
  )
}

export default Login
