import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className="card w-full bg-base-200 py-4 px-3 shadow-xl">
      <h2 className="card-title p-2 text-3xl md:px-8">Internships</h2>
      {children}
    </div>
  )
}

export default Card
