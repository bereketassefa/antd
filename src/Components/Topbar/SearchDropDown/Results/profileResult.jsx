import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import profileHolder from '../../../../assets/img/profileHolder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'


export default function ProfileResult() {
  return (
    <div className='p-2 w-full flex gap-2 items-center justify-between  cursor-pointer '>
        <div className='flex items-start gap-2'>
            <Avatar img={profileHolder} />
            <h1>Company Name</h1>
        </div>
        <FontAwesomeIcon  icon={faClose} />
    </div>
  )
}
