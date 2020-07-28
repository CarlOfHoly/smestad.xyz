import React from "react"
import "../../../css/components/FullPage/Page.css"

interface Props {
  title: String
  titlePosition: String
}
const Page: React.FC<Props> = ({ title, titlePosition }) => {
  const newTitle = title.split(" ")
  return (
    <div className={"page " + titlePosition}>
      {newTitle.map(title => (
        <h1 className="title">{title.toUpperCase()}</h1>
      ))}
    </div>
  )
}

export default Page