
import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

export default function Room({ room }) {

  const { title, shortDescription, price, image, condition, slug } = room

  return (
    <article className="room">
      <Link to={`${slug}`} className="room__link">
        <div className="room__media">
          <Image fluid={image.fluid} alt={`${title} image`} />
        </div>
        <div className="room__info">
          <h2 className="room__title">
            {title}
          </h2>
          <p className="room__description">
            {shortDescription}
          </p>
          <div aria-hidden="true" className="room__price">
            <span className="room__coin">Gs.</span>
            <span className="room__value">{price}</span>
            <span className="room__thousands">mil</span>
            <span className="room__time">/ 1.5h</span>
          </div>
          <span
            className={condition
              ? 'room__condition active'
              : 'room__condition off'
            }>{condition
              ? 'Disponible ahora'
              : 'No disponible ahora'}
          </span>
        </div>
      </Link>
    </article>
  )
}
