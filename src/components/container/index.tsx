type Props = {
  children: React.ReactNode
  scrollLinkId: string
}

const Container = ({ children, scrollLinkId }: Props) => {
  return (
    <div id={scrollLinkId} className="mt-5 md:py-5 md:px-4 lg:px-20">
      {children}
    </div>
  )
}

export default Container
