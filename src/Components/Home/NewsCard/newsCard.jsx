import {
  faEllipsisVertical,
  faMessage,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import { format } from "timeago.js";
import CommentContainer from "./Comments/commentContainer";
import Avatar from "../../../Fields/Avatar/avatar";
import axios from "axios";
import PropTypes from "prop-types";
import { io } from "socket.io-client";
export default function NewsCard({
  account_id,
  myKey,
  profilePic,
  companyName,
  timestamp,
  newContent,
  image,
  id,
  like,
}) {
 

  NewsCard.propTypes = {
    myKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    profilePic: PropTypes.string,
    items: PropTypes.array,
    comanyName: PropTypes.string.isRequired,
    timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    newContent: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    like: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
//   const socket = io("http://localhost:8020");
  const [allLikes, setAllLiked] = useState(like);
  const [showComments, setShowComments] = useState(false);
  const [cookies] = useCookies(["user"]);
  const [Liked, setLiked] = useState(false);
  const [comments, setCommentsCounts] = useState("");
  const onCommentShow = () => {
    setShowComments(!showComments);
  };
//   useEffect(() => {
//     // Subscribe to the post
//     socket.on(`post-${id}`, (data) => {
//       setAllLiked(data.newLikeCount);
//     });

//     return () => {
//       // Unsubscribe when the component unmounts
//       socket.off(`post-${id}`);
//     };
//   }, [id]);

const handleLike = async () => {
    try {
      // Validate data
      // if (!id || !cookies?.user.Uid) {
      //   throw new Error("Invalid data: missing post ID or user ID");
      // }
      // Make the request
      const url = `${import.meta.env.VITE_LIKE_DISLIKE_POST}/${cookies?.user.Uid}/${id}`;
      const response = await fetch(url, { method: "POST" });
      const responseData = await response.json(); // Assuming server returns JSON
      console.log(responseData)
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(responseData.message || "Failed to like or unlike the post");
      }
  
      // Uncomment the following line if you want to use Socket.io for real-time updates
      // socket.emit("likePost", id, cookies?.user.Uid);
      
      // Update the UI
      setLiked((prevLiked) => !prevLiked);
      if (responseData.newLikeCount) {
        setAllLiked(responseData.newLikeCount);
      } else {
        // Fallback to optimistic updates
        !Liked ? setAllLiked(allLikes + 1) : setAllLiked(allLikes - 1);
      }
    } catch (error) {
      message.error(`An error occurred: ${error.message}`);
    }
  };
  

  const checkIfLiked = async () => {
    try {
      const url = `${import.meta.env.VITE_CHECK_LIKED_UNLIKED}/${
        cookies?.user.Uid
      }`;
      const response = await fetch(url, { method: "GET" });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      if (data.likedPosts.length === 0) {
        setLiked(false);
        return;
      }

      const isLiked = data.likedPosts.some((post) => post.id === id);
      setLiked(isLiked);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Fetch comments when component mounts
    fetchComments();
    checkIfLiked();
  }, [id]);

  // Make an API call to fetch comments for the given post ID
  async function fetchComments() {
    try {
      const response = await axios.post(
        `https://timeline.addispay.et/count/comment/${id}`
      );
      setCommentsCounts(response.data); // use response.data instead of response.json()
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  }

  fetchComments();

  useEffect(() => {
    checkIfLiked();
  }, [Liked]);
  if (comments.postCount === "0") {
    comments.postCount = "";
  }
  const hadleNavigateProfile = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_FIND_MY_DATA}/${account_id}`;
       await axios.get(url);
      //  console.log(response?.data)
      //   setProfilePic(response?.data?.account[0]?.profilePicture)

      // console.log(cookies.user._id)
      window.location.href = `/feed/profile/${account_id}`;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full bg-cards  drop-shadow-xl" key={myKey}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Avatar
            onClick={hadleNavigateProfile}
            img={profilePic ? profilePic : alternativeProfile}
          />

          <div className="flex flex-col gap-1">
            <h1
              onClick={hadleNavigateProfile}
              className="font-bold flex items-center gap-2 text-smallP md:text-midP lg:text-largeP  "
            >
              {companyName}{" "}
            </h1>
            {/* <img src={verified} alt="" /> */}
            <span className="text-smallP md:text-midP text-gray-400">
              {format(timestamp)}
            </span>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>

      <div className="w-full flex flex-col ">
        <div className="p-4 w-full">
          <p className="text-smallP md:text-midP lg:text-largeP">
            {newContent}
          </p>
        </div>
        <div className=" overflow-hidden flex z-0 items-center justify-center  w-full ">
          {/* <Carousel  className='w-full flex items-center justify-center  '  > */}

          <img
            src={image}
            alt="Image"
            className="h-[300px] flex object-contain"
          />

          {/* <img src={image} alt="Image" className='h-[300px] flex object-contain'/>  */}

          {/* </Carousel> */}
        </div>
      </div>

      <div className="w-full flex z-10">
        <ul className="flex items-center w-full gap-2 p-4">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              onClick={() => {
                handleLike();
                setLiked(!Liked);
              }}
              className={
                Liked
                  ? "text-largeP md:text-smallT cursor-pointer text-secondary"
                  : "text-largeP  cursor-pointer md:text-smallT text-gray"
              }
              icon={faThumbsUp}
            />{" "}
            <p className="text-smallP md:text-midP lg:text-largeP">
              {like }
            </p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hovor:bg-red-300">
            <FontAwesomeIcon
              onClick={onCommentShow}
              className="text-largeP md:text-smallT text-gray-400"
              icon={faMessage}
            />{" "}
            <p className="text-smallP md:text-midP lg:text-largeP">
              {comments.postCount}
            </p>
          </li>
          {/* <li className='flex items-center gap-2'>
                        <FontAwesomeIcon className='text-largeP md:text-smallT text-gray-400' icon={faShare}/> <p className='text-smallP md:text-midP lg:text-largeP'>{comments.postCount}</p>
                    </li> */}
        </ul>
      </div>

      <CommentContainer id={id} isOpen={showComments} />
    </div>
  );
}
