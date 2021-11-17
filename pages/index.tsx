import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useStyles from './styles'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import Container from '@mui/material/Container'
import { Grid, Container } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Date Night | Homepage</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Grid container>
        <Grid item xs>
          <FontAwesomeIcon icon={faCoffee} />
          Restaurant Search for popular restaurants in the given location to have a wonderful meal.
        </Grid>
      </Grid>

      <Footer />
    </div>
  )
}

export default Home
