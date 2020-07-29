import React from "react"
import { Sun, Moon } from "react-feather"

interface Props {
  on: boolean
  toggle: () => void
}
const ThemeToggler: React.FC<Props> = ({ on, toggle }) => {
  return (
    <button type="button" role="switch" onClick={toggle}>
      {on ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeToggler
