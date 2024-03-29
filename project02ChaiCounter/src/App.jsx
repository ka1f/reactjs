import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [value, setValue] = useState(0)

//  let value = 0
 
 const addValue = () => {
  if (value >= 20) {
    return
    
  }else {
    setValue(value+1)
  }

} 
const remValue = () => {
  if (value <= 0) {
    return
  }else {
    setValue(value-1)
  }

} 

  return (
    <>
    <h1>Chai Counter ☕</h1>
    <h2>{value}</h2>
    <button onClick={addValue}>add value - {value+1}</button> <br/> <br />
    <button onClick={remValue}>remove value - {value-1}</button>
    </>
  )
}

export default App
