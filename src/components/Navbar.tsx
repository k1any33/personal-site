import { useRouter } from 'next/router'
import { routes } from '../routes'
import { NavTabs } from '../types/navTabs.type'
import NavButton from './button/NavButton'

const Navbar = () => {
  const router = useRouter()

  const tabs: NavTabs[] = [
    {
      text: 'Home',
      onClick: () => router.push(routes.landing),
    },
  ]

  return (
    <nav className="fixed z-20">
      <div className="flex h-16 w-screen items-center justify-between px-8 py-2">
        <a className="btn btn-ghost text-xl normal-case">Kian Yee</a>
        <div className="flex">
          {tabs.map(({ text, onClick }, index) => {
            return (
              <NavButton key={index + text} text={text} onClick={onClick} />
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
