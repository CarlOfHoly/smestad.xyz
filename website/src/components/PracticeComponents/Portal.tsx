import React, { useEffect } from "react"
import ReactDOM from "react-dom"

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

const Portal: React.FC = () => {
  const element =
    typeof document !== `undefined` ? document.createElement("div") : null

  console.log(portalRoot)

  useEffect(() => {
    portalRoot && portalRoot.appendChild(element)

    return () => {
      portalRoot.removeChild(element)
    }
  }, [portalRoot])
  const data = <h1>PORTAL</h1>
  return element ? ReactDOM.createPortal(data, element) : null
}

export default Portal
