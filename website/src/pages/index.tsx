import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"
import Header from "../components/Header/Header"
import ThemeContextProvider from "../components/Theme/ThemeContext"
import Spinner from "../components/UI/Spinner"
import useSpinner from "../components/CustomHooks/useSpinner"
import useCanvas from "../components/CustomHooks/useCanvas"
import Cursor from "../components/UI/Cursor"

import "../../css/pages/index.css"

const IndexPage: React.FC = () => {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const cursor = e => {
    setMouseX(e.pageX)
    setMouseY(e.pageY)
  }
  useEffect(() => {
    window.addEventListener("mousemove", cursor)
    return () => {
      window.removeEventListener("mousemove", () =>
        console.log("removed mouse")
      )
    }
  }, [])

  return (
    <ThemeContextProvider>
      <Cursor x={mouseX} y={mouseY} />
      <Layout>
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
      </Layout>
    </ThemeContextProvider>
  )
}

export default IndexPage
