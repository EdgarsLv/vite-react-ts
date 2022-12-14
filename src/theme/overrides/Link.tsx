import React from 'react'
import { NavLink as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import { LinkProps } from '@mui/material/Link'
import { Theme } from '@mui/material/styles'

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} end />
})

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
  }
}
