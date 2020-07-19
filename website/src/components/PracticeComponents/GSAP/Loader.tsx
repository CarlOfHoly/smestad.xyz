import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"

const Loader: React.FC = () => {
  const blue = useRef(null)
  const red = useRef(null)
  const yellow = useRef(null)
  const green = useRef(null)

  const [messages, setMessages] = useState([])

  const showMessage = message => setMessages([message])

  useEffect(() => {
    gsap.to(blue.current, {
      duration: 3,
      x: 100,
      onStart: showMessage,
      onStartParams: ["Starting to move"],
      onComplete: showMessage,
      onCompleteParams: ["finishing"],
      delay: 1,
    })
  }, [])

  return (
    <>
      <svg viewBox="0 0 150 33.2" width="180" height="150">
        <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
      </svg>
      {messages}
    </>
  )
}

export default Loader
