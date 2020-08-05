import React from "react"
import "../../../css/components/UI/Cursor.css"

interface Props {
  x: number
  y: number
}
const Cursor: React.FC<Props> = ({ x, y }) => (
  <div className="cursor" style={{ top: y + "px", left: x + "px" }}></div>
)

export default Cursor
