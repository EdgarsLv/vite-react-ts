import React, { ReactElement } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import InvertColorsTwoToneIcon from '@mui/icons-material/InvertColorsTwoTone'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import { Menu, MenuItem, Paper, Typography, Avatar } from '@mui/material'
import { useAppDispatch } from '../../redux/store'
import { setOpen } from '../../redux/slices/counterSlice'
import useResponsive, { Responsive, Size } from '../../hooks/useResponsive'
import { useAuth } from '../../contexts/AuthContext'
import { useThemeMode } from '../../contexts/ThemeContext'

export default function Header(): ReactElement {
  const dispatch = useAppDispatch()
  const { logout } = useAuth()
  const { themeMode, onToggleMode } = useThemeMode()
  const isMobile = useResponsive(Responsive.Down, Size.Lg)

  const handleOpen = (): void => {
    dispatch(setOpen())
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    setAnchorEl(null)
    logout()
  }

  return (
    <Box>
      <AppBar elevation={1} color='default' position='fixed'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobile && (
            <IconButton
              onClick={handleOpen}
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!isMobile && (
            <Paper variant='outlined' sx={{ p: 1, m: 1 }}>
              <Typography>LOGO</Typography>
            </Paper>
          )}

          <Box>
            <Tooltip title='Theme' arrow>
              <IconButton onClick={onToggleMode} color='info' size='large'>
                <InvertColorsTwoToneIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title='Profile' arrow>
              <IconButton
                id='demo-positioned-button'
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup='true'
                size='large'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar
                  variant='rounded'
                  sx={{ width: 30, height: 30, bgcolor: (theme) => theme.palette.info.main }}
                >
                  E
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
