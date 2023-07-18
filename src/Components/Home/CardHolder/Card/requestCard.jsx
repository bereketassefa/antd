import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'

export default function RequestCard({id , img, companyName}) {
  return (
    <div className='flex items-center justify-between' key={id}>
        <div className='flex gap-2 items-center'>
             <Avatar 
                img={img}
             />
             <h1 className='text-smallP md:text-midP lg:text-largeP' >{companyName}</h1>
        </div>
        
        <div className='flex gap-2'>
             <div className='w-[40px]  aspect-square rounded-full flex items-center justify-center border-2 border-primary cursor-pointer '>
                <FontAwesomeIcon icon={faCheck} className='text-largeP md:text-smallT text-primary' />
             </div>
             <div className='w-[40px]  aspect-square rounded-full flex items-center justify-center border-2 border-secondary cursor-pointer'>
                <FontAwesomeIcon icon={faClose} className='text-largeP md:text-smallT text-secondary' />
             </div>

        </div>
    </div>
  )
}
