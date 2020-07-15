import React, { useEffect } from "react"

export const Hello: React.FC = () => {
  useEffect(() => {
    const onMouseMove = e => {
      console.log(e)
    }
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return <h1>Hello</h1>
}
