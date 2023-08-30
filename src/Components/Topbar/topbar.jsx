import React, { useEffect,useContext, useState } from 'react'
import logos from '../../assets/logo/addisLogoS.png'
import logo from '../../assets/logo/addisLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faBars, faCaretDown, faSearch, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons'
import profilePlaceHolder from '../../assets/logo/profilePlaceHolder.png'
import alternativeProfile from "../../assets/image/alternativeProfile.png";
import DropMenu from './DropMenu/dropMenu'
import { useMediaQuery } from 'react-responsive';
import Avatar from '../../Fields/Avatar/avatar'
import {Link, useNavigate} from 'react-router-dom'
import { Badge, message } from 'antd'   
import SearchField from './SearchField'
import { useCookies } from 'react-cookie'
import axios from "axios";
import { ErrorContext } from '../Error/ErrorContext';
import { Search } from '../../data'
import SearchRoute from '../../Layouts/Search/SearchRoute'
import SearchProduct from './SearchAllCompo/SearchProduct'
import SearchCard from "./SearchAllCompo/SearchCard";

export default function Topbar() {
    function truncateCompanyName(name) {
        return name && name.length > 8 ? name.substring(0, 8) + '...' : name;
      }
  const [profilePic, setProfilePic]= useState(null)    
  const [dropDown , setDropDown] = useState(false)
  const [searchResults, setSearchResults] = useState([]); 
  const [menuOpen ,setMenuOpen ]= useState(false)
  const [notificationCount , setNotificationsCount]= useState()
  const [searchInput, setSearchInput] = useState("");
  const isScreenMdOrLarger = useMediaQuery({ minWidth: 768 });
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const navigate = useNavigate()
  const { error, showError, hideError } = useContext(ErrorContext);
  const handleHover = ()=>{
     setDropDown(!dropDown)
  }
  const handleMenu = ()=>{
    setMenuOpen(!menuOpen)
  }
  const closeMenu = ()=>{
    setMenuOpen(false)
  }
 
const handleLogOut=()=>{
    removeCookie(['user'])
    window.location.reload(true)


}
const handleSearch = async () => {
  if (searchInput.trim() === "") {
    setSearchResults([]);
    return;
  }
  try {
    const response = await axios.post('https://search.addispay.et/partially', {
      query: searchInput
    });
    if (response.data.length > 0) {
      const formattedResults = response.data.map(item => {
        let result = { type: item.type };
        if (item.type === "business") {
          result.name = item.businessName;
          result.profilePicture = item.profilePicture; // Add profile picture
        } else if (item.type === "product") {
          result.name = item.productName;
          result.imageUrl = item.imageUrl; // Add image URL for product
        }
        return result;
      });
  
      setSearchResults(formattedResults);
    }
  } catch (error) {
    console.error('Error performing search', error);
  }
};


useEffect(() => {
  handleSearch();
}, [searchInput]);
useEffect(() => {
    const fetchAccountDataForProfile = async () => {
        try {
            // const url= `http://localhost:8010/account/${cookies?.user._id}`;
            await axios.get(`https://account.addispay.et/account/${cookies?.user._id}`)
            .then((res)=>{
                // console.log(res)
                if(res?.data){
                    setProfilePic(res?.data[0]?.profilePicture);
                    // console.log(res?.data[0]?.profilePicture)
                }
                // message.error('Cant find the image url')
            })
            .catch((error)=>{
                // message.error('Cant find user account')
            })
            // let response = await fetch(url);
            // let data = await response.json();
            // console.log("Data received from server: ", data);  // Debugging line
            // console.log("Profile Picture URL from server:", data?.[0].profilePicture);
            // setProfilePic(data?.[0].profilePicture);
        } catch (error) {
            console.error("Error fetching profile picture:", error);
        }
    };

    fetchAccountDataForProfile();
   
}, []);





// console.log("Current Profile Picture URL:", profilePic);
// console.log(profilePic)
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

useEffect(() => {
    const fetchNotifications = async () => {
        try {
            const url= `${import.meta.env.VITE_UNSEEN_NOTIFICATION}/${cookies?.user._id}`
            let response = await fetch(url);
            let data = await response.json();
            // console.log(data);
            setNotificationsCount(data);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };

    // fetchNotifications();
    const Interval= setInterval(() => {
        fetchNotifications()
    },1000)
    
}, []);


  return (
    <>
   
     <div className=' z-20 w-full drop-shadow-lg h-topbarH bg-topbarBg border-1 border-[rgba(0, 0, 0, 0.10)] p-3 flex items-center justify-center fixed md:sticky '>
        <div className='flex  w-full md:max-w-[1120px] items-center justify-between'>
            <div className='w-[50px] h-[45px] md:w-[208px] md:h-[33px]   flex items-center justify-center'>
                {
                    isScreenMdOrLarger?
                    <Link to={'/feed'}> <img src={logo} alt="" className='w-full' /></Link>
                    : 
                    <Link to={'/feed'}><img src={logos} alt="" className='w-full' /></Link>
                }
            </div>

            <div className="flex gap-[1rem] items-center ">
            <div className="flex gap-[1rem] items-center">
              {/* search bar */}
              <div className=" relative">
                <div className=" flex gap-2 border-[2px] border-blue-800 py-[10px] px-4 items-center min-w-[450px] ">
                  <div>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xl text-gray-500 "
                    />
                  </div>
                  <input
                    className="outline-none text-[17px] w-1/4"
                    type="text"
                    value={searchInput}
                    placeholder="Search"
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                  />
                </div>
                {searchInput && (
          <div className="absolute bg-white w-full p-1 border-[2px] border-blue-800 translate-y-[1px]">
            <div className="flex flex-col">
            {
  searchResults.map((result, index) => (
    <SearchCard 
      key={index} 
      name={result.name} 
      type={result.type}  // This will be either "business" or "product"
      image={result.type === 'business' ? result.profilePicture : result.imageUrl}  // Pass the appropriate image based on the type
    />
  ))
}

                    </div> 
                    <hr className="border-[1px] border-blue-800" />
                    <Link
                      to="/feed/SearchNav/All"
                      onClick={() => setSearchInput("")}
                    >
                      {/* <p className="flex justify-center text-primary ">
                        See All results
                      </p> */}
                    </Link>
                  </div>
                )}
              </div>

                    {/* <SearchRoute  /> */}
                    {/* message  */}
                    <Link to={'/feed/notifications'} >
                        <Badge count={notificationCount}>
                            <FontAwesomeIcon icon={faBell}  className='text-largeT'/>
                        </Badge>
                    </Link>
                    {/* notification */}
                    <FontAwesomeIcon icon={faMessage}  className='text-largeT'/>
                    
                </div>
                <FontAwesomeIcon icon={!menuOpen ?  faBars : faSquareXmark}   
                                    className={!menuOpen ? 'text-smallT text-primary md:hidden cursor-pointer ': 'text-smallT text-secondary md:hidden cursor-pointer '} 
                                    onClick={handleMenu} />
                <div className='hidden md:flex items-center jutify-center flex-col '
                    onClick={handleHover}
                    // onMouseLeave={handleLeaveHover}
                >
                    <div className='flex items-center gap-2'>
                    <Avatar img={profilePic? profilePic : alternativeProfile }alt='image' />

                        <div className='flex items-center gap-2'>
                            <h1 className=' text-smallP md:text-midP lg:text-largeP'>{truncateCompanyName(cookies?.user.party)}</h1>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </div>
                        <div className={dropDown? 'absolute mt-[65px] w-[208px] drop-shadow-lg bg-topbarBg transition ease-in-out delay-150' : 'h-[0px] overflow-hidden absolute mt-[65px] w-[208px] drop-shadow-lg bg-topbarBg transition ease-in-out delay-150'  }>
                        <ul className='flex flex-col w-full h-full items-center justify-center'>
                            <Link onClick={hadleNavigateProfile} className='w-full'  >
                                <li className='w-full p-3 items-center justify-start hover:bg-lightPrimaryHover'>
                                    <p className='text-smallP md:text-midP lg:text-largeP'> View Profile</p>
                                </li>
                            </Link>
                            
                            <li  className='w-full p-3 items-center justify-start  hover:bg-lightPrimaryHover' onClick={handleLogOut}  >
                                <p className=' text-smallP md:text-midP lg:text-largeP'>Sign Out</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        


       
       
    </div>
    <DropMenu image={profilePic}   isOpen={menuOpen} onClose={closeMenu}   />
   
    </>
  );
}
