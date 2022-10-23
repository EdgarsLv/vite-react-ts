import type { Theme } from '@mui/material'

function getPageHeight(theme: Theme) {
  const topSpacing = Number(theme.mixins.toolbar.minHeight) + parseInt(theme.spacing(1))

  const pageHeight = `calc(100vh - ${topSpacing}px)`

  return { topSpacing, pageHeight }
}

export { getPageHeight }
