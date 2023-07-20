import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NotificationCard from '../../Components/Notification/notificationCard'
import comment1 from '../../assets/logo/comment1.png'
import comment2 from '../../assets/logo/comment2.png'


export default function Notification() {
  return (
    <div className='w-full flex flex-col items-start justify-center mt-4 gap-4 p-2' >
         <div className='flex items-cetner justify-between w-full'>
              <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faBell} className='text-largeT'/>
                    <h1 className='text-smallP md:text-midP lg:text-largeP' >Notification</h1>
              </div>
              <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faGear}  className='text-largeT' />
                    <h1 className='hidden md:flex' >Go to notification setting</h1>
              </div>
         </div>
         <div className='w-full flex flex-col gap-2'>
                <NotificationCard 
                    type={'notice'}
                    message={'Your Password has been successfully changed'}                  
                    timeStamp={'6 month ago'}
                    id={12}
                />
                 <NotificationCard 
                    type={'like'}
                    companyName = {'AddisPay'}
                    img={comment1}
                    timeStamp={'6 month ago'}
                    id={13}
                />
                 <NotificationCard 
                    type={'comment'}
                    companyName = {'DAF Tech'}
                    img={comment2}
                    timeStamp={'2 month ago'}
                    id={14}
                />
                  <NotificationCard 
                    type={'request'}
                    companyName = {'BridgeTech'}
                    img={comment1}
                    timeStamp={'4 hrs ago'}
                    id={14}
                />
                 <NotificationCard 
                    type={'notice'}
                    message={'Your Password has been successfully changed'}                  
                    timeStamp={'6 month ago'}
                    id={12}
                />
                 <NotificationCard 
                    type={'like'}
                    companyName = {'AddisPay'}
                    img={comment1}
                    timeStamp={'6 month ago'}
                    id={13}
                />
                 <NotificationCard 
                    type={'notice'}
                    message={'Your Password has been successfully changed'}                  
                    timeStamp={'6 month ago'}
                    id={12}
                />
                 <NotificationCard 
                    type={'like'}
                    companyName = {'AddisPay'}
                    img={comment1}
                    timeStamp={'6 month ago'}
                    id={13}
                />
                  <NotificationCard 
                    type={'notice'}
                    message={'Your Password has been successfully changed'}                  
                    timeStamp={'6 month ago'}
                    id={12}
                />
                 <NotificationCard 
                    type={'like'}
                    companyName = {'AddisPay'}
                    img={comment1}
                    timeStamp={'6 month ago'}
                    id={13}
                />
                 <NotificationCard 
                    type={'comment'}
                    companyName = {'DAF Tech'}
                    img={comment2}
                    timeStamp={'2 month ago'}
                    id={14}
                />
                  <NotificationCard 
                    type={'request'}
                    companyName = {'BridgeTech'}
                    img={comment1}
                    timeStamp={'4 hrs ago'}
                    id={14}
                />
                 <NotificationCard 
                    type={'notice'}
                    message={'Your Password has been successfully changed'}                  
                    timeStamp={'6 month ago'}
                    id={12}
                />
                 <NotificationCard 
                    type={'like'}
                    companyName = {'AddisPay'}
                    img={comment1}
                    timeStamp={'6 month ago'}
                    id={13}
                />
                 <NotificationCard 
                    type={'notice'}
                    message={'Your Password has been successfully changed'}                  
                    timeStamp={'6 month ago'}
                    id={12}
                />
                 <NotificationCard 
                    type={'like'}
                    companyName = {'AddisPay'}
                    img={comment1}
                    timeStamp={'6 month ago'}
                    id={13}
                />
         </div>
    </div>
  )
}
