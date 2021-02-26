import { graphql, useStaticQuery } from "gatsby"

export const useRooms = () => {
  const res = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          title
          shortDescription
          largeDescription
          price
          slug
          condition
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const data = res.allDatoCmsHabitacion.nodes
  return data
}