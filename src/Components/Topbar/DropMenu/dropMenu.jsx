import React from 'react'
import profilePlaceHolder from '../../../assets/logo/profilePlaceHolder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faClapperboard, faCloud, faDashboard, faDollarSign, faGear, faHome, faMessage, faObjectGroup, faQ, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Divider } from 'antd'
import { Link } from 'react-router-dom'
import Avatar from '../../../Fields/Avatar/avatar'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
export default function DropMenu({isOpen,onClose,image,name}) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const handleSignOut = () => {
        removeCookie('user');  // Remove the user cookie
        window.location.href = '/';  // Redirect to Home Page
      };
      


    function truncateCompanyName(name) {
        return name && name.length > 8 ? name.substring(0, 8) + '...' : name;
      }
    
    const hadleNavigateProfile = async(e)=>{
        e.preventDefault();
        try {
            const url =`${import.meta.env.VITE_FIND_MY_DATA}/${cookies.user._id}`
            const response = await axios.get(url);
            //  console.log(response?.data)
            //   setProfilePic(response?.data?.account[0]?.profilePicture)
    
            // console.log(cookies.user._id)
            window.location.href = `/feed/profile/${cookies.user._id}`;
            
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div className={isOpen ? 'z-20 w-screen h-[calc(100vh-65px)] bg-gray-50 p-4 fixed mt-[65px] md:hidden flex flex-col gap-2 z-3 overflow-y-scroll ' : 'w-screen h-[calc(100vh-65px)] bg-gray-50 p-4  absolute mt-[65px] md:hidden flex flex-col gap-2 hidden md:hidden'}>
        <Link to={'/profile'} onClick={onClose} >
            <div className='w-full flex items-center gap-2'>
                <Avatar onClick={hadleNavigateProfile} img={image?image : alternativeProfile} />
                <h1 onClick={hadleNavigateProfile} className='text-smallP md:text-midP lg:text-largeP' >{truncateCompanyName(cookies?.user?.party)}</h1>
            </div>
        </Link>       
        <div className='w-full'>
            <div className='w-full'>
                <ul className='w-full flex flex-col'>
                     <Link to={'/feed'} onClick={onClose}>
                        <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                            <FontAwesomeIcon 
                                className='text-smallT text-gray-600'
                                icon={faHome} /> <p>Home</p>
                        </li>
                     </Link>
                     {/* <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <FontAwesomeIcon 
                            className='text-smallT text-gray-600'
                            icon={faDashboard} /> <p>Dashboard</p>
                     </li>
                     <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <FontAwesomeIcon 
                            className='text-smallT text-gray-600'
                            icon={faCloud} /> <p>Services</p>
                     </li>
                     <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <FontAwesomeIcon 
                            className='text-smallT text-gray-600'
                            icon={faDollarSign} /> <p>Invoice Finance</p>
                     </li> */}
                </ul>
            </div>
            <Divider className='bg-gray-300'  />
            <div className='w-full'>
                <ul className='w-full flex flex-col'>
                    <Link to={'/feed/Relations'} onClick={onClose}>
                     <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <FontAwesomeIcon 
                            className='text-smallT text-gray-600'
                            icon={faBell} /> <p>Relation</p>
                     </li>
                     </Link>
                     <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <FontAwesomeIcon 
                            className='text-smallT text-gray-600'
                            icon={faMessage} /> <p>Add Product</p>
                     </li>
                     {/* <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <FontAwesomeIcon 
                            className='text-smallT text-gray-600'
                            icon={faClapperboard} /> <p>Live</p>
                     </li> */}
                     <Link to={'/feed/settings'} onClick={onClose}  >
                        <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                            <FontAwesomeIcon 
                                className='text-smallT text-gray-600'
                                icon={faGear} /> <p>Setting</p>
                        </li>
                     </Link>
                </ul>    
            </div>
            <Divider className='bg-gray-300'  />
            <div>
                <ul className='w-full flex flex-col'>
                    <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <p>Relations Requests</p>
                    </li>
                    <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <p>Recommended Relations</p>
                    </li>
                    <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                        <p>Relations</p>
                    </li>                   
                </ul>  
            </div>
            <Divider className='bg-gray-300'  />
            <div>
                <ul className='w-full flex flex-col'>
                    <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                    <FontAwesomeIcon 
                            className='text-smallT text-gray-600'
                            icon={faQuestionCircle} />  <p>Help and Support</p>
                    </li>
                                     
                </ul>  
            </div>
            <Divider className='bg-gray-300'  />
        </div>
        <div>
            <ul className='w-full flex flex-col'>
                <li className='w-full flex p-2 items-center gap-2  text-smallP md:text-midP lg:text-largeP'>
                <FontAwesomeIcon 
                onClick={handleSignOut}
                        className='text-smallT text-red-500 '
                        icon={faArrowRightFromBracket} />  <p   onClick={handleSignOut}>Sign Out</p>
                </li>                                    
            </ul> 
        </div>
        <div className='flex w-full items-center justify-center flex-col gap-1 p-2 py-8 '>
            <p>Copyright @ 2023</p>
            <span>addissystems</span>
        </div>
    </div>
  )
}
