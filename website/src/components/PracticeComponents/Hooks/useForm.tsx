import { useState } from "react"

export const useForm: any = initialValues => {
  const [values, setValues] = useState(initialValues)

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    },
  ]
}
