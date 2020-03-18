import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Footer from "../Footer"
import "../../styles/global.css"
import { Main } from "./style"

const Layout = ({ children }) => {
  return (
    <>
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
