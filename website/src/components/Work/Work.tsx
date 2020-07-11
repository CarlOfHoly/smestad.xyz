import React from "react"
import Project from "../Project/Project"

import "./Work.css"

const Work: React.FC = () => {
  return (
    <div className="work">
      <h1 className="lg-heading">
        My <span className="text-secondary">Work</span>
      </h1>
      <h2 className="sm-heading">Check out some of my projects.</h2>

      <div className="projects">
        <Project />
      </div>
    </div>
  )
}
export default Work
