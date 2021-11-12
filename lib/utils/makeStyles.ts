import { createMakeAndWithStyles } from 'tss-react'
import { useTheme } from '@mui/styles'

export const { makeStyles, useStyles, withStyles } = createMakeAndWithStyles({
  useTheme,
})
