import React from 'react'

export default function Search({val, onChange, onKeyPress}) {
  return (
    <div className='bg-red-100'>
        <input type="text" value={val} className='bg-red-100' />
    </div>
  )
}
