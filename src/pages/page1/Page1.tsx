import { useAuth } from '../../contexts/AuthContext'
import { Box, Stack, Link, Button } from '@mui/material'
import { Page } from '../../components'
import { Typography } from '@mui/material'

function Home() {
  return (
    <Page title='Page 1'>
      <Typography variant='h3'>Page 1</Typography>
    </Page>
  )
}

export default Home
