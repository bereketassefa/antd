import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NotificationCard from '../../Components/Notification/notificationCard'
import comment1 from '../../assets/logo/comment1.png'
import comment2 from '../../assets/logo/comment2.png'
import { useCookies } from 'react-cookie'

export default function Notification() {

  const [notifications, setNotifications] = React.useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['User']);



  React.useEffect(() => {
    const fetchNotifications = async () => {
        try {
            let response = await fetch(`http://localhost:8010/Notification/${cookies?.user._id}`);
            let data = await response.json();
            console.log(data);
            setNotifications(data);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };

    fetchNotifications();
}, []);
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
         {notifications.map((notification,index) => (
        <NotificationCard 
            key={notification.id}
            type="notice"
            message={notification?.message}
            timeStamp={notification.timestamp}
            id={notification.id}
        />


       
    ))}
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
