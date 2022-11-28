import { SiGithub } from 'react-icons/si'
import { ScrollLinkId } from '../../utils/scrollLinkId.enum'
import { NavTabs } from '../../types/navTabs.type'
import SwitchTheme from '../theme'
import { animateScroll as scroll, Link } from 'react-scroll'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SocialMediaLinks } from '../../utils/socialMedia.enum'
import { useState } from 'react'
import Modal from '../modal'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
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

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <nav className="flex h-16 w-full items-center justify-between bg-base-100 px-4 py-2 lg:px-20">
      <a
        className="cursor-pointer text-xl normal-case text-primary"
        onClick={() => scroll.scrollToTop()}
      >
        Kian Yee
      </a>
      <div className="flex items-center">
        <div className="hidden md:flex md:items-center">
          {tabs.map(({ text, scrollLink }) => {
            return (
              <Link
                key={text}
                to={scrollLink}
                smooth={true}
                className="btn btn-ghost"
                offset={-68}
              >
                {text}
              </Link>
            )
          })}
          <div className="divider divider-horizontal m-2"></div>
          <SiGithub
            size={24}
            className="mx-4 cursor-pointer"
            onClick={() =>
              window.open(SocialMediaLinks.Github, '_blank')?.focus()
            }
          />
        </div>
        <SwitchTheme />

        <div className="ml-1 md:hidden">
          <BsThreeDotsVertical size={24} onClick={toggleModal} />
          {isModalOpen ? (
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className="flex flex-col items-center justify-center py-8">
                {tabs.map(({ text, scrollLink }) => {
                  return (
                    <Link
                      key={text}
                      to={scrollLink}
                      smooth={true}
                      className="btn btn-ghost my-2"
                      offset={-68}
                      onClick={() => setIsModalOpen(false)}
                    >
                      {text}
                    </Link>
                  )
                })}
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
