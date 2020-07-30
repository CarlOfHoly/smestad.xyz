import React, { useState, useCallback, useContext, useEffect } from "react"
import Header from "./Header/Header"
import ThemeContextProvider, {
  ThemeContext,
  updateSetting,
} from "./Header/ThemeContext"
import "../../css/components/layout.css"

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
