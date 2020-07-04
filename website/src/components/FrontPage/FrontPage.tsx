import React from "react"
import "@fortawesome/fontawesome-free/js/all.js"

interface Props {}

const FrontPage: React.FC<Props> = () => {
  return (
    <div className="home">
      <h1 className="lg-heading">
        Carl <span className="text-secondary">Smestad</span>
      </h1>
      <h2 className="sm-heading">Full-stack Developer, Procrastinator</h2>
      <div className="icons">
        <a href="#!">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#!">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#!">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="#!">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  )
}
export default FrontPage
