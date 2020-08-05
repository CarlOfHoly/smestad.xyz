import React, { useRef, useEffect } from "react"

const getPixelRatio = context => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1

  return (window.devicePixelRatio || 1) / backingStore
}

const Circle = () => {
  const circleRef = useRef(null)

  useEffect(() => {
    const canvas = circleRef.current
    if (canvas !== "undefined") {
      const ctx = canvas.getContext("2d")

      const ratio = getPixelRatio(ctx)
      const width: any = getComputedStyle(canvas)
        .getPropertyValue("width")
        .slice(0, -2)

      const height: any = getComputedStyle(canvas)
        .getPropertyValue("height")
        .slice(0, -2)

      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.width = `${height}px`

      ctx.beginPath()
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
        0,
        2 * Math.PI
      )
      ctx.fill()
    }
  })

  return <canvas ref={circleRef} style={{ width: "100px", height: "100px" }} />
}

export default Circle
