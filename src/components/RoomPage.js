
import React from 'react'
import Layout from './Layout'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import Benefits from './Benefits'

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
      <Link to="/" className="button-back">
        <i class="fas fa-caret-left" style={{ marginRight: '0.25rem' }}></i>
        Volver
      </Link>
      <div className="room-page">
        <div className="room-page__media">
          <Image
            className="room-page__image"
            fluid={image.fluid}
            alt={`${title} image`}
          />
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
