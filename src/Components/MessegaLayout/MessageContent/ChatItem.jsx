import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Avatar from "../MessageList/Avatar";

import {format} from 'timeago.js'

export default function ChatItem({message , from }) {

  const [cookies, setCookie, removeCookie] = useCookies(['user']);


  return (
      <div
      style={message.sender === cookies.user._id ? { animationDelay: `0.2s` }: {animationDelay: '0.4s'}}
      className={message.sender === cookies.user._id ? 'chat__item' : 'chat__item__other'}
    >
      <div className="">
        <p className="">{message.text}</p>
        <div className="">
          <span>{format(message.createdAt)}</span>
          <span>Seen 1.03PM</span>
        </div>
      </div>
      <Avatar isOnline="active" image={''} />
    </div>
  )
}







// export default class ChatItem extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div
//         style={{ animationDelay: `0.8s` }}
//         className={`chat__item ${this.props.user ? this.props.user : ""}`}
//       >
//         <div className="chat__item__content">
//           <p className="chat__msg">{this.props.msg}</p>
//           <div className="chat__meta">
//             <span>16 mins ago</span>
//             <span>Seen 1.03PM</span>
//           </div>
//         </div>
//         <Avatar isOnline="active" image={this.props.image} />
//       </div>
//     );
//   }
// }
