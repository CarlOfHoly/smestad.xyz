import React from "react"
import Img from "gatsby-image"

const Person = ({ data }) => {
  ;<article>
    <h2>{data.sanityPerson.name}</h2>
    <Img fluid={data.sanityPerson.profileImage.asset.fluid} />
  </article>
}

export default Person

export const query = graphql`
  query PersonQuery {
    data: sanityPerson {
      name
      image {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
