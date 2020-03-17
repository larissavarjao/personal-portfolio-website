import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { textsMultiLanguage } from "../../utils/language"
import { Block, DevSkillsWrapper, Skill } from "./style"
import FrontEndIcon from "../Icons/DevSkillIcons/FrontEnd"
import BackEndIcon from "../Icons/DevSkillIcons/BackEnd"
import BusinessIcon from "../Icons/DevSkillIcons/Business"
import SkillComponent from "../Skill"

const DevSkills = () => {
  const state = useContext(GlobalStateContext)
  const front = textsMultiLanguage[state.language].devskills.data.find(
    dev => dev.type === "frontend"
  )
  const back = textsMultiLanguage[state.language].devskills.data.find(
    dev => dev.type === "backend"
  )
  const business = textsMultiLanguage[state.language].devskills.data.find(
    dev => dev.type === "business"
  )

  return (
    <DevSkillsWrapper>
      <Block>
        <Skill>
          <FrontEndIcon />
          <SkillComponent option={front} language={state.language} />
        </Skill>
        <Skill>
          <BackEndIcon />
          <SkillComponent option={back} language={state.language} />
        </Skill>
        <Skill>
          <BusinessIcon />
          <SkillComponent option={business} language={state.language} />
        </Skill>
      </Block>
    </DevSkillsWrapper>
  )
}

export default DevSkills
