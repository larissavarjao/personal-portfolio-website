import React, { useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import { textsMultiLanguage } from "../../utils/language"
import BrazilFlag from "../Icons/BrazilFlag"
import Email from "../Icons/SocialMedia/Email"
import Github from "../Icons/SocialMedia/Github"
import Linkedin from "../Icons/SocialMedia/Linkedin"
import UsaFlag from "../Icons/UsaFlag"
import {
  HeaderLayout,
  LanguagesWrapper,
  LanguageWrapper,
  MediaWrapper,
  MenuOptions,
  NavLink,
  ExternalNavLink,
} from "./style.js"

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <HeaderLayout>
      <MediaWrapper>
        <Linkedin />
        <Github />
        <Email />
      </MediaWrapper>
      <LanguagesWrapper>
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
      </LanguagesWrapper>
      <MenuOptions>
        {textsMultiLanguage[state.language].menuBar.map(menuOption => {
          if (menuOption.type === "resume") {
            return (
              <ExternalNavLink
                href={menuOption.path}
                target="_blank"
                key={menuOption.path}
              >
                {menuOption.label}
              </ExternalNavLink>
            )
          }

          return (
            <NavLink
              activeClassName="active"
              to={menuOption.path}
              key={menuOption.path}
            >
              {menuOption.label}
            </NavLink>
          )
        })}
      </MenuOptions>
    </HeaderLayout>
  )
}

export default Header
