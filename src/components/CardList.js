import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    )
  })
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 xl:gap-8">
      {cardsArray}
    </div>
  )
}

export default CardList
