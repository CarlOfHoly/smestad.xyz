import React, { useEffect, useState } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { gsap } from "gsap"

import "../../../css/components/FullPage/FullPage.css"

interface Props {
  children: JSX.Element[]
  scrollingSpeed: Number
}
const FullPage: React.FC<Props> = ({ children, scrollingSpeed }) => {
  const [loadingFinished, setLoadingFinished] = useState(false)
  const delay = 6000
  const afterLoaded = () => {
    setLoadingFinished(false)
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
    setLoadingFinished(false)
    gsap.fromTo(
      [".title", ".byline", ".ingress"],
      0.3,
      { x: 0, opacity: 1 },
      { x: -30, opacity: 0 }
    )
  }

  return (
    <ReactFullpage
      scrollingSpeed={scrollingSpeed}
      navigation
      navigationPosition="left"
      fitToSection="true"
      fitToSectionDelay="8000"
      onLeave={() => {
        whenLeaving()
      }}
      afterLoad={() => {
        afterLoaded()
      }}
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
