/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

 function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ka1f')
    //     .then (res => res.json())
    //     .then (data => setData(data))
    // })
  return (
    <div className='flex flex-col justify-center items-center font-medium bg-slate-800 text-white  text-2xl p-4'>
        <img className='w-40 h-40 rounded-full m-4' src={data.avatar_url} alt="pic" />
        Github Followers : {data.followers}</div>
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubinfo = async () => {
    const res = await fetch('https://api.github.com/users/ka1f')
    const data = await res.json()
    return data
    
}
