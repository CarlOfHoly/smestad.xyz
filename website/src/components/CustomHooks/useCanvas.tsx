import React, { useRef, useState, useEffect } from "react"

const useCanvas = () => {
  const canvasRef = useRef(null)
  const [coordinates, setCoordinates] = useState([])
  const canvas = canvasRef.current
  const canvasWidth = window.innerWidth
  const canvasHeight = window.innerHeight

  useEffect(() => {
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  })

  return [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight]
}

export default useCanvas
