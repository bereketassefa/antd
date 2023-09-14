
import Feed from '../../Components/Home/Feed/feed'
import CardHolder from '../../Components/Home/CardHolder/cardHolder'
import { ErrorContext } from '../../Components/Error/ErrorContext';
import React, { useEffect,useContext, useState } from 'react'
export default function Home() {
  const { error, showError, hideError } = useContext(ErrorContext);
  return (
    
    <div className=' flex items-start mt-4 '>
        {/* feeder  // alwasy visible to see */}
       
        <Feed />
        
        {/* other components // is hidden in small devices */}
        <CardHolder />
    </div>
  )
}
