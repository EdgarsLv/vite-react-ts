import { useAuth } from '../../contexts/AuthContext'
import { Link, Typography, Button } from '@mui/material'
import { Page } from '../../components'

function Login() {
  const { login } = useAuth()
  return (
    <Page title='Login'>
      <Typography>login</Typography>
      <Button onClick={login}>login</Button>

      <Link href='/register'>to register</Link>
    </Page>
  )
}

export default Login
