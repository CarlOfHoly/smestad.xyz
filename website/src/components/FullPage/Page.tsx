import React, { useRef, useEffect } from "react"
import { gsap, Linear } from "gsap"

import "../../../css/components/FullPage/Page.css"

interface Props {
  title: String
  titlePosition: String
  shape?: String
  ingress?: String
}
const Page: React.FC<Props> = ({ title, titlePosition, shape, ingress }) => {
  const newTitle = title.split(" ")
  const splitIngress = ingress.split("/n")

  useEffect(() => {
    gsap.fromTo(".shape", 2, { y: 800 }, { y: 0 })
    gsap.fromTo(".shape-copy", 2.1, { y: 800 }, { y: 0 })
    gsap.fromTo(".shape", 2, { x: 0 }, { x: 300 })
    gsap.fromTo(".shape-copy", 2.1, { x: 0 }, { x: 300 })
    gsap.to(".shape", 36, {
      rotation: 2160,
      ease: Linear.easeNone,
      repeat: -1,
    })
    gsap.to(".shape-copy", 30, {
      rotation: 2160,
      ease: Linear.easeNone,
      repeat: -1,
    })
  }, [])

  return (
    <div className={"page " + titlePosition}>
      {newTitle.map((title, index) => (
        <h1 key={index} className="title">
          {title.toUpperCase()}
        </h1>
      ))}

      {shape && (
        <>
          <img
            src={require("../../images/" + shape + ".png")}
            className="shape"
          />
          <img
            src={require("../../images/" + shape + ".png")}
            className="shape-copy"
          />
        </>
      )}

      <p className="byline">{shape}</p>
      {splitIngress.map((ingressPart, index) => (
        <p key={index} className="ingress">
          {ingressPart}
        </p>
      ))}
    </div>
  )
}

export default Page
