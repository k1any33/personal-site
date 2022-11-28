type Props = {
  scrollLinkId: string
  children: React.ReactNode
}

const Container = ({ scrollLinkId, children }: Props) => {
  return (
    <div id={scrollLinkId} className="mt-10 min-h-screen py-10 px-10">
      {children}
    </div>
  )
}

export default Container
