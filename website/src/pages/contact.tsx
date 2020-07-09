import React from "react"
import Header from "../components/Header/Header"

interface Props {
  location: { pathname: string }
}

const contact: React.FC<Props> = ({ location }) => {
  return (
    <div>
      <Header pathname={location.pathname} />
    </div>
  )
}

export default contact
