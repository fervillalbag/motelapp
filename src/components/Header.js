
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function Header() {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsInicio(filter: { slug: { eq: "inicio" } }) {
        nodes {
          title
          brand
          headerImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { headerImage } = data.allDatoCmsInicio.nodes[0]

  return (
    <BackgroundImage
      tag="header"
      fluid={headerImage.fluid}
      className="header"
    ></BackgroundImage>
  )
}
