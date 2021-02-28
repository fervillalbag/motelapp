
import React from 'react'

export default function RoomPrice({ price }) {
  return (
    <div aria-hidden="true" className="room__price">
      <span className="room__coin">Gs.</span>
      <span className="room__value">{price}</span>
      <span className="room__thousands">mil</span>
      <span className="room__time">/ 1.5h</span>
    </div>
  )
}
