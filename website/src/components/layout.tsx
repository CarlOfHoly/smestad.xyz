import React from "react"
import Header from "./Header/Header"
import "../../css/pages/global.css"

interface Props {}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default layout
