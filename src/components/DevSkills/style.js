import styled from "styled-components"

export const DevSkillsWrapper = styled.section``

export const Block = styled.div`
  border-radius: 12px;
  border: 1px solid black;
  margin: 1.5rem;
  border: 1px solid var(--gray);
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5);
  background: var(--white);
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
`

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
`

export const SkillDescription = styled.p`
  font-weight: 300;
  text-align: center;
  font-size: 17px;
  margin: 0 0 30px;
`

export const SkillLanguageTitle = styled.h3`
  color: var(--pink);
  font-size: 1.3rem;
`

export const SkillItem = styled.p`
  font-weight: 300;
  text-align: center;
  font-size: 17px;
  margin: 0 0 10px;
`
