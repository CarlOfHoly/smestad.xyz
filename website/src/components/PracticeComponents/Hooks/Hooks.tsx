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

  const { data, loading } = useFetch("http://numbersapi.com/43/trivia")
  console.log(data)
  return (
    <div className="hooks-practice">
      <div>{loading ? "loading ...." : data}</div>
      {/* <button onClick={() => setShowHello(!showHello)}>Helo</button>
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
