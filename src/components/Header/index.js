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
        <NavLink theme={state.theme} to="/">
          HOME
        </NavLink>
      </div>
      <div>
        <Link to="/blog">blog</Link>
        <Link to="/resumes">resumes</Link>
      </div>
      {state.theme}
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Switch theme
      </button>
    </HeaderLayout>
  )
}

export default Header
