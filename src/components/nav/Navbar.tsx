import { SiGithub } from 'react-icons/si'
import { ScrollLinkId } from '../../constants/scrollLinkId.enum'
import { NavTabs } from '../../types/navTabs.type'
import NavButton from '../button/NavButton'
import SwitchTheme from '../theme'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const tabs: NavTabs[] = [
    {
      text: 'Landing',
      scrollLink: ScrollLinkId.Landing,
    },
    {
      text: 'About Me',
      scrollLink: ScrollLinkId.AboutMe,
    },
    {
      text: 'Work Experiences',
      scrollLink: ScrollLinkId.Work,
    },
  ]

  return (
    <nav className="flex h-16 w-full items-center justify-between bg-base-100 px-8 py-2">
      <a
        className="cursor-pointer text-xl normal-case text-primary"
        onClick={() => scroll.scrollToTop()}
      >
        Kian Yee
      </a>
      <div className="flex items-center">
        {tabs.map(({ text, scrollLink }, index) => {
          return (
            <NavButton key={index + text} text={text} scrollLink={scrollLink} />
          )
        })}
        <div className="divider divider-horizontal m-2"></div>
        <SwitchTheme />
        <SiGithub size={24} className="mx-4" />
      </div>
    </nav>
  )
}

export default Navbar
