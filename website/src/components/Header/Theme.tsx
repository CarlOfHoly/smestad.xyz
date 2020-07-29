import React from "react"

const DARK_MODE_KEY = "dark_mode"

export const getSetting = () => {
  try {
    return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true
  } catch (e) {
    return false
  }
}

export const updateSetting = (value: boolean) => {
  try {
    window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true))
  } catch (e) {}
}

export default React.createContext("dark_mode")
