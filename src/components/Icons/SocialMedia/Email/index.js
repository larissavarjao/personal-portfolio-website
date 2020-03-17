import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { MediaWrapper } from "../style"

const Email = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "email.png" }) {
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
      href="mailto:larissasilvavarjao@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MediaWrapper fluid={data.placeholderImage.childImageSharp.fluid} />
    </a>
  )
}

export default Email
