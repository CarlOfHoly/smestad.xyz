import React, { useState, useEffect, useRef } from "react"
import "./Hooks.css"
import { useForm } from "./useForm"
import { Hello } from "./Hello"
import { useFetch } from "./useFetch"

const Hooks: React.FC = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  })
  const [showHello, setShowHello] = useState(true)

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  )
  const inputRef = useRef()

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)
  console.log(loading)

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  return (
    <div className="hooks-practice">
      <div>{!data ? "loading ...." : data}</div>
      Count: {count}
      <button className="button" onClick={() => setCount(c => c + 1)}>
        Increment count
      </button>
      <button onClick={() => setShowHello(!showHello)}>Hello</button>
      {showHello ? <Hello /> : null}
      <input
        ref={inputRef}
        placeholder="email"
        type="text"
        className="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="text"
        className="firstName"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="password"
        className="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button className="button" onClick={() => console.log(inputRef.current)}>
        Focus
      </button>
    </div>
  )
}
export default Hooks
