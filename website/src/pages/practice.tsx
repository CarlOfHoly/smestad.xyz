import React from "react"
import Layout from "../components/layout"
import Animations from "../components/PracticeComponents/GSAP/Animations"
import Portal from "../components/PracticeComponents/Portal"

const PracticePage: React.FC = () => {
  return (
    <Layout>
      <Portal />
      <Animations />
    </Layout>
  )
}

export default PracticePage
