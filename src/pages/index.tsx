import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Landing from '../components/Landing'
import Navbar from '../components/nav/Navbar'
import Work from '../components/Work'

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lim Kian Yee</title>
        <meta
          name="description"
          content="Kian Yee's personal portfolio website "
        />
        <meta
          name="keywords"
          content="KY, Kian Yee, k1any33, Website, Personal Site, Portfolio"
        />
        <meta name="author" content="Lim Kian Yee" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
      </Head>
      <div className="fixed top-0 z-20 w-full">
        <Navbar />
      </div>
      <Landing />
      <AboutMe />
      <Work />
      <Contact />
    </>
  )
}

export default LandingPage
