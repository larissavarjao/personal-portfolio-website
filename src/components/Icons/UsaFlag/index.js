import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FlagWrapper } from "../BrazilFlag/style"

const UsaFlag = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "usa.png" }) {
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
      alt="Imagem da bandeira do estados unidos da america para representar a mudança de idioma para inglês"
    />
  )
}

export default UsaFlag
