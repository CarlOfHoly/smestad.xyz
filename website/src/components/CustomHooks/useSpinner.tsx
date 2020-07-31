import { useEffect, useState } from "react"

const useSpinner = (spinner, component) => {
  const [currentComponent, setCurrentComponent] = useState(null)

  useEffect(() => {
    setTimeout(() => setCurrentComponent(component))
  }, [])
  return currentComponent ? component : spinner
}

export default useSpinner
