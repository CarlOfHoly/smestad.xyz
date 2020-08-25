import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Header from "../components/Header/Header"
import Person from "../components/Person"

const Projects: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Header />
        <Person />
      </Layout>
    </ThemeContextProvider>
  )
}

export default Projects
