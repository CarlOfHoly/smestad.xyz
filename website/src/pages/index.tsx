import React, { useContext } from "react"
import Layout from "../components/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"
import ThemeContextProvider, {
  ThemeContext,
} from "../components/Header/ThemeContext"

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
