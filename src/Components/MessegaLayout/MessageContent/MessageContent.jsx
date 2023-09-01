import { Space } from "antd";
import React, { Component,useContext, createRef, useEffect, useRef, useState } from "react";
import Avatar from "../MessageList/Avatar";
import ChatItem from "./ChatItem"; 
import "./MessageContent.scss";
import { w3cwebsocket as w3CWebSocket } from "websocket";
import axios from "axios";
import { useCookies } from "react-cookie";





//new chat






export default function MessageContent({from, socket}) {

  

  
   
  const [currentChat, setCurrentChat] = useState(null);  
  const scrollRef = useRef();
  const [messages , setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [incomingMessage, setIncomingMessage] = useState(null)
  const messagesEndRef  = useRef(null)
  const [friend , setFriend] = useState()


 useEffect(()=>{
  const friendId = from.members.find(member => member !== cookies.user._id)
  const getFriend = async()=>{
    try{
       const res = await axios.post(`https://chat.qa.addissystems.et/getUser/${friendId}`)
       setFriend(res.data)
      }catch(err){

    }
  }
  getFriend()

}, [from])

  
  useEffect(()=>{
    socket.current.emit('addUser' , cookies.user._id)
    
  },[cookies.user])



  useEffect(()=>{
    const scrollToBottom = ()=>{
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    } 
    scrollToBottom()
  }, [newMessage, []])

  

  //get user when current chat is active
  useEffect(()=>{
    const getMessages = async ()=>{
        try {
          const res = await axios.get(`https://chat.qa.addissystems.et/getMessages/${from?._id}`)
          setMessages(res.data)
        } catch (error) {
            console.log(error)
        } 
      
        
      }
      getMessages()
  } , [from])


  //incoming messages 
  useEffect(()=>{
    socket.current.on('getMessage' , (data)=>{
      setIncomingMessage({
         sender: data.senderId,
         text: data.text,
         createdAt: Date.now()
      })
    })
  },[])


  useEffect(()=>{ 
     incomingMessage &&
        from?.members.includes(incomingMessage.sender) &&
        setMessages((prev)=> [...prev , incomingMessage])
  }, [incomingMessage , from])











  const handleSendMessage = async (e) => {
    e.preventDefault();
    const message = {
      sender: cookies.user._id,
      text: newMessage,
      conversationId: from._id,
    };


    const receiverId = from.members.find(member => member !== cookies.user._id)

    socket.current.emit('sendMessage',{
      senderId: cookies.user._id,
      receiverId,
      text: newMessage,
    })


    try {
       if(newMessage !== ''){
          const res = await axios.post("https://chat.qa.addissystems.et/newMessage", message);
          setMessages([...messages , res.data])
          setNewMessage("");
       }
     
    } catch (err) {
      console.log(err);
    }
  };
 

  

  const onStateChange = (e) => {
    setNewMessage(e.target.value);
  };


  return (  

    
      <div className="main__chatcontent">
        
        <div className="content__header">
          {/* <button className="resposive_btn" onClick={this.props.onclick}><i class="fa fa-bars" aria-hidden="true"></i></button> */}
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              />
              <p>{friend?.userName}</p>        
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
          <div className="content__body">
            <div className="chat__items">
              <div className="chatBoxTop">
                {messages?.map((message ) => (
                  <ChatItem
                      message={message}
                      
                    />
                ))}
              </div>                     
              <div ref={messagesEndRef} />
            </div>
          </div>
  
        <div className="content__footer">
          <div className="sendNewMessage">
            <Space><button className="addFiles">
            <i class="fa fa-smile-o"></i>
            </button>
            
            <button className="addFiles">
            <i class="fa fa-paperclip"></i>
            </button></Space>
            
              <input 
                type="text"
                placeholder="Write something here..," 
                onChange={onStateChange}
                value={newMessage}
              />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={handleSendMessage}  >
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
  )
}








