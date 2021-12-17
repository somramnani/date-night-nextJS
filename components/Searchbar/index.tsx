import { FC } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Searchbar: FC = () => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
       <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
  )
}

export default Searchbar
