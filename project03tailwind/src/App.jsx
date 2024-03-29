// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
        <h1 className="text-10xl font-bold  bg-green-500 hover:text-black p-4 rounded-xl outline-none ">
          Hello world!
        </h1>


<div className='flex justify-center flex-wrap '>
      <Card firstname="Return" biotext="hello my name is return" btntext="click me" logo="https://wallpapers.com/images/featured/zelda-pictures-rkp03okh2d43ik06.jpg"/>
      <Card firstname="Zelda" biotext="hello my name is zelda" logo="https://wallpapers.com/images/featured/zelda-pictures-rkp03okh2d43ik06.jpg"/>
      <Card firstname="king" biotext="hello my name is king" logo="https://wallpapers.com/images/featured/zelda-pictures-rkp03okh2d43ik06.jpg"/>
</div>
     








    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/11829576/pexels-photo-11829576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-right space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default App
