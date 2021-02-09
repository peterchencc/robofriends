import React from 'react'

const Card = ({ name, email, id }) => {
  return (
    <div className="w-full ring-1 ring-black ring-opacity-5 shadow-sm bg-gray-100 rounded-xl p-4 text-center flex flex-col">
      <img
        className="w-auto"
        src={`https://robohash.org/${id}?size=200x200`}
        alt="robots"
      />
      <div>
        <h2 className="text-sm">{name}</h2>
        <p className="text-xs">{email}</p>
      </div>
    </div>
  )
}

export default Card
