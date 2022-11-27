type Props = {
  text: string
  onClick: () => void
}

const NavButton = ({ text, onClick }: Props) => {
  return (
    <button className="btn btn-ghost mx-1" onClick={onClick}>
      {text}
    </button>
  )
}

export default NavButton
