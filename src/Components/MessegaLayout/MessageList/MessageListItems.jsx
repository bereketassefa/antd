import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Avatar from "./Avatar";







export default function MessageListItems({conv , currentUser , active }) {


  const [user , setUser ] = useState();
 
 
  


  useEffect(()=>{

    const friendId = conv.members.find((m)=> m !== currentUser._id)  

    const getUser = async()=>{
      try{
        const res = await axios.post(`https://chat.qa.addissystems.et/getUser/${friendId}`)
        setUser(res.data)
       
      }catch(error){
        console.log(error)
      }
 
    }
    getUser()
  },[conv , currentUser])

  return (
    <div
        style={{ animationDelay: `0.2s` }}
        
        // className={`chatlist__item ${
        //   false ? 'active' : ""
        // } `}
        className={`chatlist__item`}
      >
        <Avatar
          image='https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
          isOnline={active? 'active' : 'offline'}
        />

        <div className="userMeta">
          <p>{user?.userName}</p>
          <span className="activeTime">32 mins ago</span>
        </div>
      </div>
    );
}











