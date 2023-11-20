// import React from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { MdNotificationsNone } from "react-icons/md";
// import { BsPersonCircle } from "react-icons/bs";
// import { IoSettingsOutline } from "react-icons/io5";
// import { TbCirclesRelation } from "react-icons/tb";

// const navigations = [
//   { label: "Home", icon: <AiOutlineHome className="mx-auto text-[30px]" /> },
//   {
//     label: "Notifcation",
//     icon: <MdNotificationsNone className="mx-auto text-[30px]" />,
//   },
//   {
//     label: "Relations",
//     icon: <TbCirclesRelation className="mx-auto text-[30px]" />,
//   },
//   {
//     label: "Profile",
//     icon: <BsPersonCircle className="mx-auto text-[30px]" />,
//   },
//   {
//     label: "Setting",
//     icon: <IoSettingsOutline className="mx-auto text-[30px]" />,
//   },
// ];

// function Icon({ label, icon }) {
//   return (
//     <div className="opacity-70 px-2 gap-[4px] w-[90px]  justify-center rounded-md  flex-col">
//       {icon ? icon : <AiOutlineHome className="mx-auto text-[30px]" />}
//       <span className="block mx-auto text-center">{label}</span>
//       {label == "Home" ? (
//         <div className="bg-red-700 h-[8px] mx-auto  rounded-t-md"></div>
//       ) : null}
//     </div>
//   );
// }

// function BottomNav() {
//   return (
//     <div className="bg-white  color-red-700 max-sm:fixed bottom-0 shadow-xl
//      rounded-t-[15px] border-solid border-2 h-[90px]
//       flex justify-between items-center px-6 w-full   ">
//       {navigations.map((nav) => {
//         return <Icon label={nav.label} icon={nav.icon} />;
//       })}
//     </div>
//   );
// }

// export default BottomNav;


import React, { useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdNotificationsNone, MdPostAdd } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCirclesRelation } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import { FaHandshake, FaRegHandshake } from "react-icons/fa6";

import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import NewsPostPopup from "../../Components/Home/NewsPost/newsPostPopup";
import { TiMessage } from "react-icons/ti";


import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const navigations = [
  { 
    id:'1', to:'/feed', label: "Home", icon: <AiOutlineHome className="mx-auto text-[30px]" /> },
  {
    id:'2', to:'/feed/messages', label: "messages",
    icon: <TiMessage  className="mx-auto text-[30px]" />,
  },
  {
    id:'3', to:'/feed', label: "Post",
    icon: <MdAdd className="mx-auto text-[30px]" />,
  },
  {
    id:'4', to:'/feed/Relations/relation', label: "relations",
    icon: <FaHandshake className="mx-auto text-[30px]" />,
  },
  {
    id:'5', to:'/feed/settings/', label: "settings",
    icon: <IoSettingsOutline className="mx-auto text-[30px]" />,
  },
];



function Icon({ label, icon,onClick,i,aI,RouteTo }) {
  // const navigate = useNavigate()
  const {pathname} = useLocation()
  const urls = pathname?.split(' ')[0]?.split('/')[2]?.toLowerCase()  

  if(urls){
  return (
    <Link to={`${i==2? '/feed': RouteTo}`}>
    <div className="opacity-70 px-0 gap-[4px] w-[70px]  justify-center rounded-md mb-6
     flex-col" onClick={onClick}>
      {icon ? icon : <AiOutlineHome className="mx-auto text-[20px]" />}
      <span className="block mx-auto text-center text-xsm">{label}</span>
      {label == urls.toLocaleLowerCase()? ( 
        <div className="bg-red-700 h-[8px] w-[50px] mx-auto  rounded-t-md "></div>
        ) : null}
    </div>
      </Link>
  );

}else{
  // setUrls('feed')
  return (
    <Link to={`${RouteTo}`}>
    <div className="opacity-70 px-0 mx-auto mb-6 gap-[4px] w-[70px]  justify-center rounded-md 
     flex-col" onClick={onClick}>
      {icon ? icon : <AiOutlineHome className="mx-auto text-[20px]" />}
      <span className="block mx-auto text-center text-xsm">{label}</span>
      {label == 'Home' ?( 
        <div className="bg-red-700 h-[8px] mx-auto w-[40px] rounded-t-md "></div>
        ) : null}
    </div>
      </Link>
  );

}
}






function BottomNav() {
  // State to track scroll direction
  const [scrollDirection, setscrollDirection] = useState('up')
  const [activeIcon, setActiveIcon] = useState(0)

  const [scrollPosition, setscrollPosition] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  const [isPosting, setIsPosting] = useState(false);
  
const urlRef = useRef('')


const url='';

const handleScroll = () => {
    const currentScrollPos = Math.max(window.scrollY)
    setscrollPosition(currentScrollPos)
    // console.log(currentScrollPos,"in handle");
    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
}

const onModalOpen = () => {
  // console.log("modal opended....");
  console.log(isPosting ,"in");
  // if(isPosting){
    // console.log(isPosting );
    // if(isPosting){
      // setIsPosting(false)
    // }else{
      setIsPosting(true)
    // }
  // }
  // setIsPosting(true);
  // setActiveIcon(2)
};
const onModalClose = () => {
  console.log("cosin........");
  setIsPosting(false);
};

useEffect( () => {
  // console.log("in eec");
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
})
// 
// console.log(visible,"na a");

const handleButtonClick = (id)=>{

  // console.log("button",id,"clicked");
  // onModalClose()
  // setIsPosting(!isPosting)
  setActiveIcon(id)

  if(id==0){
    // console.log("scoll up",id);
    handleScroll()
    window.scrollTo(0,0);
    // setScrollPosition(0)
    // document.body.scrollTop = 0;

  }

}

// console.log(setScrollPosition,".....");
  return (
    <>

    <nav className={`fixed  bottom-0 w-[96%] bg-white py-4 
    transition-transform duration-300 transform  ${visible?'translate-y-full':'hidden' 
    } mb-[2px] mx-auto sm:hidden  `}>

    <div className="bg-white  color-red-700 fixed  w-full bottom-2 shadow-xl
     rounded-t-[10px] border-solid border-2 h-[90px]  flex 
     justify-around items-center px-6 mx-auto ">
      {navigations.map((nav,i) => {
    
        
        return <Icon
        aI={activeIcon} 
        key={i} 
        i={i}
        label={nav.label} 
        icon={nav.icon}
        RouteTo ={nav.to}
        onClick={i==2?()=>onModalOpen():()=>handleButtonClick(i)}
        />;
      })}
    </div>
  </nav>
  <NewsPostPopup isOpen={isPosting} handleClose={onModalClose} />
  </>
  );
}

export default BottomNav; 
