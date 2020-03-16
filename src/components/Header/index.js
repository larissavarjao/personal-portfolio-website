import React, { useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import BrazilFlag from "../Icons/BrazilFlag"
import UsaFlag from "../Icons/UsaFlag"
import Logo from "../Logo"
import {
  HeaderLayout,
  LanguageWrapper,
  LogoLink,
  MenuOptions,
  NavLink,
} from "./style.js"
import { textsMultiLanguage } from "../../utils/language"

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <HeaderLayout>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <MenuOptions>
        {textsMultiLanguage[state.language].menuBar.map(menuOption => (
          <NavLink
            activeClassName="active"
            to={menuOption.path}
            key={menuOption.path}
          >
            {menuOption.label}
          </NavLink>
        ))}
        <LanguageWrapper
          activate={state.language === "pt"}
          onClick={() => dispatch({ type: "CHANGE_LANGUAGE_PT" })}
        >
          <BrazilFlag />
        </LanguageWrapper>
        <LanguageWrapper
          activate={state.language === "en"}
          onClick={() => dispatch({ type: "CHANGE_LANGUAGE_EN" })}
        >
          <UsaFlag />
        </LanguageWrapper>
      </MenuOptions>
    </HeaderLayout>
  )
}

export default Header
