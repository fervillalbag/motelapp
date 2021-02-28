
import React from 'react'
import Benefits from './Benefits'
import RoomPageFooter from './RoomPageFooter'

export default function RoomPageInfo({ title, largeDescription, price, condition }) {

  return (
    <div className="room-page__info">
      <h3 className="room-page__title">
        {title}
      </h3>
      <p className="room-page__description">
        {largeDescription}
      </p>
      <Benefits />
      <div className="room-page__condition">
        {condition ? (
          <span className="on">¡Disponible ahora mismo!</span>
        ) : (
            <span className="off">¡No Disponible!</span>
          )}
      </div>
      <RoomPageFooter condition={condition} price={price} />
    </div>
  )
}
