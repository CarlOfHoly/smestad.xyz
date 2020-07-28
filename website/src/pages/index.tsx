import React from "react"
import Layout from "../components/layout"
import ReactFullpage from "@fullpage/react-fullpage"
import "./index.css"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <ReactFullpage
        scrollingSpeed={1000}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
              <div className="section">
                <p>Section 3</p>
              </div>
              <div className="section">
                <p>Section 4</p>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </Layout>
  )
}

export default IndexPage
