import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MsgTitle({icon,iconStyle,Title}) {
  return (
    <>
     <h2
      className='flex flex-row  p-4 space-x-3 items-center'
     >
       <FontAwesomeIcon icon={icon} className={iconStyle} />
       <span className='text-xl font-Nunito font-semibold text-black'>{Title}</span></h2>
    </>
  )
}
