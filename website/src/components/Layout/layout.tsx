import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../Theme/ThemeContext"
import "../../../css/components/Layout/layout.css"

interface Props {
  children?: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const [isClient, setIsClient] = useState("false")

  useEffect(() => {
    setIsClient("true")
  }, [])

  return (
    <React.Fragment key={isClient}>
      <div className={"layout " + theme}>{children}</div>
    </React.Fragment>
  )
}

export default layout
