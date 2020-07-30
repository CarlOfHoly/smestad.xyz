import React, { useContext } from "react"
import { Sun, Moon } from "react-feather"
import { ThemeContext } from "./ThemeContext"

import "../../../css/components/Theme/ThemeToggler.css"

const ThemeToggler: React.FC = () => {
  const { setTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    setTheme(prevTheme =>
      prevTheme === "dark_mode" ? "light_mode" : "dark_mode"
    )
  }

  return (
    <button
      className="theme-toggler"
      type="button"
      role="switch"
      onClick={changeTheme}
    >
      {<Sun />}
    </button>
  )
}

export default ThemeToggler
