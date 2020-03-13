import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../../utils/theme"

export const HeaderLayout = styled.header`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem;
`

export const NavLink = styled(Link)`
  color: ${props => theme[props.theme].primarycolor};
`
