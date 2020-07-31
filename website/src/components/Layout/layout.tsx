import React, { useContext } from "react"
import { ThemeContext } from "../Theme/ThemeContext"
import "../../../css/components/Layout/layout.css"

interface Props {
  children?: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return <div className={"layout " + theme}>{children}</div>
}

export default layout
