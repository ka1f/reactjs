import React from 'react'



// eslint-disable-next-line react/prop-types
function Card({firstname, btntext =  "visit me",biotext,logo}) {
  return (
    <div className='flex justify-center i '>
    <div className="relative h-[400px] w-[300px] rounded-xl m-10" >
<img
src={logo}
alt="AirMax Pro"
className="z-0 h-full w-full rounded-md object-cover object-right"
/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-left">
<h1 className="text-lg font-semibold text-black">{firstname}</h1>
<p className="mt-2 text-sm text-gray-300">{biotext}</p>
<button  className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
{btntext  || "visit me"} →
</button>
</div>
</div>
</div>
  )
}

export default Card