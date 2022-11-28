import React from 'react'
import { ScrollLinkId } from '../utils/scrollLinkId.enum'
import Container from './container'
import Header from './header'

const AboutMe = () => {
  return (
    <Container scrollLinkId={ScrollLinkId.AboutMe}>
      <Header title="About Me" description="Discover my interest and skills" />
      About Me
    </Container>
  )
}

export default AboutMe
