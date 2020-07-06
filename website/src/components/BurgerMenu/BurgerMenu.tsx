import React from "react"
import "./BurgerMenu.css"

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
