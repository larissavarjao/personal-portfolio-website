import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { FooterWrapper, GatsbyLink, FooterLine } from "./style"
import Email from "../Icons/SocialMedia/Email"
import Github from "../Icons/SocialMedia/Github"
import Linkedin from "../Icons/SocialMedia/Linkedin"

const Footer = () => {
  const year = new Date().getFullYear()
  const state = useContext(GlobalStateContext)

  return (
    <FooterWrapper>
      <FooterLine>
        © {year}, {state.language === "pt" ? "Criado com " : "Build with "}
        <GatsbyLink
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </GatsbyLink>
      </FooterLine>
      <FooterLine>
        <Linkedin />
        <Github />
        <Email />
      </FooterLine>
    </FooterWrapper>
  )
}

export default Footer
