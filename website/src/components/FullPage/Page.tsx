import React, { useEffect } from "react"
import { gsap, Expo, Linear, Power0 } from "gsap"
import Byline from "../UI/Byline"

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

  const windowWidth = window.innerWidth

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      [".circle-one"],
      4,
      { y: 500, opacity: 0, ease: Expo.easeInOut },
      { y: 0, opacity: 1, ease: Expo.easeInOut }
    )

    tl.fromTo(
      [".circle-two", ".circle-three"],
      4,
      { y: 500, opacity: 0, ease: Expo.easeInOut },
      { y: 0, opacity: 0.3, ease: Expo.easeInOut },
      "-=3.9"
    )

    if (windowWidth > 600) {
      tl.to([".circle-one"], 6, { x: 300, ease: Expo.easeInOut }, "-=2")
      tl.to(
        [".circle-two", ".circle-three"],
        6,
        { x: 300, ease: Expo.easeInOut },
        "-=5.9"
      )
    } else {
      tl.to([".circle-one"], 6, { y: -150, ease: Expo.easeInOut }, "-=2")
      tl.to(
        [".circle-two", ".circle-three"],
        6,
        { y: -150, ease: Expo.easeInOut },
        "-=5.9"
      )
    }

    gsap.fromTo(
      [".triangle-one"],
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
      [".square-one"],
      7,
      {
        rotation: 35,
      },
      {
        rotation: 55,
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone,
      }
    )
    gsap.fromTo(
      [".triangle-two"],
      7,
      {
        rotation: -15,
      },
      { rotation: 15, repeat: -1, yoyo: true, ease: Power0.easeNone }
    )

    gsap.fromTo(
      [".triangle-three"],
      7,
      {
        rotation: -20,
      },
      { rotation: 20, repeat: -1, yoyo: true, ease: Power0.easeNone }
    )

    gsap.fromTo(
      [".square-two"],
      7,
      {
        rotation: 30,
      },
      { rotation: 60, repeat: -1, yoyo: true, ease: Power0.easeNone }
    )

    gsap.fromTo(
      [".square-three"],
      7,
      {
        rotation: 25,
      },
      { rotation: 65, repeat: -1, yoyo: true, ease: Power0.easeNone }
    )

    tl.fromTo(
      [".overlay", ".blobs"],
      2,
      { y: 900, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=2"
    )

    tl.fromTo(
      [".menu-btn", "#fp-nav", ".theme-toggler"],
      1,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5"
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

      <div className={"" + shape}>
        <Byline />
      </div>
      {splitIngress.map((ingressPart, index) => (
        <p key={index} className="ingress">
          {ingressPart}
        </p>
      ))}
    </div>
  )
}

export default Page
