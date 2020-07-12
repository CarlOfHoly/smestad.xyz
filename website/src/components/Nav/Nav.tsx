import React from "react"
import { Link } from "gatsby"
import "./Nav.css"

interface Props {
  show: boolean
}

const Nav: React.FC<Props> = ({ show }) => {
  const showItem = show ? "show" : "close"

  return (
    <nav className={"menu " + showItem}>
      <ul className={"menu-nav " + showItem}>
        <li className={"nav-item  " + showItem}>
          <Link className={"nav-link "} to={"/"} activeClassName="current">
            Home
          </Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link className={"nav-link "} to={"/about"} activeClassName="current">
            About
          </Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link
            className={"nav-link "}
            to={"/projects"}
            activeClassName="current"
          >
            Projects
          </Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link
            className={"nav-link "}
            to={"/contact"}
            activeClassName="current"
          >
            Contact
          </Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link
            className={"nav-link "}
            to={"/practice"}
            activeClassName="current"
          >
            Practice
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
