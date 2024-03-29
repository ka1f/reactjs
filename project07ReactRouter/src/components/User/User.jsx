/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()
  return (
    <div className='flex justify-center items-center font-medium bg-orange-400 h-20 text-2xl'>User:{userid}</div>
  )
}

export default User