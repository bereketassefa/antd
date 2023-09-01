import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./MessageProfile.scss";




export default function MessageProfile({from , socket}) {

  const [infoToggle , setInfoToggle] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
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



  const toggleInfo = ()=>{
     setInfoToggle(!infoToggle)
  }






  return (
    <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0" alt="profile"/>
          </div>
          <h4>{friend?.fname.toUpperCase() + " " + friend?.lname.toUpperCase()}</h4>
          <p>{friend?.party}</p>
        </div>
        <div className={infoToggle  ?  "profile__card open" : "profile__card" } >
          <div className="card__header"  onClick={toggleInfo} >
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
  )
}





// export default class MessageProfile extends Component {
//   toggleInfo = (e) => {
//     e.target.parentNode.classList.toggle("open");
//   };
//   render() {
//     return (
      
//     );
//   }
// }