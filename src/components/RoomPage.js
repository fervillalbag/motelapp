
import React from 'react'
import Layout from './Layout'
import { graphql } from 'gatsby'
import ButtonBack from './ButtonBack'
import BackgroundImage from 'gatsby-background-image'
import RoomPageInfo from './RoomPageInfo'

export const query = graphql`
  query($slug: String!) {
		allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
			nodes {
				title
        largeDescription
        price
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

  const { title, largeDescription, image, price } = data.allDatoCmsHabitacion.nodes[0]

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
        <RoomPageInfo
          title={title}
          largeDescription={largeDescription}
          price={price}
        />
      </div>
    </Layout>
  )
}
