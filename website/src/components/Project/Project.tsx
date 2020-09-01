import React from "react"
import "../../../css/components/Project/Project.css"

const Project = ({ projectTitle, projectIngress, reverse }) => {
  const mainClassName = !reverse ? "project" : "projectReverse"
  return (
    <div className={mainClassName}>
      <h1 className="title">{projectTitle}</h1>
      <p className="ingress">{projectIngress}</p>
    </div>
  )
}

export default Project
