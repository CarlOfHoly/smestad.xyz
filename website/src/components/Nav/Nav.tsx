import React from "react"
import { Link } from "gatsby"

interface Props {
  show: boolean
}

const Nav: React.FC<Props> = ({ show }) => {
  const showItem = show ? "show" : "close"

  return (
    <nav className={"menu " + showItem}>
      <div className={"menu-branding " + showItem}>
        <div className="portrait"></div>
      </div>
      <ul className={"menu-nav " + showItem}>
        <li className={"nav-item " + showItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
