import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LogoWrapper } from "./style"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "LV.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoWrapper
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Imagem da logo. Letra L e letra V dentro de um computador rosa"
    />
  )
}

export default Logo
