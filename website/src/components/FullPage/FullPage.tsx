import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import "../../../css/components/FullPage/FullPage.css"

interface Props {
  children: JSX.Element[]
  scrollingSpeed: Number
}
const FullPage: React.FC<Props> = ({ children, scrollingSpeed }) => {
  return (
    <ReactFullpage
      scrollingSpeed={scrollingSpeed}
      navigation
      navigationPosition="left"
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
