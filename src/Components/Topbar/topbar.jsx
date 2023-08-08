import React, { useEffect, useState } from 'react'
import logos from '../../assets/logo/addisLogoS.png'
import logo from '../../assets/logo/addisLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faBars, faCaretDown, faSearch, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons'
import profilePlaceHolder from '../../assets/logo/profilePlaceHolder.png'
import DropMenu from './DropMenu/dropMenu'
import { useMediaQuery } from 'react-responsive';
import Avatar from '../../Fields/Avatar/avatar'
import Search from '../../Fields/Search/search'
import {Link} from 'react-router-dom'
import { Badge } from 'antd'
import SearchField from './SearchField'

export default function Topbar() {
  const [dropDown , setDropDown] = useState(false)
  const [menuOpen ,setMenuOpen ]= useState(false)
  const isScreenMdOrLarger = useMediaQuery({ minWidth: 768 });

  const handleHover = ()=>{
     setDropDown(!dropDown)
  }
  const handleMenu = ()=>{
    setMenuOpen(!menuOpen)
  }
  const closeMenu = ()=>{
    setMenuOpen(false)
  }
 


  return (
    
    <>
     <div className=' z-20 w-full drop-shadow-lg h-topbarH bg-topbarBg border-1 border-[rgba(0, 0, 0, 0.10)] p-3 flex items-center justify-center fixed md:sticky '>
        <div className='flex  w-full md:max-w-[1120px] items-center justify-between'>
            <div className='w-[50px] h-[45px] md:w-[208px] md:h-[33px]   flex items-center justify-center'>
                {
                    isScreenMdOrLarger?
                    <Link to={'/'}> <img src={logo} alt="" className='w-full' /></Link>
                    : 
                    <Link to={'/'}><img src={logos} alt="" className='w-full' /></Link>
                }
            </div>

            <div className='flex gap-[1rem] items-center '>
                <div className='flex gap-[1rem] items-center'>
                    {/* search bar */}
                   
                    <SearchField />
                    {/* <Search  /> */}
                    {/* message  */}
                    <Link to={'/notifications'} >
                        <Badge count={5}>
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
                        <Avatar img={profilePlaceHolder} />
                        <div className='flex items-center gap-2'>
                            <h1 className=' text-smallP md:text-midP lg:text-largeP'>Company Name</h1>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </div>
                        <div className={dropDown? 'absolute mt-[65px] w-[208px] drop-shadow-lg bg-topbarBg transition ease-in-out delay-150' : 'h-[0px] overflow-hidden absolute mt-[65px] w-[208px] drop-shadow-lg bg-topbarBg transition ease-in-out delay-150'  }>
                        <ul className='flex flex-col w-full h-full items-center justify-center'>
                            <Link to={'/profile'} className='w-full'  >
                                <li className='w-full p-3 items-center justify-start hover:bg-lightPrimaryHover'>
                                    <p className='text-smallP md:text-midP lg:text-largeP'> View Profile</p>
                                </li>
                            </Link>
                            
                            <li  className='w-full p-3 items-center justify-start  hover:bg-lightPrimaryHover'  >
                                <p className=' text-smallP md:text-midP lg:text-largeP'>Sign Out</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        


      
       
    </div>
    <DropMenu  isOpen={menuOpen} onClose={closeMenu}   />
    </>
  )
}
