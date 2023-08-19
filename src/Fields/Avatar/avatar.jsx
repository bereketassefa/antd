import React from 'react'

export default function Avatar({img}) {
  return (
    <div className='w-[47px] h-[47px] items-center justify-center rounded-full'>
        <img src={img} alt="" className='w-full'/>
    </div>
  )
}
