
import React from 'react'
import RoomPrice from './RoomPrice'

export default function RoomInfo({ title, shortDescription, condition, price }) {
  return (
    <div className="room__info">
      <h2 className="room__title">
        {title}
      </h2>
      <p className="room__description">
        {shortDescription}
      </p>
      <RoomPrice price={price} />
      <span
        className={condition
          ? 'room__condition active'
          : 'room__condition off'
        }>{condition
          ? 'Disponible ahora'
          : 'No disponible ahora'}
      </span>
    </div>
  )
}
