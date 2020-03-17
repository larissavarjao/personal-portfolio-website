import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { MediaWrapper } from "../style"

const Linkedin = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "linkedin.png" }) {
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
      href="https://www.linkedin.com/in/larissa-varj%C3%A3o-152932b8/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MediaWrapper fluid={data.placeholderImage.childImageSharp.fluid} />
    </a>
  )
}

export default Linkedin
