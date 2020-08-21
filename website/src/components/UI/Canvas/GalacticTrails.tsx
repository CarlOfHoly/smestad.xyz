import React, { useContext, useEffect, useState } from "react"
import Canvas from "./Canvas"
import { range, getRandomInt, getRandom } from "../../../utils"

const GalacticTrails = () => {
  const colours = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"]
  const windowGlobal = typeof window !== "undefined" && window

  let mouseDown = false
  useEffect(() => {
    addEventListener("mousedown", () => {
      mouseDown = true
    })

    addEventListener("mouseup", () => {
      mouseDown = false
    })

    addEventListener("resize", () => {
      init()
    })
  }, [])

  class Particle {
    x: any
    y: any
    radius: any
    colour: any
    constructor(x, y, radius, colour) {
      this.x = x
      this.y = y
      this.radius = radius
      this.colour = colour
    }

    draw(c) {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.shadowColor = this.colour
      c.shadowBlur = 10
      c.fillStyle = this.colour
      c.fill()
      c.closePath()
    }
    update(c) {
      this.draw(c)
    }
  }

  let particles
  const init = () => {
    particles = []
    const amount = 400

    for (let _i in range(0, amount)) {
      const radius = getRandomInt(1, 2)
      const extraDimensions = 300

      const x =
        Math.random() * (windowGlobal.innerWidth + extraDimensions) -
        (windowGlobal.innerWidth + extraDimensions) / 2
      const y =
        Math.random() * (windowGlobal.innerHeight + extraDimensions) -
        (windowGlobal.innerHeight + extraDimensions) / 2

      const colour = colours[getRandomInt(0, colours.length - 1)]
      particles.push(new Particle(x, y, radius, colour))
    }
  }

  let radians = 0
  let alpha = 1
  const draw = c => {
    c.fillStyle = "rgba(10, 10, 10, " + alpha + ")"
    c.fillRect(0, 0, windowGlobal.innerWidth, windowGlobal.innerHeight)

    c.save()
    c.translate(windowGlobal.innerWidth / 2, windowGlobal.innerHeight / 2)
    c.rotate(radians)
    particles.forEach(particle => particle.update(c))
    c.restore()

    radians += 0.005

    if (mouseDown && alpha >= 0.05) {
      alpha -= 0.01
    } else if (!mouseDown && alpha < 1) {
      alpha += 0.01
    }
  }

  init()
  return (
    <>
      <Canvas draw={draw} className="blobs" style={{ position: "absolute" }} />
    </>
  )
}

export default GalacticTrails
