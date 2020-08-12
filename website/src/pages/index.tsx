import React from "react"
import Layout from "../components/Layout/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"
import Header from "../components/Header/Header"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Spinner from "../components/UI/Spinner"
import useSpinner from "../components/CustomHooks/useSpinner"
import Blobs from "../components/UI/Canvas/Blobs"

import ring from "../images/ring.png"
import triangle from "../images/triangle.png"
import square from "../images/square.png"

import "../../css/pages/index.css"

const IndexPage: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <img
          src={ring}
          style={{
            width: "700px",
            position: "absolute",
            filter: "grayscale(100%)",
          }}
        />

        <img
          src={square}
          style={{
            width: "400px",
            position: "absolute",
            filter: "invert(100%)",
          }}
        />

        <img
          src={triangle}
          style={{
            width: "400px",
            position: "absolute",
            filter: "invert(100%)",
          }}
        />
        <Blobs />
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
          0
        )}
      </Layout>
    </ThemeContextProvider>
  )
}

export default IndexPage
