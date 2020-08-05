import React, { useState, useEffect } from "react"

const ThemeContextDefaultValue = {
  theme: "dark-mode",
  setTheme: (_theme: any) => {},
  debugMode: false,
  setDebugMode: (_value: boolean) => {},
}
export const ThemeContext = React.createContext(ThemeContextDefaultValue)

interface Props {
  children?: React.ReactNode
}

const windowGlobal = typeof window !== "undefined" && window

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const fetchThemeFromLocalStorage = () => {
    try {
      return JSON.parse(windowGlobal.localStorage.getItem("theme"))
    } catch (e) {
      return ThemeContextDefaultValue.theme
    }
  }
  const [theme, setTheme] = useState(fetchThemeFromLocalStorage())
  const [debugMode, setDebugMode] = useState(ThemeContextDefaultValue.debugMode)

  useEffect(() => {
    windowGlobal.localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, debugMode, setDebugMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
