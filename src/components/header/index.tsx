type Props = {
  title: string
  description: string
}

const Header = ({ title, description }: Props) => {
  return (
    <div className="mb-6 px-4 md:px-0">
      <h2 className="py-3 text-4xl font-bold">{title}</h2>
      <p>{description}</p>
      <div className="divider w-16 before:bg-primary after:bg-primary"></div>
    </div>
  )
}

export default Header
