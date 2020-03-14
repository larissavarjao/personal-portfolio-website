import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  language: "pt",
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE_PT": {
      return {
        ...state,
        language: "pt",
      }
    }
    case "CHANGE_LANGUAGE_EN": {
      return {
        ...state,
        language: "en",
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
