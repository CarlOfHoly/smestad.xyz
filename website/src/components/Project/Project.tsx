import React from "react"
import "@fortawesome/fontawesome-free/js/all.js"
const img = require("../../images/projects/chess.png")

const Project: React.FC = () => {
  return (
    <div className="item">
      <a href="#!">
        <img src={img} alt="project" />
      </a>
      <a href="#!" className="btn-light">
        <i className="fas fa-eye"></i> Project
      </a>
      <a href="#!" className="btn-dark">
        <i className="fas fa-github"></i> Github
      </a>
    </div>
  )
}

export default Project
