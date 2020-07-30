import React, { useContext } from "react"
import Header from "../Header/Header"
import { ThemeContext } from "../Theme/ThemeContext"
import "../../../css/components/Layout/layout.css"

interface Props {
  children?: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={"layout " + theme}>
      <Header />
      {children}
    </div>
  )
}

export default layout
