import React from "react"
import Layout from "../components/Layout/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"
import ThemeContextProvider from "../components/Theme/ThemeContext"

import "../../css/pages/global.css"

const IndexPage: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <FullPage scrollingSpeed={1500}>
          <Page title="Carl Smestad" titlePosition="left" />
          <Page title="About Me" titlePosition="right" />
          <Page title="My Projects" titlePosition="left" />
          <Page title="Contact Me" titlePosition="left" />
        </FullPage>
      </Layout>
    </ThemeContextProvider>
  )
}

export default IndexPage
