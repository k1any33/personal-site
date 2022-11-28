import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className="card w-full bg-base-200 py-4 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl">Internships</h2>
      </div>
      {children}
    </div>
  )
}

export default Card
