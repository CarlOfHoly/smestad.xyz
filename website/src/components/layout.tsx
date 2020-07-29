import React, { useState, useCallback } from "react"
import Header from "./Header/Header"
import ThemeContext, {
  getSetting,
  updateSetting,
} from "../components/Header/Theme"
import "../../css/pages/global.css"

interface Props {}

const layout: React.FC<Props> = ({ children }) => {
  const [dark, setDark] = useState(getSetting)
  const theme = dark ? "dark_theme" : "light_theme"

  const toggleDarkMode = useCallback(() => {
    setDark(prevState => {
      const newState = !prevState
      updateSetting(newState)
      return newState
    })
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      <div className={"layout " + theme}>
        {console.log(theme)}
        <Header on={dark} toggle={toggleDarkMode} />
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default layout
