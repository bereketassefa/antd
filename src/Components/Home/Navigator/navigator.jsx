import { faBell, faBoxes, faClapperboard, faCloud, faDashboard, faDollarSign, faGear, faHome, faMessage, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigator() {
  
  return (
    <div className='hidden md:flex items-start justify-center mt-4 w-[300px] mx-w-[300px] p-4 bg-white sticky top-[65px] drop-shadow-xl '>
        <div className='w-full'>
            <div className='w-full'>
                <ul className='w-full flex flex-col gap-3'>
                     <Link to={'/'}>
                        <li className='cursor-pointer w-full flex items-center gap-2'>
                            <FontAwesomeIcon 
                                className='text-largeP md:text-smallT text-gray-600'
                                icon={faHome} /> <p className='text-smallP md:text-midP lg:text-largeP '>Home</p>
                        </li>
                     </Link>
                     <li className='cursor-pointer w-full flex items-center gap-2'>
                        <FontAwesomeIcon 
                            className='text-largeP md:text-smallT text-gray-600'
                            icon={faDashboard} /> <p className='text-smallP md:text-midP lg:text-largeP '>Dashboard</p>
                     </li>
                     <li className='cursor-pointer w-full flex items-center gap-2'>
                        <FontAwesomeIcon 
                            className='text-largeP md:text-smallT text-gray-600'
                            icon={faCloud} /> <p className='text-smallP md:text-midP lg:text-largeP '>Services</p>
                     </li>
                     <li className='cursor-pointer w-full flex items-center gap-2'>
                        <FontAwesomeIcon 
                            className='text-largeP md:text-smallT text-gray-600'
                            icon={faDollarSign} /> <p className='text-smallP md:text-midP lg:text-largeP '>Invoice Finance</p>
                     </li>
                     <Divider className='bg-gray-300'  />

                     <li className='cursor-pointer w-full flex items-center gap-2'>
                        <FontAwesomeIcon 
                            className='text-largeP md:text-smallT text-gray-600'
                            icon={faBell} /> <p className='text-smallP md:text-midP lg:text-largeP '>Relation</p>
                     </li>
                     <li className='cursor-pointer w-full flex items-center gap-2'>
                        <FontAwesomeIcon 
                            className='text-largeP md:text-smallT text-gray-600'
                            icon={faMessage} /> <p className='text-smallP md:text-midP lg:text-largeP '>Explore Product</p>
                     </li>
                     <li className='cursor-pointer w-full flex items-center gap-2'>
                        <FontAwesomeIcon 
                            className='text-largeP md:text-smallT text-gray-600'
                            icon={faClapperboard} /> <p className='text-smallP md:text-midP lg:text-largeP '>Live</p>
                     </li>
                     <li className='cursor-pointer w-full flex items-center gap-2 hidden md:flex lg:hidden'>
                        <FontAwesomeIcon 
                            className='text-largeP md:text-smallT text-gray-600'
                            icon={faBoxes} /> <p className='text-smallP md:text-midP lg:text-largeP '>Demand Products</p>
                     </li>
                     <Link to={'/settings'}>
                        <li className='cursor-pointer w-full flex items-center gap-2'>
                            <FontAwesomeIcon 
                                className='text-largeP md:text-smallT text-gray-600'
                                icon={faGear} /> <p className='text-smallP md:text-midP lg:text-largeP '>Setting</p>
                        </li>
                     </Link>
                   
                     <Divider className='bg-gray-300'  />
                     <li className='cursor-pointer w-full flex items-center gap-2'>
                        <FontAwesomeIcon 
                                className='text-largeP md:text-smallT text-gray-600'
                                icon={faQuestionCircle} />  <p className='text-smallP md:text-midP lg:text-largeP '>Help and Support</p>
                    </li>
                </ul>
            </div>         
        </div>
    </div>
  )
}
