import React, { useContext, useEffect } from "react"
import Canvas from "./Canvas"
import { range, getRandomInt, getRandom } from "../../../utils"

const Blobs = () => {
  const aurora1 = "#bf616a"
  const aurora2 = "#d08770"
  const aurora3 = "#ebcb8b"
  const snow3 = "#eceff4"
  const frost1 = "#8fbcbb"

  const circles = []
  const colours = [aurora1, aurora2, aurora3, snow3, frost1]
  const amount = 60
  const velocity = 0.2
  const windowGlobal = typeof window !== "undefined" && window

  const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
  }

  useEffect(() => {
    addEventListener("mousemove", e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })
  })

  class Momone {
    x: any
    y: any
    radius: any
    color: any
    constructor(x, y, radius, color) {
      this.x = x
      this.y = y
      this.radius = radius
      this.color = color
    }

    draw(c) {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = this.color
      c.fill()
      c.closePath()
    }
    update(c) {
      this.draw(c)
    }
  }

  for (let _i of range(0, amount)) {
    const radius = getRandomInt(2, 3)
    const x = getRandom(radius, windowGlobal.innerWidth - radius)
    const y = getRandom(radius, windowGlobal.innerHeight - radius)
    const dx = getRandom(-velocity, velocity)
    const dy = getRandom(-velocity, velocity)
    const colour = colours[getRandomInt(0, colours.length)]
  }

  const draw = c => {
    c.clearRect(0, 0, windowGlobal.innerWidth, windowGlobal.innerHeight)
    c.fillText("Hello", mouse.x, mouse.y)
    //circles.forEach(circle => circle.update(c))
  }

  return (
    <>
      <Canvas draw={draw} className="blobs" style={{ position: "absolute" }} />
    </>
  )
}

export default Blobs
