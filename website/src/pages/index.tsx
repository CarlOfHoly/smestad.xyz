import React from "react"
import Layout from "../components/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"

import "../../css/pages/global.css"
import "../../css/pages/index.css"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <FullPage scrollingSpeed={1500}>
        <Page title="Carl Smestad" titlePosition="left" />
        <Page title="About Me" titlePosition="right" />
        <Page title="My Projects" titlePosition="left" />
        <Page title="Contact Me" titlePosition="left" />
      </FullPage>
    </Layout>
  )
}

export default IndexPage
