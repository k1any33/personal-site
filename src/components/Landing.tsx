import Image from 'next/image'
import { animateScroll as scroll } from 'react-scroll'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { ScrollLinkId } from '../utils/scrollLinkId.enum'
import ProfilePhoto from '../../public/images/profile.png'
import { SocialMediaLinks } from '../utils/socialMedia.enum'

const Landing = () => {
  return (
    <div id={ScrollLinkId.Landing} className="h-screen px-3">
      <div className="-m-b-10 flex h-full flex-col items-center justify-center gap-y-6">
        <div className="avatar">
          <div className="mask mask-hexagon relative w-48">
            <Image src={ProfilePhoto} alt="profile-photo" />
          </div>
        </div>
        <h1 className="text-center text-4xl font-bold">
          Hello! My name is <span className="text-primary">Kian Yee</span>
        </h1>
        <h2 className="text-center text-xl">
          I&lsquo;m a software engineer based in Singapore, specializing in
          building web applications
        </h2>
        <div className="flex gap-x-6">
          <SiGithub
            className="cursor-pointer"
            size={32}
            onClick={() =>
              window.open(SocialMediaLinks.Github, '_blank')?.focus()
            }
          />
          <SiLinkedin
            className="cursor-pointer"
            size={32}
            onClick={() =>
              window.open(SocialMediaLinks.LinkedIn, '_blank')?.focus()
            }
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => scroll.scrollToBottom()}
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Landing
