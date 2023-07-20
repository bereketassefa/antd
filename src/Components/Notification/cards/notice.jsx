import React from 'react'

export default function Notice({message}) {
  return (
    <div className='flex'>
        <h1 className='text-smallP md:midP lg:largeP' >{message}</h1>
    </div>
  )
}
