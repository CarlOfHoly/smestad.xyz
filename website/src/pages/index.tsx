import React from "react"
import Layout from "../components/Layout/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"
import Header from "../components/Header/Header"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Spinner from "../components/UI/Spinner"
import useSpinner from "../components/CustomHooks/useSpinner"
import Circle from "../components/UI/Canvas/Circle"
import Debug from "../components/Utils/Debug"

import "../../css/pages/index.css"

const IndexPage: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Circle />
        <Debug>
          {useSpinner(
            <div className="spinner">
              <Spinner />
            </div>,
            <>
              <Header />
              <FullPage scrollingSpeed={1500}>
                <Page
                  title="Carl Smestad"
                  titlePosition="left"
                  byline="square"
                  ingress={"full-stack developer / /n procrastinator"}
                />
                <Page
                  title="About Me"
                  titlePosition="left"
                  byline="triangle"
                  ingress="click the triangles to check /n out my resume"
                />
                <Page
                  title="My Projects"
                  titlePosition="left"
                  byline="circle"
                  ingress="check out some of /n my projects"
                />
                <Page
                  title="Contact Me"
                  titlePosition="left"
                  ingress="full-stack developer / procrastinator"
                />
              </FullPage>
            </>,
            1000
          )}
        </Debug>
      </Layout>
    </ThemeContextProvider>
  )
}

export default IndexPage
