
import { Link } from 'gatsby'
import React from 'react'
import Benefits from './Benefits'

export default function RoomPageInfo({ title, largeDescription, price }) {

  return (
    <div className="room-page__info">
      <h3 className="room-page__title">
        {title}
      </h3>
      <p className="room-page__description">
        {largeDescription}
      </p>
      <Benefits />
      <footer className="room-page__footer">
        <span className="room-page__final-price">
          Gs. {price} mil
        </span>
        <a
          href="/"
          target="_blank"
          className="room-page__contact"
        >
          <span>
            <i className="fab fa-whatsapp-square"></i>
          </span>
          <span>Reservar</span>
        </a>
      </footer>
    </div>
  )
}
