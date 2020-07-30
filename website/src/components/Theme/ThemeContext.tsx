import React, { useState, useEffect } from "react"

const ThemeContextDefaultValue = {
  theme: "dark_mode",
  setTheme: (theme: any) => {},
}
export const ThemeContext = React.createContext(ThemeContextDefaultValue)

interface Props {
  children?: React.ReactNode
}

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")))

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
