// import React, { Component, useEffect, useRef, useState } from "react";
// // import "./Message.scss";
// import '../../Components/MessegaLayout/MessageList/MessageList.scss'
// import MessageList  from '../../Components/MessegaLayout/MessageList/MessageList'
// import MessageContent from '../../Components/MessegaLayout/MessageContent/MessageContent'
// import MessageProfile from '../../Components/MessegaLayout/MessageProfile/MessageProfile'
// import { useCookies } from "react-cookie";
// import axios from "axios";

// import ChatListItems from '../../Components/MessegaLayout/MessageList/MessageListItems'
// import io from 'socket.io-client'
// import Chatlogo from '../../assets/image/chat icon-08.png';


// export default function Message() {
//   const [currentChat , setCurrentChat] = useState(null)
//   const socket = useRef(io('https://chat.qa.addissystems.et/'))

//   //mmessage list stuff
// const [conversations, setConversations] = useState([]);
// const [cookies] = useCookies(['user']);
// const [onlineFriends , setOnlineFriends] = useState([])

// useEffect(()=>{
//   socket.current = io('https://chat.qa.addissystems.et/')
// },[])


 

// useEffect(()=>{
//   const getConversations = async ()=>{
//     try {
//       const res = await axios.get(`https://chat.qa.addissystems.et/getUserConversation/${cookies.user._id}`)


//       setConversations(res.data)
//     } catch (error) {
//       console.log(error)        
//     }
   
//   }
//   getConversations()
// }, [cookies.user._id])


// useEffect(()=>{
//    socket.current.on('getUsers' , users=>{
//       setOnlineFriends(users)
//    })
// }, [cookies.user._id])




//   return (
//     <div className="main__chatbody">
//         <>
//           <div className="main__chatlist">
//             <button className="btn">
//               <i className="fa fa-plus"></i>
//               <span>New conversation</span>
//             </button>
//             <div className="chatlist__heading">
//               <h2>Addis Chats</h2>
//               <button className="btn-nobg">
//                 <i className="fa fa-ellipsis-h"></i>
//               </button>
//             </div>
//             <div className="chatList__search">
//               <div className="search_wrap">
//                 <input type="text" placeholder="Search Here..." required />
//                 <button className="search-btn">
//                   <i className="fa fa-search"></i>
//                 </button>
//               </div>
//             </div>
//             <div className="chatlist__items">
//                     {conversations.map((conv , index) =>{
//                       return(
//                         <div key={index} onClick={()=>{
//                           setCurrentChat(conv)                         
//                           }}>
//                           <ChatListItems
//                             conv={conv}
//                             currentUser={cookies.user}
                           
//                           />
//                         </div>
                        
//                       )
//                     })}

              
//             </div>
//           </div>
        
//         </>
//           {
//             currentChat?
//             <>
//                <MessageContent               
//                   from={currentChat}
//                   socket ={socket}
                 
                  
//                />
//               <MessageProfile 
//                 from={currentChat}
//                 socket ={socket}
//               />
//             </>:
//             <>
//            <div className="chat-content">
//               <img src={Chatlogo} alt="Chat logo" className="imgs" />
//             <p className="chat-select">Select chat to start messaging.</p>
//             </div>
//             </>
//           }
       
          
          
           
        
//     </div>
//   )
// }


