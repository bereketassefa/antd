import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import NotificationCard from '../../Components/Notification/notificationCard'
import comment1 from '../../assets/logo/comment1.png'
import comment2 from '../../assets/logo/comment2.png'
import { useCookies } from 'react-cookie'
import axios from 'axios'

export default function Notification() {

  const [notifications, setNotifications] = React.useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['User']);


  useEffect(() => {
    const fetchNotifications = async () => {
        try {
            let response = await fetch(`https://account.qa.addissystems.et/Notification/${cookies?.user._id}`);
            let data = await response.json();
            // console.log(data);
            setNotifications(data);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };

    // fetchNotifications();
    const Interval= setInterval(() => {
        fetchNotifications()
    },1000)
    
}, []);
// console.log(notifications)
  return (
    <div className='w-full flex flex-col items-start justify-center mt-4 gap-4 p-2' >
         <div className='flex items-cetner justify-between w-full'>
              <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faBell} className='text-largeT'/>
                    <h1 className='dark:text-white text-smallP md:text-midP lg:text-largeP' >Notification</h1>
              </div>
              <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faGear}  className='text-largeT' />
                    <h1 className='dark:text-white hidden md:flex' >Go to notification setting</h1>
              </div>
         </div>
         <div className='w-full flex flex-col gap-2'>
         {notifications.map((notification,index) => (
        <NotificationCard 
            key={notification.id}
            type={notification.type}
            message={notification?.message}
            timeStamp={notification.timestamp}
            id={notification._id}
            seen={notification.seen}
            companyName={notification?.companyName}
            image={notification?.image}
         
        />


       
    ))}
         </div>
    </div>
  )
}
