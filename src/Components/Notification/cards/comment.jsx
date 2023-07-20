import React from 'react'
import Avatar from '../../../Fields/Avatar/avatar'

export default function Comment({companyName , img}) {
  return (
    <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2'>
             <Avatar img={img} />
            
        </div>
        <p className='text-largeP'>  <h1 className='text-largeP font-bold'>{companyName}</h1>  has commented on your post.</p>
    </div>
  )
}
