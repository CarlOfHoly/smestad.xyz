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
    gsap.fromTo(
      ".shape-one",
      3,
      {
        rotation: 40,
      },
      { rotation: 50, repeat: -1, yoyo: true }
    )

    gsap.fromTo(
      ".shape-two",
      3,
      {
        rotation: 38,
      },
      { rotation: 52, repeat: -1, yoyo: true }
    )

    gsap.fromTo(
      ".shape-three",
      3,
      {
        rotation: 42,
      },
      { rotation: 48, repeat: -1, yoyo: true }
    )
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
