import { FC } from 'react'
import useStyles from './styles'
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

const Searchbar: FC = () => {
  const [value, setValue] = React.useState<Date | null>(null)
  const { classes } = useStyles()
  return (
    <Box
      className={classes.inputs}
      sx={{
        m: 1,
        maxWidth: '50%',
      }}
    >
      <TextField label="Location" id="location-input" />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button variant="contained" endIcon={<SearchIcon />}>
        Search
      </Button>
    </Box>
  )
}

export default Searchbar
