import { Link } from 'react-scroll'
type Props = {
  text: string
  scrollLink: string
}

const NavButton = ({ text, scrollLink }: Props) => {
  return (
    <Link to={scrollLink} smooth={true} className="btn btn-ghost" offset={-68}>
      {text}
    </Link>
  )
}

export default NavButton
