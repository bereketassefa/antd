import React, { useEffect, useRef, useState } from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import profilePlaceHolder from '../../../../assets/logo/newCompanyPlaceHolder.png';
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import { useCookies } from 'react-cookie'
import axios from 'axios'

export default function CommentCard({account_id,id,img,companyName, time , comment , likes , replays}) {
   
    const [cookies] =useCookies(['user'])
    const [showReplys , setShowReplays] = useState(false)
    const [profilePic, setProfilePic]= useState(null) 
    const [showDeleteOption, setShowDeleteOption] = useState(false);
    const navigate= useNavigate()
    const deleteCardRef = useRef(null);
    const onShowReplay = ()=>{
         setShowReplays(!showReplys)
    }
    const toggleDeleteOption = (event) => {
        event.stopPropagation();// Log this
        setShowDeleteOption(!showDeleteOption);
      };
      
      
    const hadleNavigateProfile = async(e)=>{
        e.preventDefault();
        // navigate(`/feed/profile/${_id}`)
    
        try {
            
            navigate(`/feed/profile/${id}`)
             
            // console.log(cookies.user._id)
            // window.location.href = `/feed/profile/${Uid}`;
             
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchAccountDataForProfile = async () => {
            try {
                const url= `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${id}`
                // const url= `http://localhost:8010/account/${cookies?.user._id}`;
                await axios.get(url)
                .then((res)=>{
                    // console.log(res)
                    if(res?.data){
                        setProfilePic(res?.data[0]?.profilePicture);
                       
                    }
                   
                })
                .catch((error)=>{
                    // message.error('Cant find user account')
                })
                
            } catch (error) {
                console.error("Error fetching profile picture:", error);
            }
        };
    
        fetchAccountDataForProfile();
       
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
          if (deleteCardRef.current && !deleteCardRef.current.contains(event.target)) {
            setShowDeleteOption(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
      const handleDeleteComment = (event) => {
        event.stopPropagation();
        console.log("Delete comment clicked");
        setShowDeleteOption(false);
      };
      useEffect(() => {
        // console.log("Comment ID:", id);
        // console.log("User ID from cookies:", cookies.user._id);
      }, []);
    
      // console.log('deleteCardRef.current:', deleteCardRef.current);
      // console.log('showDeleteOption:', showDeleteOption);

      return (
        <>
          <div className=' w-full flex gap-2'>
            <div className='flex'>
              <Avatar 
                onClick={hadleNavigateProfile}
                img={profilePic ? profilePic : alternativeProfile}
              />
            </div>
            <div className='dark:bg-[#1b1f23] dark:border bg-lightBg flex flex-col w-full p-4 gap-3'>
              <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col'>
                  <h1 onClick={hadleNavigateProfile} className='dark:text-white text-smallP md:text-midP lg:text-largeP font-bold'>{companyName}</h1>
                  <span className='dark:text-white text-smallP md:text-midP text-gray-500'>{time}</span>
                </div>
                {/* {console.log("Checking conditions: ", account_id, id, cookies.user._id)} */}
                {(account_id === cookies.user._id || id === cookies.user._id) && (
            <div ref={deleteCardRef}>
               <button onClick={handleDeleteComment}>
                    Delete Comment
                  </button>
              <FontAwesomeIcon icon={faEllipsisVertical} onClick={toggleDeleteOption} />
              {showDeleteOption && (
                <div className="absolute top-0 right-0 mt-4 mr-4 bg-white p-2 rounded shadow-lg z-10">
                 
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div>
                <p className='dark:text-white text-smallP md:text-midP lg:text-largeP'>
                  {comment}
                </p>
              </div>
              <div className=' flex w-full items-center justify-start gap-4'>
                <p className='dark:text-white text-smallP md:text-midP lg:text-largeP text-secondary cursor-pointer'>Likes <span>{likes === 0 ? '' : likes}</span></p>
                <p className='dark:text-white text-smallP md:text-midP lg:text-largeP cursor-pointer flex gap-1' onClick={onShowReplay}>
                  Replay
                  <span>{replays?.length}</span>
                </p>
              </div>
            </div>
          </div>
          <div className={showReplys ? 'flex flex-col gap-2 ml-[45px]' : 'hidden'}>
            {replays?.map((item) => (
              <CommentCard
                key={item?.id || item?._id}
                img={item?.img}
                companyName={item?.companyName}
                time={item?.time}
                comment={item?.comment}
                likes={item?.likes}
                replays={item?.repays}
              />
            ))}
          </div>
        </>
      );
      
}
