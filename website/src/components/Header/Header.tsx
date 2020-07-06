import React, { useState } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import Nav from "../Nav/Nav"

interface Props {}

const Header: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const clicked = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <header>
      <BurgerMenu show={!showMenu} click={clicked} />
      <Nav show={showMenu} />
    </header>
  )
}

export default Header
