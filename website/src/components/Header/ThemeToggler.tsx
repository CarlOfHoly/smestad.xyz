import React, { useContext } from "react"
import { Sun, Moon } from "react-feather"
import { ThemeContext } from "./ThemeContext"

const ThemeToggler: React.FC = () => {
  const { setTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    console.log("Changing theme to light theme")
    setTheme(prevTheme =>
      prevTheme === "dark_mode" ? "light_mode" : "dark_mode"
    )
  }

  return (
    <button type="button" role="switch" onClick={changeTheme}>
      {<Sun />}
    </button>
  )
}

export default ThemeToggler
