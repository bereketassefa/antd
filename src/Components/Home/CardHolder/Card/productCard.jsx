import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function ProductCard({key , img, productName }) {
 console.log(img)
  return (
    <div key={key} className='w-full flex  items-center justify-between'  >
        <div className='flex items-center gap-2'>
             <Avatar img={img}  />
             <h1 className='text-smallP md:text-midP lg:text-largeP'>{productName}</h1>
        </div>
        {/* <div>
           <FontAwesomeIcon icon={faArrowUp} className='text-smallT text-green-400' />
        </div> */}
        {/* <div>
            <h1 className='text-smallP md:text-midP lg:text-largeP' >About ({sales})</h1>
        </div> */}
    </div>
  )
}
