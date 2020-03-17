import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { DevWrapper } from "../style"

const BackEndIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "backend.png" }) {
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

export default BackEndIcon
