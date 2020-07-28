import React from "react"
import "../../../css/components/BurgerMenu/BurgerMenu.css"

interface Props {
  click: any
  show: boolean
}

export const BurgerMenu: React.FC<Props> = ({ click, show }) => {
  return (
    <div onClick={click} className={"menu-btn " + (show ? "show" : "close")}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  )
}
