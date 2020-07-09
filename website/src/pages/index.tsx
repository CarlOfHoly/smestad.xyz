import React from "react"
import "./index.css"
import Header from "../components/Header/Header"
import FrontPage from "../components/FrontPage/FrontPage"

const IndexPage: React.FC = () => (
  <div className="index">
    <div className="overlay">
      <Header pathname={location.pathname} />
      <FrontPage />
    </div>
  </div>
)

export default IndexPage
