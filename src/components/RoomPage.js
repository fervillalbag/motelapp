
import React from 'react'
import Layout from './Layout'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import Benefits from './Benefits'
import ButtonBack from './ButtonBack'
import BackgroundImage from 'gatsby-background-image'

export const query = graphql`
  query($slug: String!) {
		allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
			nodes {
				title
				largeDescription
				image {
					fluid {
						...GatsbyDatoCmsFluid
					}
				}
			}
		}
  }
`

export default function RoomPage({ data }) {

  const { title, largeDescription, image } = data.allDatoCmsHabitacion.nodes[0]

  return (
    <Layout>
      <div className="room-page">
        <ButtonBack />
        <div className="room-page__media">
          <BackgroundImage
            className="room-page__image"
            fluid={image.fluid}
            alt={`${title} image`}
          ></BackgroundImage>
        </div>
        <div className="room-page__info">
          <h3 className="room-page__title">
            {title}
          </h3>
          <p className="room-page__description">
            {largeDescription}
          </p>
          <Benefits />
        </div>
      </div>
    </Layout>
  )
}
