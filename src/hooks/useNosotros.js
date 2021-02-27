import { graphql, useStaticQuery } from "gatsby"

export const useNosotros = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsNosotro {
        nodes {
          title
          description
          slug
          blockquote
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return data.allDatoCmsNosotro.nodes[0]
}