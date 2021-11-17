import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Date Night | Homepage</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Home
