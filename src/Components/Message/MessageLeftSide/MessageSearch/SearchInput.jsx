import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchInput({placeholder,value, onChange, InputStyle, Icon, IconStyle, disabled }) {
  return (
    <>
    <div className='flex flex-row border border-primary items-center space-x-2 w-full rounded-md  outline-none bg-messageTextColorSender p-3 '>
   <FontAwesomeIcon icon={Icon} className={IconStyle} />
    <input 
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         className={InputStyle}
         disabled={disabled}
        />
    </div>
    </>
  )
}
