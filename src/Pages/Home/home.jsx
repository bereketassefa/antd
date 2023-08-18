import React from 'react'
import Feed from '../../Components/Home/Feed/feed'
import CardHolder from '../../Components/Home/CardHolder/cardHolder'

export default function Home() {
  return (
    <div className='w-full md:flex items-start justify-center'>
        {/* feeder  // alwasy visible to see */}
        <Feed />
        
        {/* other components // is hidden in small devices */}
        <CardHolder />
    </div>
  )
}
