import React from "react"
import { Link } from "gatsby"
import "./Nav.css"

interface Props {
  show: boolean
  pathname: string
}

const Nav: React.FC<Props> = ({ pathname, show }) => {
  const showItem = show ? "show" : "close"
  const isCurrent = path => (path == pathname ? "current" : "")

  return (
    <nav className={"menu " + showItem}>
      <ul className={"menu-nav " + showItem}>
        <li className={"nav-item  " + showItem}>
          <Link className={"nav-link " + isCurrent("/")} to={"/"}>
            Home
          </Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link className={"nav-link " + isCurrent("/about")} to={"/about"}>
            About
          </Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link
            className={"nav-link " + isCurrent("/projects")}
            to={"/projects"}
          >
            Projects
          </Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link className={"nav-link " + isCurrent("/contact")} to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
