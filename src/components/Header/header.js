import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderLaryout, NavLink } from "./style.js"

const Header = () => (
  <HeaderLaryout>
    <div>
        <NavLink to="/">
          HOME
        </NavLink>
    </div>
    <nav>
      <Link>hello</Link>
    </nav>
  </HeaderLaryout>
)

export default Header
