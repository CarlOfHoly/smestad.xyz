import React, { useEffect } from "react"
import { gsap, Linear, Power0, Back } from "gsap"

import "../../../css/components/FullPage/Page.css"
import "animate.css"

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
    const tl = gsap.timeline()

    tl.fromTo([".circle-one"], 2, { y: 500, opacity: 0 }, { y: 0, opacity: 1 })
    tl.fromTo(
      [".circle-two", ".circle-three"],
      2,
      { y: 500, opacity: 0 },
      { y: 0, opacity: 0.3 },
      "-=1.9"
    )
    tl.to([".circle-one"], 6, { x: 300, ease: Back.easeOut.config(1.7) }, "+=1")
    tl.to(
      [".circle-two", ".circle-three"],
      6,
      { x: 300, ease: Back.easeOut.config(1.7) },
      "-=5.9"
    )

    gsap.fromTo(
      [".triangle-one", ".square-one"],
      7,
      {
        rotation: -10,
      },
      {
        rotation: 10,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone,
      }
    )

    gsap.fromTo(
      [".triangle-two", ".square-two"],
      7,
      {
        rotation: -15,
      },
      { rotation: 15, repeat: -1, yoyo: true, ease: Power0.easeNone }
    )

    gsap.fromTo(
      [".triangle-three", ".square-three"],
      7,
      {
        rotation: -20,
      },
      { rotation: 20, repeat: -1, yoyo: true, ease: Power0.easeNone }
    )

    gsap.to(".circle-one", 55, {
      rotation: 2160,
      ease: Linear.easeNone,
      repeat: -1,
      paused: false,
    })

    gsap.to(".circle-two", 44, {
      rotation: 2160,
      ease: Linear.easeNone,
      repeat: -1,
      paused: false,
    })

    gsap.to(".circle-three", 40, {
      rotation: 2160,
      ease: Linear.easeNone,
      repeat: -1,
      paused: false,
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
            className={shape + "-one"}
          />
          <img
            src={require("../../images/" + shape + ".png")}
            className={shape + "-two"}
          />
          <img
            src={require("../../images/" + shape + ".png")}
            className={shape + "-three"}
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
