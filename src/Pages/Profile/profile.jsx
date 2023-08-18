import React from 'react'
import ProfileFeature from '../../Components/Profile/ProfileFeature/profileFeature'
import ProfileProgress from '../../Components/Profile/ProfileProgress/profileProgress'
import BasicInfo from '../../Components/Profile/BasicInfo/basicInfo'
import Details from '../../Components/Profile/Details/details'

export default function Profile() {
  return (
    <div className='w-full flex flex-col gap-2 mt-2'>
        <div className='w-full flex flex-col gap-2' >
             {/* profile feature display */}
             <ProfileFeature />
             {/* profile completeness view  */}
             <ProfileProgress />
        </div>


        <div className='flex gap-2 flex-col md:flex-row'>
             {/* basic profile info */}
             <div className='w-full md:w-[35%]'>
                <BasicInfo />
             </div>
        {/* pages */}
            {/* about , post demandproducts relations bids */}
            <div className='w-full md:w-[65%]'>
                <Details />
            </div>
        </div>
    </div>
  )
}
