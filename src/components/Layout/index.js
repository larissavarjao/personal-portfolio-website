import PropTypes from "prop-types"
import React from "react"
import GlobalStyle from "../../styles/global"
import Footer from "../Footer"
import Header from "../Header"
import { Main } from "./style"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
