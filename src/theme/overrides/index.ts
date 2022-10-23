import Link from './Link'
import CssBaseline from './CssBaseline'
import { Theme } from '@mui/material/styles'

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Link(theme), CssBaseline())
}
