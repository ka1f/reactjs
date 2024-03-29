/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'


function App() {
  const [themeMode, setthemeMode] = useState("light")

  const lightTheme = ()=>{
    setthemeMode("light")
  }
  const darkTheme = ()=>{
    setthemeMode("dark")
  }

//actual change in theme

useEffect(() => {
 let html = document.querySelector("html")
 html.classList.remove("light", "dark")
 html.classList.add(themeMode)
}, [themeMode])

  return (
<Themeprovider value={{themeMode , darkTheme, lightTheme}}> 

<div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4 bg">
            <ThemeBtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
            <Card/>
      </div>
  </div>
</div>

</Themeprovider>
  )
}

export default App
