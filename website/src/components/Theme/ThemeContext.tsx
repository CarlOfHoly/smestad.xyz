import React, { useState, useEffect } from "react"

const ThemeContextDefaultValue = {
  theme: "dark-mode",
  setTheme: (_theme: any) => {},
}
export const ThemeContext = React.createContext(ThemeContextDefaultValue)

interface Props {
  children?: React.ReactNode
}

const windowGlobal = typeof window !== "undefined" && window

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const fetchThemeFromLocalStorage = () => {
    try {
      console.log("Trying to fetch from local storage: ")
      console.log("Current theme is: " + theme)

      return JSON.parse(windowGlobal.localStorage.getItem("theme"))
    } catch (e) {
      console.log("Failed to fetch theme from local storage")
      console.log(
        "using default theme which is " + ThemeContextDefaultValue.theme
      )

      return ThemeContextDefaultValue.theme
    }
  }
  const [theme, setTheme] = useState(ThemeContextDefaultValue.theme)

  useEffect(() => {
    setTheme(fetchThemeFromLocalStorage())
  })

  useEffect(() => {
    windowGlobal.localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
