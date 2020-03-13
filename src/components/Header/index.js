import { Link } from "gatsby"
import React, { useContext } from "react"
import { HeaderLayout, NavLink } from "./style.js"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <HeaderLayout>
      <div>
        <NavLink to="/">HOME</NavLink>
      </div>
      <div>
        <Link to="/blog">blog</Link>
        <Link to="/resumes">resumes</Link>
      </div>
      <button>Switch theme</button>
    </HeaderLayout>
  )
}

export default Header
