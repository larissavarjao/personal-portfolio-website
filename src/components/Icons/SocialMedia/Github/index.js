import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { MediaWrapper } from "../style"

const Github = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a
      href="https://github.com/larissavarjao"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MediaWrapper fluid={data.placeholderImage.childImageSharp.fluid} />
    </a>
  )
}

export default Github
