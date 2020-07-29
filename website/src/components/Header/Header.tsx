import React, { useState } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import Nav from "../Nav/Nav"
import ThemeToggler from "./ThemeToggler"

interface Props {
  on: boolean
  toggle: () => void
}

const Header: React.FC<Props> = ({ on, toggle }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const clicked = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <header>
      <ThemeToggler on={on} toggle={toggle} />
      <BurgerMenu show={!showMenu} click={clicked} />
      <Nav show={showMenu} />
    </header>
  )
}

export default Header
