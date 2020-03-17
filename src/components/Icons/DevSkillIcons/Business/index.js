import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { DevWrapper } from "../style"

const BusinessIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "business.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <DevWrapper fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BusinessIcon
