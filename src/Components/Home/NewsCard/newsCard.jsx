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
import { format, render, cancel, register } from 'timeago.js';
import CommentContainer from './Comments/commentContainer'
import Avatar from '../../../Fields/Avatar/avatar'
import axios from 'axios';
export default function NewsCard({comanyName, timestamp, newContent, image,key,id,like}) {
    // if(like=== '0'){
    //     like =''
    // }
    const [allLikes , setAllLiked] = useState(like)
    const [showComments , setShowComments ] = useState(false)
    const [cookies, setCookie , removeCookie] = useCookies(['user'])
  const [Liked,setLiked]= useState(false)
  const [comments, setCommentsCounts] = useState('');
  const onCommentShow = ()=>{

     setShowComments(!showComments)
  }     
  const handleLike = async () => {
    try {
        const url = `${import.meta.env.VITE_LIKE_DISLIKE_POST}/${cookies?.user.Uid}/${id}`;
        const response = await fetch(url, { method: "POST" });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        console.log(data);

        // Toggle the like state
        setLiked(prevLiked => prevLiked);
        !Liked? setAllLiked(parseInt(allLikes) + 1) : setAllLiked(parseInt(allLikes) - 1)
    } catch (error) {
        console.error(error);
    }
};

const checkIfLiked = async () => {
    try {
        const url = `${import.meta.env.VITE_CHECK_LIKED_UNLIKED}/${cookies?.user.Uid}`;
        const response = await fetch(url, { method: "GET" });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        if (data.likedPosts.length === 0) {
            setLiked(false);
            return;
        }

        const isLiked = data.likedPosts.some(post => post.id === id);
        setLiked(isLiked);
    } catch (error) {
        console.error(error);
    }
};


    // Make an API call to fetch comments for the given post ID
    async function fetchComments() {
        try {
            const response = await axios.post(`http://localhost:8072/count/comment/${id}`);
            setCommentsCounts(response.data); // use response.data instead of response.json()
        } catch (error) {
            console.error('Failed to fetch comments:', error);
        }
    }
    

    fetchComments()

useEffect(() => {
    checkIfLiked();
   
}, [Liked]);
if(comments.postCount=== '0'){
    comments.postCount =''
}
function Avatar({ img, fallbackInitial }) {
    return (
      <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>
        {img ? (
          <img src={img} alt="Profile" className="w-full h-full rounded-full" />
        ) : (
          <span className="text-xl font-bold">{fallbackInitial}</span>
        )}
      </div>
    );
}
  return (
    
        <div className='w-full bg-cards  drop-shadow-xl' key={key} >
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-2'>
                <Avatar 
    img={image} 
    fallbackInitial={comanyName?.charAt(0)}
/>

                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold flex items-center gap-2 text-smallP md:text-midP lg:text-largeP  '>{comanyName}  <img src={verified} alt="" />  </h1>
                        <span className='text-smallP md:text-midP text-gray-400' >
                        {format(timestamp)}
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
                    {/* <Carousel  className='w-full flex items-center justify-center  '  > */}
                                   
                        <img src={image} alt="Image" className='h-[300px] flex object-contain'/> 

                        {/* <img src={image} alt="Image" className='h-[300px] flex object-contain'/>  */}

                    {/* </Carousel> */}
                </div>
            </div>

            <div className='w-full flex z-10'  >
                <ul className='flex items-center w-full gap-8 p-4'>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon onClick={()=>{
                            handleLike()
                            setLiked(!Liked)

                        }} className={Liked?'text-largeP md:text-smallT cursor-pointer text-secondary':'text-largeP  cursor-pointer md:text-smallT text-gray'}  icon={faThumbsUp} /> <p className='text-smallP md:text-midP lg:text-largeP'>{allLikes === '0'? '': allLikes}</p>
                    </li>
                    <li className='flex items-center gap-2 cursor-pointer hovor:bg-red-300' >
                        <FontAwesomeIcon  onClick={onCommentShow} className='text-largeP md:text-smallT text-gray-400' icon={faMessage}  /> <p className='text-smallP md:text-midP lg:text-largeP'>{comments.postCount}</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        {/* <FontAwesomeIcon className='text-largeP md:text-smallT text-gray-400' icon={faShare}/> <p className='text-smallP md:text-midP lg:text-largeP'>{comments.postCount}</p> */}
                    </li>
                </ul>
            </div>

            <CommentContainer 
                id={id}
                isOpen={showComments}
                />
        </div>
        
 
  )
}
