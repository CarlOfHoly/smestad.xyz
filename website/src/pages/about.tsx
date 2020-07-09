import React from "react"
import "./about.css"
import Header from "../components/Header/Header"

interface Props {
  location: { pathname: string }
}

const about: React.FC<Props> = ({ location }) => {
  console.log(location.pathname)
  return (
    <div>
      <Header pathname={location.pathname} />
    </div>
  )
}

export default about
