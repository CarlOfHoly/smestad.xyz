import React from "react"
import Layout from "../components/Layout/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"
import Header from "../components/Header/Header"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Spinner from "../components/UI/Spinner"
import useSpinner from "../components/CustomHooks/useSpinner"
import Circle from "../components/UI/Canvas/Circle"
import Canvas from "../components/UI/Canvas/Canvas"
import Debug from "../components/Utils/Debug"

import "../../css/pages/index.css"

const IndexPage: React.FC = () => {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = "#000000"
    ctx.beginPath()
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }
  return (
    <ThemeContextProvider>
      <Layout>
        <Canvas draw={draw} />
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
