
import React from 'react'
import Layout from '../components/Layout'
import { useNosotros } from '../hooks/useNosotros'
import Image from 'gatsby-image'
import ButtonBack from '../components/ButtonBack'

export default function Nosotros() {
  const data = useNosotros()

  const { title, description, blockquote, image } = data

  return (
    <Layout>
      <div className="about">
        <ButtonBack />
        <div className="about__media">
          <Image
            fluid={image.fluid}
            alt={title}
            className="about__image"
          />
        </div>
        <div className="about__info">
          <h3 className="about__title">{title}</h3>
          <p className="about__description">{description}</p>
          <blockquote className="about__blockquote">
            {blockquote}
          </blockquote>
        </div>
      </div>
    </Layout>
  )
}
