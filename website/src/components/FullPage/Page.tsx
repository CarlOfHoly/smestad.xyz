import React from "react"
import "../../../css/components/FullPage/Page.css"

interface Props {
  title: String
  titlePosition: String
  byline?: String
  ingress?: String
}
const Page: React.FC<Props> = ({ title, titlePosition, byline, ingress }) => {
  const newTitle = title.split(" ")
  const splitIngress = ingress.split("/n")

  return (
    <div className={"page " + titlePosition}>
      {newTitle.map((title, index) => (
        <h1 key={index} className="title">
          {title.toUpperCase()}
        </h1>
      ))}
      <p className="byline">{byline}</p>
      {splitIngress.map((ingressPart, index) => (
        <p key={index} className="ingress">
          {ingressPart}
        </p>
      ))}
    </div>
  )
}

export default Page
