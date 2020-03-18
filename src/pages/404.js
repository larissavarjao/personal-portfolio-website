import React, { useContext } from "react"
import Layout from "../components/Layout"
import NotFound from "../components/Icons/NotFound"
import SEO from "../components/SEO"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import { NotFoundWrapper, TitleNotFound } from "../styles/404"

const NotFoundPage = () => {
  const state = useContext(GlobalStateContext)
  return (
    <Layout>
      <SEO title="404" />
      <NotFoundWrapper>
        <NotFound />
        <TitleNotFound>
          {state.language === "pt" ? "Página não encontrada" : "Not Found"}
        </TitleNotFound>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFoundPage
