import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"

const Loader: React.FC = () => {
  const box = useRef(null)
  const blue = useRef(null)
  const red = useRef(null)
  const yellow = useRef(null)
  const green = useRef(null)

  useEffect(() => {
    gsap.from(".circle", {
      duration: 1,
      opacity: 0,
      y: "random(-100, 50)",
      stagger: 0.25,
    })
  }, [])

  return (
    <>
      <svg ref={box} width="180" height="150">
        <circle
          className="circle"
          ref={blue}
          cx="16.1"
          cy="16.6"
          r="16.1"
          fill="#527abd"
        />
        <circle
          className="circle"
          ref={red}
          cx="55.2"
          cy="16.6"
          r="16.1"
          fill="#de4431"
        />
        <circle
          className="circle"
          ref={yellow}
          cx="94.3"
          cy="16.6"
          r="16.1"
          fill="#f4b61a"
        />
        <circle
          className="circle"
          ref={green}
          cx="133.4"
          cy="16.6"
          r="16.1"
          fill="#009e52"
        />
      </svg>
    </>
  )
}

export default Loader
