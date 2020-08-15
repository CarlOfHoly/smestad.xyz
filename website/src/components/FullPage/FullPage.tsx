import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { gsap } from "gsap"

import "../../../css/components/FullPage/FullPage.css"

interface Props {
  children: JSX.Element[]
  scrollingSpeed: Number
}
const FullPage: React.FC<Props> = ({ children, scrollingSpeed }) => {
  const afterLoaded = () => {
    const tl = gsap.timeline()

    tl.fromTo(".title", 0.6, { x: -30, opacity: 0 }, { x: 0, opacity: 1 })
    tl.fromTo(
      ".byline",
      0.6,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1 },
      "-=0.4"
    )
    tl.fromTo(
      ".ingress",
      0.6,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1 },
      "-=0.4"
    )
  }

  const whenLeaving = () => {
    gsap.fromTo(
      [".title", ".byline", ".ingress"],
      0.3,
      { x: 0, opacity: 1 },
      { x: -30, opacity: 0 }
    )
  }

  const afterRendering = () => {
    const tl = gsap.timeline()

    tl.fromTo(
      ".title",
      0.6,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1 },
      "8.5"
    )
    tl.fromTo(
      ".byline",
      0.6,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1 },
      "-=0.4"
    )
    tl.fromTo(
      ".ingress",
      0.6,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1 },
      "-=0.4"
    )
  }

  return (
    <ReactFullpage
      scrollingSpeed={scrollingSpeed}
      navigation
      navigationPosition="left"
      onLeave={() => {
        whenLeaving()
      }}
      afterLoad={(direction, origin, destination) => {
        console.log(direction.index)
        console.log(origin.index)
        console.log(destination)

        if (origin.index !== 0 || destination != null) {
          afterLoaded()
        }
      }}
      afterRender={afterRendering}
      render={() => (
        <ReactFullpage.Wrapper>
          {children.map((child, index) => (
            <div key={index} className="section">
              {child}
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

export default FullPage
