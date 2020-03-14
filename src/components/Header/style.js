import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const HeaderLayout = styled.header`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("medium")`
    padding: 1rem 2rem;
    justify-content: space-between;
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
`

export const LogoLink = styled(NavLink)`
  ${media.lessThan("medium")`
    display: none;
  `}
`
