import { FC } from 'react'
import useStyles from './styles'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import Link from 'next/link'

const Footer: FC = () => {
  const { classes } = useStyles()
  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="text.secondary" color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item md={6} xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/">Login</Link>
              </Box>
              <Box>
                <Link href="/">Register</Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Copyright &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
export default Footer
