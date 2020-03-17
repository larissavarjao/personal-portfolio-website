import React from "react"
import Cover from "../components/Cover"
import HelloWorld from "../components/HelloWorld"
import DevSkills from "../components/DevSkills"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cover />
    <HelloWorld />
    <DevSkills />
    <Projects />
  </Layout>
)

export default IndexPage
