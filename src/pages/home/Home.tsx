import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

function Home() {
  const { logout } = useAuth()
  return (
    <div>
      <h3>Home</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to='about'>about</Link>
        <Link to='contacts'>contacts</Link>

        <hr />

        <button onClick={logout}>logout</button>
      </div>
    </div>
  )
}

export default Home
