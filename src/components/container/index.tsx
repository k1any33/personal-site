type Props = {
  children: React.ReactNode
  scrollLinkId: string
}

const Container = ({ children, scrollLinkId }: Props) => {
  return (
    <div id={scrollLinkId} className="mt-5 min-h-screen py-10 px-10">
      {children}
    </div>
  )
}

export default Container
