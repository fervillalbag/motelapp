
import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import RoomInfo from './RoomInfo'

export default function Room({ room }) {

  const { title, shortDescription, price, image, condition, slug } = room

  return (
    <article className="room">
      <Link to={`${slug}`} className="room__link">
        <div className="room__media">
          <Image fluid={image.fluid} alt={`${title} image`} />
        </div>
        <RoomInfo
          shortDescription={shortDescription}
          price={price}
          title={title}
          condition={condition}
        />
      </Link>
    </article>
  )
}
