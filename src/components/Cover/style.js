import styled from "styled-components"
import media from "styled-media-query"

export const CoverWrapper = styled.section`
  width: calc(100vw - 1rem);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`

export const Introduction = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  text-align: center;

  ${media.greaterThan("medium")`
    font-size: 2rem;
  `}
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-blue);
  text-align: center;

  ${media.greaterThan("medium")`
    font-size: 2.5rem;
  `}
`

export const SubTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  text-align: center;

  ${media.greaterThan("medium")`
    font-size: 1.3rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`
