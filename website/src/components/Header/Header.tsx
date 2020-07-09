import React, { useState } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import Nav from "../Nav/Nav"

interface Props {
  pathname: string
}

const Header: React.FC<Props> = ({ pathname }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const clicked = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <header>
      <BurgerMenu show={!showMenu} click={clicked} />
      <Nav show={showMenu} pathname={pathname} />
    </header>
  )
}

export default Header
