import React from "react"
import Header from "../components/Header/Header"

interface Props {
  location: { pathname: string }
}

const projects: React.FC<Props> = ({ location }) => {
  return (
    <div>
      <Header pathname={location.pathname} />
    </div>
  )
}

export default projects
