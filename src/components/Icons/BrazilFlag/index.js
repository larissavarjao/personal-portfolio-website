import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FlagWrapper } from "./style"

const BrazilFlag = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "brazil.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <FlagWrapper
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Imagem da bandeira do brasil para representar a mudança de idioma para português"
    />
  )
}

export default BrazilFlag
