
import React from 'react'

export default function RoomPageFooter({ price, condition }) {
  return (
    <footer className="room-page__footer">
      <span className="room-page__final-price">
        Gs. {price} mil
        </span>
      <a
        href="/"
        target="_blank"
        className={condition
          ? "room-page__contact"
          : "room-page__contact none"}
      >
        <span>
          <i className="fab fa-whatsapp-square"></i>
        </span>
        <span>Contactar</span>
      </a>
    </footer>
  )
}
