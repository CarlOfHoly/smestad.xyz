import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

const Portal: React.FC = () => {
  const element =
    typeof document !== `undefined` ? document.createElement("div") : null

  const [counter, setCounter] = useState(2)

  console.log(portalRoot)

  useEffect(() => {
    portalRoot && portalRoot.appendChild(element)

    return () => {
      portalRoot.removeChild(element)
    }
  }, [portalRoot])
  const data = (
    <>
      Counter: {counter}
      <button onClick={() => setCounter(prevCount => prevCount + 1)}>
        Increment counter
      </button>
    </>
  )
  return element ? ReactDOM.createPortal(data, element) : null
}

export default Portal
