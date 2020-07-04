import React from "react"
import "./index.css"
import Header from "../components/Header/Header"
import FrontPage from "../components/FrontPage/FrontPage"

const IndexPage: React.FC = () => (
  <div className="index">
    <Header />
    <FrontPage />
  </div>
)

export default IndexPage
