import React from 'react'
import MessageLeftSide from '../../Components/Message/MessageLeftSide'
import Copyright from '../../Components/CopyRight/Copyright'

export default function Message() {
  return (
    <>
    <div className='w-full h-fit bg-white'>
      <div className='flex space-x-4'>
        <MessageLeftSide /> 
      </div>
      <div className='flex items-center justify-center m-24'>
      <Copyright />
      </div>
    </div>


    </>
  )
}
