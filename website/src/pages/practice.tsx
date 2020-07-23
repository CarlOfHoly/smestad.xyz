import React, { Profiler } from "react"
import Layout from "../components/layout"
import Animations from "../components/PracticeComponents/GSAP/Animations"
import Portal from "../components/PracticeComponents/Portal"

const PracticePage: React.FC = () => {
  const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    console.log("id: " + id)
    console.log("phase: " + phase)
    console.log("actualTime: " + actualTime)
    console.log("baseTime: " + baseTime)
    console.log("startTime: " + startTime)
    console.log("commitTime: " + commitTime)
  }
  return (
    <Layout>
      <Profiler id="Navigation" onRender={callback}>
        <Portal />
      </Profiler>
      {/* <Animations /> */}
    </Layout>
  )
}

export default PracticePage
