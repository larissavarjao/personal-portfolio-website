import styled from "styled-components"
import media from "styled-media-query"

export const DevSkillsWrapper = styled.section`
  margin-top: -12rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("medium")`
    margin-top: -8rem;
  }`}
`

export const Block = styled.div`
  border-radius: 12px;
  border: 1px solid black;
  margin: 1.5rem;
  border: 1px solid var(--gray);
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5);
  background: var(--white);
  max-width: 1200px;

  ${media.greaterThan("medium")`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
  }`}
`

export const Skill = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    border-bottom: 1px solid var(--gray);
    border-top: 1px solid var(--gray);
  }

  ${media.greaterThan("medium")`
    &:nth-child(2) {
      heigth: 100%;
      border-bottom: 0;
      border-top: 0;
      border-right: 1px solid var(--gray);
      border-left: 1px solid var(--gray);
    }
  }`}
`
