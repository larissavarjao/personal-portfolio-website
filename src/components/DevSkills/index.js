import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { textsMultiLanguage } from "../../utils/language"
import {
  Block,
  DevSkillsWrapper,
  Skill,
  SkillTitle,
  SkillDescription,
  SkillLanguageTitle,
  SkillItem,
} from "./style"
import FrontEndIcon from "../Icons/FrontEnd"

const DevSkills = () => {
  const state = useContext(GlobalStateContext)
  const front = textsMultiLanguage[state.language].devskills.data.find(
    dev => dev.type === "frontend"
  )

  return (
    <DevSkillsWrapper>
      <Block>
        <Skill>
          <FrontEndIcon />
          {[front].map(devOption => (
            <>
              <SkillTitle>{devOption.title}</SkillTitle>
              <SkillDescription>{devOption.description}</SkillDescription>
              <SkillLanguageTitle>
                {textsMultiLanguage[state.language].devskills.language}
              </SkillLanguageTitle>
              <SkillDescription>{devOption.languages}</SkillDescription>
              <SkillLanguageTitle>DevTools</SkillLanguageTitle>
              {devOption.frameworks.map(tool => (
                <SkillItem>{tool}</SkillItem>
              ))}
            </>
          ))}
        </Skill>
        <Skill>Skill 1</Skill>
      </Block>
    </DevSkillsWrapper>
  )
}

export default DevSkills
