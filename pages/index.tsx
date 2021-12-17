import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useStyles from './styles'
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp'
import Footer from '../components/Footer'
import { styled } from '@mui/material/styles'
import Navbar from '../components/Navbar'
import { Grid, Container } from '@mui/material'
import Paper from '@mui/material/Paper'
import Searchbar from '../components/Searchbar'
import RestaurantIcon from '@mui/icons-material/Restaurant'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Home: NextPage = () => {
  const { classes } = useStyles()
  return (
    <div>
      <Head>
        <title>Date Night | Homepage</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Searchbar />
      <Container>
        <Grid container spacing={5} style={{ textAlign: 'center' }}>
          <Grid item sm className={classes.description}>
            <RestaurantIcon className={classes.materialIcons} />
            <h2>Restaurants</h2>
            <Item>
              {' '}
              Restaurant Search for popular restaurants in the given location to have a wonderful
              meal.
            </Item>
          </Grid>
          <Grid item sm className={classes.description}>
            <EventAvailableSharpIcon className={classes.materialIcons} />
            <h2>Events</h2>
            <Item>
              {' '}
              If events are available, find fun events in the area to attend after your meal that
              was found through the application.
            </Item>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  )
}

export default Home
