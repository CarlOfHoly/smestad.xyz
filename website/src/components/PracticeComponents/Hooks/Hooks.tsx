import React, { useState, useEffect } from "react"
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
  // const [showHello, setShowHello] = useState(true)

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  )

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

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
      {/* <button onClick={() => setShowHello(!showHello)}>Hello</button>
      {showHello ? <Hello /> : null} */}
      <input
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
    </div>
  )
}
export default Hooks
