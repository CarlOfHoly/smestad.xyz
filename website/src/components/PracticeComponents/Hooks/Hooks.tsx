import React, { useState, useEffect } from "react"
import "./Hooks.css"

const Hooks: React.FC = () => {
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 })

  return (
    <div className="hooks-practice">
      <button
        className="button"
        onClick={() => setCount(currentCount => currentCount + 1)}
      >
        Inc counter
      </button>
      <div className="count">{count1}</div>
      <div className="count">{count2}</div>
    </div>
  )
}
export default Hooks