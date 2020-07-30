import React, { useState, useEffect } from "react"

const DARK_MODE_KEY = "dark_mode"

export const getSetting = () => {
  try {
    return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true
  } catch (e) {
    return false
  }
}

export const updateSetting = (value: boolean) => {
  try {
    window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true))
  } catch (e) {}
}

const ThemeContextDefaultValue = {
  theme: "dark_mode",
  setTheme: (theme: any) => {},
}
export const ThemeContext = React.createContext(ThemeContextDefaultValue)

interface Props {
  children?: React.ReactNode
}

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(ThemeContextDefaultValue.theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
