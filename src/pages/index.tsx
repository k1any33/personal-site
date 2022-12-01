import type { NextPage } from 'next'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Landing from '../components/Landing'
import Navbar from '../components/nav/Navbar'
import Work from '../components/Work'

const LandingPage: NextPage = () => {
  return (
    <>
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
