import React, { useState } from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'; 

function ScrollToTop() {
    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
      // console.log(scrolled);

      if (scrolled > 1000){ 
        setVisible(true) 
      }  
      else if (scrolled <= 1000){ 
        setVisible(false) 
      } 
    }; 

    const scrollToTop = () =>{
        console.log(".........");
        // window.scrollTo(0,window.screenY+600)
        window.scrollTo({
          top:0,
        // top: document.documentElement.scrollHeight,
        behavior: 'smooth',
        });
      }; 
      window.addEventListener('scroll', toggleVisible);

  return (
    
    <button onClick={scrollToTop}  className={`${visible? 'inline': 'hidden'} fixed w-[60px] 
    h-[60px] rounded-[50%] align-middle items-center flex justify-center right-[10%] bottom-[10%] text-[30px] z-100 hover:h-16 cursor-pointer text-[#3222C6]
    ${window.innerWidth <= 1660?'right-[10%]':''} md:right-[6%] lg:right-[23%]`}>
        <FaArrowCircleUp />
    </button>
  )
}

export default   ScrollToTop