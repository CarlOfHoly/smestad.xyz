import React from "react"
import "./index.css"
import FrontPage from "../components/FrontPage/FrontPage"
import Layout from "../components/layout"

const IndexPage: React.FC = () => (
  <div className="index">
    <div className="overlay">
      <Layout>
        <FrontPage />
      </Layout>
    </div>
  </div>
)

export default IndexPage
