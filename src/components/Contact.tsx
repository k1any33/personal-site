import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { SocialMediaLinks } from '../utils/socialMedia.enum'
import Card from './Card'
import Container from './container'
import Header from './header'
import { FaUserGraduate } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { ScrollLinkId } from '../utils/scrollLinkId.enum'

const Contact = () => {
  return (
    <Container scrollLinkId={ScrollLinkId.Contact}>
      <Header title="Contact Me" description="Get in touch!" />
      <Card>
        <div className="mx-20 flex flex-col items-center justify-center gap-y-6 py-8">
          <h2 className="card-title text-3xl">Contact</h2>
          <p className="text-center font-semibold">
            Let&apos;s get connected! <br />
            Follow me on the socials below
          </p>
          <div className="flex items-center">
            <FaUserGraduate size={24} className="mr-2" />
            <h4>Nanyang Technologoical University</h4>
          </div>
          <div className="flex items-center">
            <FiMail size={24} className="mr-2" />
            <h4>{SocialMediaLinks.Email}</h4>
          </div>

          <div className="flex gap-x-6">
            <SiGithub size={24} />
            <SiLinkedin size={24} />
            <SiInstagram size={24} />
            <SiFacebook size={24} />
          </div>
        </div>
      </Card>
      <h2 className="my-10 text-center">Copyright &copy; 2022 Lim Kian Yee</h2>
    </Container>
  )
}

export default Contact
