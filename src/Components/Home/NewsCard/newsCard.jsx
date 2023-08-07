import { faEllipsisVertical, faMessage, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import newCompanyPlaceHolder from '../../../assets/logo/newCompanyPlaceHolder.png'
import verified from '../../../assets/logo/verified.png'
import { Carousel } from 'antd';
import  { useEffect, useRef, useState } from "react";
import { useCookies } from 'react-cookie'

import newCardImg2 from '../../../assets/img/newCardImg2.png'
import newCardImg3 from '../../../assets/img/newCardImg3.png'
import newCardImg4 from '../../../assets/img/newCardImg4.png'

import CommentContainer from './Comments/commentContainer'
import Avatar from '../../../Fields/Avatar/avatar'

export default function NewsCard({comanyName, timestamp, newContent, image,key,id}) {
    const [showComments , setShowComments ] = useState(false)
 
  const [Liked,setLiked]= useState(false)
  const onCommentShow = ()=>{

     setShowComments(!showComments)
  }     
  const handleLike = ()=>{
    setLiked(!Liked)
  }
  
  return (
    
        <div className='w-full bg-cards  drop-shadow-xl' key={key} >
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-2'>
                    <Avatar img={newCompanyPlaceHolder} />
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold flex items-center gap-2 text-smallP md:text-midP lg:text-largeP  '>{comanyName}  <img src={verified} alt="" />  </h1>
                        <span className='text-smallP md:text-midP text-gray-400' >
                            {timestamp}
                        </span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='w-full flex flex-col '>
                <div className='p-4 w-full'>
                    <p className='text-smallP md:text-midP lg:text-largeP'>
                    {newContent}
                    </p>
                </div>
                <div className=' overflow-hidden flex z-0 items-center justify-center  w-full ' >
                    <Carousel autoplay className=' flex items-center justify-center  '  >
                                   
                        <img src={image} alt="" className='h-[300px] flex object-contain'/> 

                        <img src={image} alt="" className='h-[300px] flex object-contain'/> 

                    </Carousel>
                </div>
            </div>

            <div className='w-full flex z-10'  >
                <ul className='flex items-center w-full gap-8 p-4'>
                    <li className='flex items-center gap-2'   >
                        <FontAwesomeIcon onClick={handleLike} className={Liked?'text-largeP md:text-smallT cursor-pointer text-secondary':'text-largeP  cursor-pointer md:text-smallT text-gray'}  icon={faThumbsUp} /> <p className='text-smallP md:text-midP lg:text-largeP'>144k</p>
                    </li>
                    <li className='flex items-center gap-2 cursor-pointer hovor:bg-red-300' >
                        <FontAwesomeIcon  onClick={onCommentShow} className='text-largeP md:text-smallT text-gray-400' icon={faMessage}  /> <p className='text-smallP md:text-midP lg:text-largeP'>114k</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-largeP md:text-smallT text-gray-400' icon={faShare}/> <p className='text-smallP md:text-midP lg:text-largeP'>144k</p>
                    </li>
                </ul>
            </div>

            <CommentContainer 
                id={'12'}
                isOpen={showComments}
                />
        </div>
        
 
  )
}
