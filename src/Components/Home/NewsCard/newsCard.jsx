import { faEllipsisVertical, faMessage, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import newCompanyPlaceHolder from '../../../assets/logo/newCompanyPlaceHolder.png'
import verified from '../../../assets/logo/verified.png'
import { Carousel } from 'antd';
import newCardImg1 from '../../../assets/img/newCardImg1.png'
import newCardImg2 from '../../../assets/img/newCardImg2.png'
import newCardImg3 from '../../../assets/img/newCardImg3.png'
import newCardImg4 from '../../../assets/img/newCardImg4.png'
import newCardImg5 from '../../../assets/img/newCardImg5.png'
import CommentContainer from './Comments/commentContainer'
import Avatar from '../../../Fields/Avatar/avatar'

export default function NewsCard({companyName, timestamp, newContent, images}) {
  const [showComments , setShowComments ] = useState(false)

  const onCommentShow = ()=>{
    console.log('hi')
     setShowComments(!showComments)
  }
  return (
     <>
        <div className='w-full bg-cards  drop-shadow-xl '>
            <div className='flex items-center justify-between p-4'  >
                <div className='flex items-center gap-2 ' >
                    <Avatar img={newCompanyPlaceHolder} />
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold flex items-center gap-2 text-smallP md:text-midP lg:text-largeP  '>Company Name  <img src={verified} alt="" />  </h1>
                        <span className='text-smallP md:text-midP text-gray-400' >2 days ago</span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='w-full flex flex-col'>
                <div className='p-4 w-full '>
                    <p className='text-smallP md:text-midP lg:text-largeP'>
                    Lorem ipsum dolor sit amet consectetur. Solliciea 
                    null libero faucibus hendrerit consequat. Consect
                    </p>
                </div>
                <div >
                    <Carousel autoplay className='h-[300px] overflow-hidden ' >
                        <img src={newCardImg2} alt="" className='w-full'/> 
                        <img src={newCardImg3} alt="" className='w-full'/>
                        <img src={newCardImg4} alt="" className='w-full'/>     
                    </Carousel>
                </div>
            </div>

            <div className='w-full cursor-pointer'>
                <ul className='flex items-center w-full gap-8 p-4 '>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-largeP md:text-smallT text-secondary' icon={faThumbsUp} /> <p className='text-smallP md:text-midP lg:text-largeP'>144k</p>
                    </li>
                    <li className='flex items-center gap-2 cursor-pointer'  onClick={onCommentShow} >
                        <FontAwesomeIcon className='text-largeP md:text-smallT text-gray-400' icon={faMessage}  /> <p className='text-smallP md:text-midP lg:text-largeP'>114k</p>
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
        
     </>
  )
}
