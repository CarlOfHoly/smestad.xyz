import React, { useRef } from "react"

export const Hello: React.FC = () => {
  const renders = useRef(0)

  console.log("hello renders: ", renders.current++)
  return <h1>Hello</h1>
}
