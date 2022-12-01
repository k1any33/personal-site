import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className="card w-full bg-base-200 py-4 px-3 shadow-xl">
      {children}
    </div>
  )
}

export default Card
