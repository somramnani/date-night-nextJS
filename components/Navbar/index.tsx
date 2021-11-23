import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/material/Menu'
import { FC } from 'react'
import Button from '@mui/material/Button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Navbar: FC = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Date Night {session ? 'Welcome, ' + session.user?.name : null}
          </Typography>
          {session ? <Image width="32" height="32" src={session?.user?.image || ''} /> : null}
          <Button onClick={() => signIn()} component="button">{session ? 'log out' : 'log in'}</Button>
          <Button onClick={() => signOut()} component="button">sign out</Button>
        </Toolbar>
      </AppBar>
    </Box >
  )
}
export default Navbar
