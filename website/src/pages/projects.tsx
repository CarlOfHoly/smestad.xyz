import React from "react"
import Layout from "../components/Layout/layout"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Header from "../components/Header/Header"
import Project from "../components/Project/Project"

const Projects: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Header />
        <Project
          projectTitle="Project 1"
          projectIngress="Ingress"
          reverse={false}
        />
        <Project
          projectTitle="Project 2"
          projectIngress="Ingress"
          reverse={true}
        />
      </Layout>
    </ThemeContextProvider>
  )
}

export default Projects
