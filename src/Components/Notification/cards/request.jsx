import React from 'react'
import Avatar from '../../../Fields/Avatar/avatar'
import { faCheck ,faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Request({companyName , img, id}) {
  return (
    <div className='w-full flex items-center gap-2'>
        <div className='flex items-center gap-2'>
             <Avatar img={img} />
            
        </div>
        <div className='w-full flex flex-col  md:flex-row gap-1 md:gap-9'>
            <p className='text-largeP'>  <h1 className='text-largeP font-bold'>{companyName}</h1>  has sent a connection request.</p>
            <div className='flex gap-2'>
                <div className='w-[45px]  aspect-square rounded-full flex items-center justify-center border-2 border-primary cursor-pointer '>
                    <FontAwesomeIcon icon={faCheck} className='text-largeP md:text-smallT text-primary' />
                </div>
                <div className='w-[45px]  aspect-square rounded-full flex items-center justify-center border-2 border-secondary cursor-pointer'>
                    <FontAwesomeIcon icon={faClose} className='text-largeP md:text-smallT text-secondary' />
                </div>
            </div>
        </div>
    </div>
  )
}
