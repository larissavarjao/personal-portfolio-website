import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { textsMultiLanguage } from "../../utils/language"
import { HelloWorldWrapper, HelloWorldText, HelloWorldTitle } from "./style"

const HelloWorld = () => {
  const state = useContext(GlobalStateContext)
  return (
    <HelloWorldWrapper>
      <HelloWorldTitle>
        {textsMultiLanguage[state.language].helloworld.title}
      </HelloWorldTitle>
      <HelloWorldText>
        {textsMultiLanguage[state.language].helloworld.text}
      </HelloWorldText>
    </HelloWorldWrapper>
  )
}

export default HelloWorld
