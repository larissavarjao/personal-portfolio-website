import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { DevWrapper } from "../style"

const FrontEndIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "frontend.png" }) {
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

export default FrontEndIcon
