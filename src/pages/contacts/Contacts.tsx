import Page from '../../components/Page'
import { Link } from 'react-router-dom'

function Contacts() {
  return (
    <Page title='contacts'>
      <div>
        <h3>Contacts</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
        </div>
      </div>
    </Page>
  )
}

export default Contacts
