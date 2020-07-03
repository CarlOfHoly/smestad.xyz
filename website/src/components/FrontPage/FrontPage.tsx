import React, { Fragment } from "react"

interface Props {}

const FrontPage: React.FC<Props> = () => {
  return (
    <div className="home">
      <h1 className="lg-heading">
        Carl <span className="text-secondary">Smestad</span>
      </h1>
      <h2 className="sm-heading">Full-stack Developer, Procrastinator</h2>
    </div>
  )
}
export default FrontPage
