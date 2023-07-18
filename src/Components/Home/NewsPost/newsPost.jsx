import { faFile, faImage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import profilePlaceHolder from '../../../assets/logo/profilePlaceHolder.png'
import Avatar from '../../../Fields/Avatar/avatar'
import NewsPostPopup from './newsPostPopup'

export default function NewsPost() {
  const [isPosting , setIsPosting ] = useState(false)
  const onModalOpen = ()=>{
    setIsPosting(true)
  }
  const onModalClose = ()=>{
    setIsPosting(false)
  }

  return (
     <>
        <div className='w-full bg-cards p-4 flex flex-col gap-4 max-w-[550px]  drop-shadow-xl  '>
            <div className='flex items-center gap-2'  >
                <Avatar  img={profilePlaceHolder} />
                <input 
                    type="text" placeholder='Write somthing here ...'  
                    className='text-smallP md:text-midP lg:text-largeP w-full outline-none '
                    onClick={onModalOpen}
                    />
            </div>
            <div className='w-full'>
                <ul className='w-full flex items-center justify-between'>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-secondary text-smallT' icon={faImage} /> <p className='text-smallP md:text-midP lg:text-largeP'>Image</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-secondary text-smallT' icon={faVideo}/> <p className='text-smallP md:text-midP lg:text-largeP'>Video</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-secondary text-smallT' icon={faFile}  /> <p className='text-smallP md:text-midP lg:text-largeP'>Document</p>
                    </li>
                </ul>
            </div>
        </div>
        <NewsPostPopup 
            isOpen={isPosting}
            handleClose={onModalClose}
        />
     </>
  )
}
