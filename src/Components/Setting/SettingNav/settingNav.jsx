import { faArrowLeft, faContactBook, faGear, faGears, faHome, faQuestionCircle, faShield, faSnowflake, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SettingNav() {
    return (
        <div className='flex flex-col p-4 gap-4'>
            <div className='w-full items-center justify-start'>
                <FontAwesomeIcon icon={faArrowLeft} className='text-smallT' />
            </div>
            <div className='w-full'>
                <ul className='w-full flex flex-col'>
                    <Link to={'/settings/general'}>
                        <li className='w-full flex items-center gap-2 p-2'>
                            <FontAwesomeIcon className='text-midT' icon={faSnowflake} /> <p className='text-largeP'>General</p>
                        </li>
                    </Link>
                    <li className='w-full flex items-center gap-2 p-2'>
                        <FontAwesomeIcon className='text-midT' icon={faUser} /> <p className='text-largeP'>Edit Profile</p>
                    </li>
                    <li className='w-full flex items-center gap-2 p-2'>
                        <FontAwesomeIcon className='text-midT' icon={faQuestionCircle} /> <p className='text-largeP'>Help</p>
                    </li>
                    <li className='w-full flex items-center gap-2 p-2'>
                        <FontAwesomeIcon className='text-midT' icon={faContactBook} /> <p className='text-largeP'>Contact</p>
                    </li>
                    <li className='w-full flex items-center gap-2 p-2'>
                        <FontAwesomeIcon className='text-midT' icon={faGears} /> <p className='text-largeP'>Services</p>
                    </li>
                    <li className='w-full flex items-center gap-2 p-2'>
                        <FontAwesomeIcon className='text-midT' icon={faShield} /> <p className='text-largeP'>Privacy Policy</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

