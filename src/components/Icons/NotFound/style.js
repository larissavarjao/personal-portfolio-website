import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"

export const NotFoundWrapper = styled(Img)`
  width: 90vw;

  ${media.greaterThan("medium")`
    width: 30vw;
  `}
`
