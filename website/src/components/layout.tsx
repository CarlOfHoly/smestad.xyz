import React from "react"
import Header from "./Header/Header"

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
