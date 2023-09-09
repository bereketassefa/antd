import { faFile, faImage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import profilePlaceHolder from '../../../assets/logo/profilePlaceHolder.png'
import Avatar from '../../../Fields/Avatar/avatar'
import NewsPostPopup from './newsPostPopup'
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import axios from 'axios'
import { useCookies } from 'react-cookie'
export default function NewsPost() {
  const [isPosting , setIsPosting ] = useState(false)
  const [profilePic, setProfilePic]= useState(null) 
  const [cookies] = useCookies(['user']) 
  const onModalOpen = ()=>{
    setIsPosting(true)
  }
  const onModalClose = ()=>{
    setIsPosting(false)
  }
  useEffect(() => {
    const fetchAccountDataForProfile = async () => {
        try {
            const url = `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${cookies?.user._id}`
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
  return (
     <>
        <div className='rounded-lg dark:bg-[#1b1f23] w-full bg-cards p-4 flex flex-col gap-4 max-w-[550px]  drop-shadow-xl  '>
            <div className=' flex items-center gap-2'  >
                <Avatar  img={profilePic? profilePic : alternativeProfile} />
                <input 
                    type="text" placeholder='Write somthing here ...'  
                    className='dark:bg-[#1b1f23] dark:text-white text-smallP md:text-midP lg:text-largeP w-full outline-none '
                    onClick={onModalOpen}
                    />
            </div>
            <div className=' w-full'>
                <ul className='w-full flex items-center justify-between'>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-secondary text-smallT' icon={faImage} /> <p className='dark:text-white text-smallP md:text-midP lg:text-largeP'>Image</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-secondary text-smallT' icon={faVideo}/> <p className='dark:text-white text-smallP md:text-midP lg:text-largeP'>Video</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-secondary text-smallT' icon={faFile}  /> <p className='dark:text-white text-smallP md:text-midP lg:text-largeP'>Document</p>
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
