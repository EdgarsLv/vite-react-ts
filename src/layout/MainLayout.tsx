import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Header } from '../sections/header'
import { Sidebar } from '../sections/sidebar'
import { Footer } from '../sections/footer'
import { getPageHeight } from '../utils/getPageHeight'

function MainLayout(): ReactElement {
  return (
    <Box>
      <Header />
      <Sidebar />

      <Box
        sx={{
          minHeight: (theme) => `calc(100vh - ${theme.spacing(1)})`,
          pt: (theme) => `${getPageHeight(theme).topSpacing}px`,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout
