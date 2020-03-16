import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { textsMultiLanguage } from "../../utils/language"
import Developer from "../Icons/Developer"
import { CoverWrapper, Introduction, SubTitle, Title, Content } from "./style"

const Cover = () => {
  const state = useContext(GlobalStateContext)
  return (
    <CoverWrapper>
      <Content>
        <Introduction>Larissa Varjão</Introduction>
        <Title>Front-End & Back-End Web Developer</Title>
        <SubTitle>{textsMultiLanguage[state.language].cover.subtitle}</SubTitle>
      </Content>
      <Developer />
    </CoverWrapper>
  )
}

export default Cover
