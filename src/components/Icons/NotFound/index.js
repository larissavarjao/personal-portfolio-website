import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { NotFoundWrapper } from "./style"

const NotFound = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "not_found.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <NotFoundWrapper fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default NotFound
