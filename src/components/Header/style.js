import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const HeaderLayout = styled.header`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  flex-wrap: wrap;
  min-height: 64px;
  width: 100vw;

  ${media.greaterThan("medium")`
    padding: 0 2rem;
    justify-content: space-between;
    width: calc(100vw - 4rem);
  `}
`

export const NavLink = styled(Link)`
  color: rgba(10, 10, 10, 0.9);
  margin: 0 12px;
  text-decoration: none;
  transition: color 250ms;
  font-size: 13px;

  &.active {
    color: var(--pink);
  }

  &::after {
    display: block;
    content: "";
    border-bottom: 2px solid var(--pink);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover {
    color: var(--pink);
  }

  &:hover:after {
    transform: scaleX(1);
  }

  ${media.greaterThan("medium")`
    font-size: 15px;
  `}
`

export const ExternalNavLink = styled.a`
  color: rgba(10, 10, 10, 0.9);
  margin: 0 12px;
  text-decoration: none;
  transition: color 250ms;
  font-size: 13px;

  &::after {
    display: block;
    content: "";
    border-bottom: 2px solid var(--pink);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover {
    color: var(--pink);
  }

  &:hover:after {
    transform: scaleX(1);
  }

  ${media.greaterThan("medium")`
    font-size: 15px;
  `}
`

export const LanguageWrapper = styled.div`
  margin: 8px;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: ${props => (props.activate ? "2px solid var(--pink)" : "")};
`

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;

  ${media.greaterThan("medium")`
    margin: 0;
  `}
`

export const LanguagesWrapper = styled.div`
  display: flex;
`
export const MediaWrapper = styled.div`
  display: flex;
`
