import React from "react"
import {
  SkillTitle,
  SkillDescription,
  SkillLanguageTitle,
  SkillItem,
} from "./style"
import { textsMultiLanguage } from "../../utils/language"

const SkillComponent = ({ option, language }) => {
  return [option].map(devOption => (
    <>
      <SkillTitle>{devOption.title}</SkillTitle>
      <SkillDescription>{devOption.description}</SkillDescription>
      <SkillLanguageTitle>
        {textsMultiLanguage[language].devskills.language}
      </SkillLanguageTitle>
      <SkillDescription>{devOption.languages}</SkillDescription>
      <SkillLanguageTitle>DevTools</SkillLanguageTitle>
      {devOption.frameworks.map(tool => (
        <SkillItem>{tool}</SkillItem>
      ))}
    </>
  ))
}

export default SkillComponent
