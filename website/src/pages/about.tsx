import React from "react"
import Layout from "../components/Layout/layout"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Header from "../components/Header/Header"

const About: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Header />
        ABOUT
      </Layout>
    </ThemeContextProvider>
  )
}

export default About
