import React from "react"
import Layout from "../components/Layout/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"
import Header from "../components/Header/Header"
import ThemeContextProvider from "../components/Theme/ThemeContext"
import Spinner from "../components/UI/Spinner"
import useSpinner from "../components/CustomHooks/useSpinner"

import "../../css/pages/global.css"
import "../../css/pages/index.css"

const IndexPage: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        {useSpinner(
          <div className="spinner">
            <Spinner />
          </div>,
          <>
            <Header />
            <FullPage scrollingSpeed={1500}>
              <Page title="Carl Smestad" titlePosition="left" />
              <Page title="About Me" titlePosition="right" />
              <Page title="My Projects" titlePosition="left" />
              <Page title="Contact Me" titlePosition="left" />
            </FullPage>
          </>
        )}
      </Layout>
    </ThemeContextProvider>
  )
}

export default IndexPage
