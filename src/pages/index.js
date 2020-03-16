import React from "react"
import Cover from "../components/Cover"
import HelloWorld from "../components/HelloWorld"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cover />
    <HelloWorld />
  </Layout>
)

export default IndexPage
