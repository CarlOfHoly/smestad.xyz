import React from "react"
import "./index.css"
import Header from "../components/Header/Header"
import FrontPage from "../components/FrontPage/FrontPage"
import { Overlay } from "../components/UI/Overlay/Overlay"

const IndexPage: React.FC = () => (
  <div className="index">
    <Overlay />
    <Header />
    <FrontPage />
  </div>
)

export default IndexPage
