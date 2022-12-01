type Props = {
  children: React.ReactNode
  scrollLinkId: string
}

const Container = ({ children, scrollLinkId }: Props) => {
  return (
    <div
      id={scrollLinkId}
      className="mx-2 mt-10 md:mt-5 md:py-5 md:px-4 lg:px-32"
    >
      {children}
    </div>
  )
}

export default Container
