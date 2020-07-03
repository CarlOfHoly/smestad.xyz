import React from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import Nav from "../Nav/Nav"

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <BurgerMenu />
      <Nav />
    </header>
  )
}

export default Header
