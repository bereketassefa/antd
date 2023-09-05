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
import logoAddis from '../../../assets/logo/addisLogoS.png' 
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
 
// console.log(like)
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
  const [data , setTimeline] =useState('')
  const [showLikeInfo, setShowLikeInfo] = useState(false);
  const [whoLikedPost, setWhoLikedPost] = useState([]);
  const socket = io('https://timeline.qa.addissystems.et', {
    withCredentials: true,
  
  });
  const onCommentShow = () => {
    setShowComments(!showComments);
  };
  // const [showLikeInfo, setShowLikeInfo] = useState(false);

  const [likeInfo, setLikeInfo] = useState(null);
  useEffect(() => {
    // Subscribe to the post
    socket.on(`post-${id}`, (data) => {
      setAllLiked(data.newLikeCount);
    });

    return () => {
      // Unsubscribe when the component unmounts
      socket.off(`post-${id}`);
    };
  }, [id]);

const handleLike = async () => {
  try {
    const url = `${import.meta.env.VITE_LIKE_DISLIKE_POST}/${cookies?.user.Uid}/${id}`;
    const response = await fetch(url, { method: "POST" });
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Failed to like or unlike the post");
    }

    setLiked((prevLiked) => !prevLiked);

    // Emit a 'likePost' event to the server
    // socket.emit('likePost', { postId: id, userId: cookies?.user.Uid });

    if (responseData.newLikeCount) {
      setAllLiked(responseData.newLikeCount);
    } else {
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
    fetchMoreTimelines()
  }, [id]);

  // Make an API call to fetch comments for the given post ID
  async function fetchComments() {
    try {
      const url = `${import.meta.env.VITE_COUNT_COMMENTS}/${id}`
      const response = await axios.post(
       url
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

    async function fetchMoreTimelines() {
  
      const Url = `https://timeline.qa.addissystems.et/time-line/${id}`;

      try {
       const response=  await axios.get(Url)
       if(response.status === 200){
        console.log(response.data)
         setTimeline(response.data)
       }   
      } catch (error) {
        // message.error('faild to fetch ')
      }
      // const response = await fetch(Url);
  }

  useEffect(() => {
    // Listen for like updates
    socket.on('likeCountUpdated', (data) => {
      if (data.postId === id) { // Only update if this is the post that got liked/unliked
        setAllLiked(data.newLikeCount);
      }
    });
    return () => {
      socket.off('likeCountUpdated');
    };
  }, [id]);
  const fetchUsersWhoLikedPost = async () => {
    try {

      const response = await axios.post(`https://timeline.qa.addissystems.et/Like/${id}`);
      const data = await response.data
      setWhoLikedPost(data.users);
      console.log(data.users)
      
    } catch (error) {
      console.error('Failed to fetch users who liked the post:', error);
    }
  };

  useEffect(() => {
    if (showLikeInfo) {
      fetchUsersWhoLikedPost();
    }
  }, [showLikeInfo]);

  return (
    <div className="w-full bg-cards drop-shadow-xl relative">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Avatar onClick={hadleNavigateProfile} img={profilePic ? profilePic : alternativeProfile} />
          <div className="flex flex-col gap-1">
            <h1 onClick={hadleNavigateProfile} className="font-bold flex items-center gap-2 text-smallP md:text-midP lg:text-largeP">
              {companyName}
            </h1>
            <span className="text-smallP md:text-midP text-gray-400">
              {format(timestamp)}
            </span>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
  
      <div className="w-full flex flex-col">
        <div className="p-4 w-full">
          <p className="text-smallP md:text-midP lg:text-largeP">
            {newContent}
          </p>
        </div>
        <div className="overflow-hidden flex z-0 items-center justify-center w-full">
          <img src={image} alt="Image" className="h-[300px] flex object-contain" />
        </div>
      </div>
  
      <div className="w-full flex flex-col z-10">
        <div className="flex justify-between items-center p-4 border-b">
          <span
            className="text-smallP md:text-midP lg:text-largeP cursor-pointer"
            onClick={() => setShowLikeInfo(true)}
          >
            {allLikes === '0' ? '' : allLikes}
          </span>
          <span className="text-smallP md:text-midP lg:text-largeP">
          {comments.postCount === undefined ? 'Loading...' : comments.postCount === '0' ? '' : `${comments.postCount} comments`}
          </span>
        </div>
  
        <ul className="flex items-center p-4 gap-4">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              onClick={handleLike}
              className={
                Liked
                  ? "text-largeP md:text-smallT cursor-pointer text-secondary"
                  : "text-largeP cursor-pointer md:text-smallT text-gray"
              }
              icon={faThumbsUp}
            />
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon
              onClick={onCommentShow}
              className="text-largeP md:text-smallT text-gray-400"
              icon={faMessage}
            />
          </li>
        </ul>
      </div>
      
      {/* Like Info Modal */}
      {showLikeInfo && (
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={() => setShowLikeInfo(false)}
      >
        <div 
      className="bg-white p-4 rounded  sm:w-3/4 md:w-1/2 lg:w-1/2  flex flex-col overflow-y-auto"

          onClick={(e) => e.stopPropagation()}
        >
           <div className="flex items-center mb-4">
            <img src={logoAddis} alt="Company Logo" className="w-6 h-6 self-center ml-3" />
            <h3 className="text-center ml-7">company who liked this</h3>
          </div>
          <div className={`flex-1 overflow-y-auto ${whoLikedPost.length > 6 ? 'max-h-60' : ''}`}>
            {whoLikedPost?.map((user) => (
              <div key={user?.uid} className="flex items-center mb-2">
                <Avatar img={user?.account?.profilePicture ? user?.account?.profilePicture  :alternativeProfile} />
                <span className="ml-4"> {user.account?.party?.length > 19 
                    ? `${user?.account?.party.slice(0, 19).toLowerCase()}...` 
                    : user?.account?.party}</span>
                     
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  
      <CommentContainer id={id} isOpen={showComments} />
      
    </div>
  );
  
  
  
  

  
  
}
