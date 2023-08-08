import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ProfileResult from './Results/profileResult'

export default function SearchDropDown({isVisible , onClose}) {
  return (
    <div
        className={`${isVisible ? 'flex': 'hidden'} gap-4 absolute top-[65px] left-0 md:left-auto  md:w-[360px]  w-full h-[400px] bg-white drop-shadow-xl z-30 flex flex-col p-2 `}
    >
       <div  className='w-full h-[45px] md:hidden    border border-1 border-primary flex items-center gap-2 '>
            <FontAwesomeIcon  icon={faSearch}  className='absolute ml-2 text-midT text-gray-400'   />
            <input 
             className='w-full border-none outline-none pl-8' 
             placeholder='Search'
            
            />
            
       </div>

       <div className='w-full flex flex-col gap-2'>
          <p className='text-smallP text-gray-400' >Results</p>

          <div className='w-full flex flex-col' >
              <ProfileResult />
              <ProfileResult />
          </div>
       </div>
    </div>
  )
}
