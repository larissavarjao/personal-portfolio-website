import styled from "styled-components"
import media from "styled-media-query"

export const HelloWorldWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--pink);
  padding: 14rem 0;
`

export const HelloWorldTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: var(--white);

  ${media.greaterThan("medium")`
    font-size: 2rem;
  `}
`

export const HelloWorldText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  text-align: center;
  color: var(--white);
  padding: 0.7rem;

  ${media.greaterThan("medium")`
    font-size: 1.3rem;
    padding: 0 14rem;
  `}
`
