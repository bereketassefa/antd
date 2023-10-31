import {
  faEllipsisVertical,
  faMessage,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import alternativeProfileblack from "../../../assets/image/alternativeProfile-black.png";
import newusimage from "../../../assets/image/iphone2.webp";
import { IoIosSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { format } from "timeago.js";
import CommentContainer from "../NewsCard/Comments/commentContainer";
import Avatar from "../../../Fields/Avatar/avatar";
import axios from "axios";
import PropTypes from "prop-types";
import { Modal } from "antd";
import logoAddis from "../../../assets/logo/addisLogoS.png";
import { io } from "socket.io-client";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToast } from "../../Toast/toastContext";
import NewSlider from "./NewSlider";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { PiShareFill } from "react-icons/pi";
import { Image } from "antd";

import { Link } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import LikeCard from "../../../Components/Home/NewsPost/LikeCard";
import { LikePosts } from "../../../data";
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
  Uid,
}) {
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const downloadCardRef = useRef(null);
  const [showComments, setShowComments] = useState(false);
  const [cookies] = useCookies(["user"]);
  const [Liked, setLiked] = useState(false);
  const [comments, setCommentsCounts] = useState("");
  const [setTimeline] = useState("");
  const [showLikeInfo, setShowLikeInfo] = useState(false);
  const [whoLikedPost, setWhoLikedPost] = useState([]);
  const [showDownloadCard, setShowDownloadCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [likeCount, setLikeCount] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [setComments] = useState([]);

  const [showText, setShowText] = useState(false);
  const headers = {
    "x-auth-token": `${import.meta.env.VITE_TOKEN_TIMELINE}`,
  };
  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const handleImageClick = () => {
    setShowText((prevShowText) => !prevShowText);
  };

  const handleTextClick = () => {
    setShowText(false);
  };
  const handleToggleText = () => {
    setShowText(!showText);
  };
  useEffect(() => {
    // Check the theme from local storage when the component mounts
    const theme = localStorage.getItem("theme");
    setIsDarkTheme(theme === "dark");
  }, []);

  const onCommentShow = () => {
    setShowComments(!showComments);
  };
  // const [showLikeInfo, setShowLikeInfo] = useState(false);

  useEffect(() => {
    setLikeCount(like);
  }, []);

  // Shared EventSource reference
  //   const fetchLikeCount = async () => {
  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_GET_THE_DATA_OF_TIMELINE_BY_ID}/${id}`);
  //       const data = await response.json();
  //       setLikeCount(data.like);
  //     } catch (error) {
  //       console.error("Error fetching like count:", error);
  //     }
  // };

  // useEffect(() => {
  //   let es; // Declare the EventSource variable

  //   const connect = () => {
  //     es = new EventSource(
  //       `${import.meta.env.VITE_GET_THE_DATA_OF_TIMELINE_BY_ID}/${id}`
  //     );

  //   es.onmessage = (event) => {
  //     const updatedPost = JSON.parse(event.data);
  //     if (updatedPost.id === id) {
  //       setLikeCount(updatedPost.like);
  //       // console.log(updatedPost.like);
  //       // checkIfLiked(); // Check if the current user has liked the updated post
  //     }
  //   };
  //   es.onerror = (errorEvent) => {
  //     // Handle the error here
  //     // For example, you can try to reconnect after a delay or show a message to the user
  //     setTimeout(connect, 5000);  // Try to reconnect after 5 seconds
  //   };
    
  
    
  // };

  //   connect(); // Initialize the connection

  //   return () => {
  //     es.close(); // Close the EventSource connection when the component unmounts
  //   };
  // }, [id]);

  //     es.onmessage = (event) => {
  //       const updatedPost = JSON.parse(event.data);
  //       if (updatedPost.id === id) {
  //         setLikeCount(updatedPost.like);
  //         // console.log(updatedPost.like);
  //         // checkIfLiked(); // Check if the current user has liked the updated post
  //       }
  //     };
  //     es.onerror = (errorEvent) => {
  //       // Handle the error here
  //       // For example, you can try to reconnect after a delay or show a message to the user
  //       setTimeout(connect, 5000); // Try to reconnect after 5 seconds
  //     };
  //   };

  //   connect(); // Initialize the connection

  //   return () => {
  //     es.close(); // Close the EventSource connection when the component unmounts
  //   };
  // }, [id]);

  const handleLike = async (e) => {
    e.preventDefault();
    setLiked((prevLiked) => !prevLiked); // Optimistic update
    // Close the SSE connection temporarily
    // if (es) es.close();
    const url = `${import.meta.env.VITE_LIKE_DISLIKE_POST}/${
      cookies?.user?.Uid
    }/${id}`;
    try {
      const response = await fetch(url, { method: "POST", headers: headers });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLikeCount(data?.updatedPost?.like);
      // console.log(data.updatedPost.like)
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
      setLiked((prevLiked) => !prevLiked); // Revert the optimistic update if there's an error
    }
  };

  const checkIfLiked = async () => {
    try {
      const url = `${import.meta.env.VITE_CHECK_LIKED_UNLIKED}/${
        cookies?.user?.Uid
      }`;
      const response = await fetch(url, { method: "GET", headers: headers });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      // console.log(data)
      if (data?.likedPosts?.length === 0) {
        setLiked(false);
        return;
      }

      const isLiked = data?.likedPosts?.some((post) => post.id === id);
      // console.log(isLiked)
      setLiked(isLiked);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Fetch comments when component mounts
    fetchComments();
    checkIfLiked();
    // fetchMoreTimelines();
  }, []);

  // Make an API call to fetch comments for the given post ID
  async function fetchComments() {
    try {
      const url = `${import.meta.env.VITE_COUNT_COMMENTS}/${id}`;
      const response = await axios.post(url, {}, { headers: headers });
      setCommentsCounts(response?.data); // use response.data instead of response.json()
    } catch (error) {
      // console.error("Failed to fetch comments:", error);
    }
  }

  useEffect(() => {
    fetchComments();
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
  // console.log(id)

  async function fetchMoreTimelines() {
    const Url = `https://timeline.qa.addissystems.et/time-line/${id}`;

    try {
      const response = await axios.get(Url);
      if (response.status === 200) {
        console.log(response.data);
        setTimeline(response?.data);
      }
    } catch (error) {
      // message.error('faild to fetch ')
    }
    // const response = await fetch(Url);
  }

  // useEffect(() => {
  //   // Listen for like updates
  //   socket.on('likeCountUpdated', (data) => {
  //     if (data.postId === id) { // Only update if this is the post that got liked/unliked
  //       setAllLiked(data.newLikeCount);
  //     }
  //   });
  //   return () => {
  //     socket.off('likeCountUpdated');
  //   };
  // }, [id]);
  const fetchUsersWhoLikedPost = async () => {
    try {
      const response = await axios.post(
        `https://timeline.qa.addissystems.et/Like/${id}`,
        {},
        { headers: headers }
      );
      const data = await response.data;
      setWhoLikedPost(data?.users);
      console.log(data.users);
    } catch (error) {
      console.error("Failed to fetch users who liked the post:", error);
    }
  };

  useEffect(() => {
    if (showLikeInfo) {
      fetchUsersWhoLikedPost();
    }
  }, [showLikeInfo]);

  const handleDownloadImage = async (event) => {
    try {
      event.stopPropagation();
      setIsLoading(true);
      const xhr = new XMLHttpRequest();
      xhr.open("GET", image, true);
      xhr.responseType = "blob";

      // Event handler for download progress
      xhr.onprogress = function (event) {
        const percentComplete = ((event.loaded / event.total) * 100).toFixed(2);
        showToast(`Downloading: ${percentComplete}%`);
      };

      // Event handler for successful download
      xhr.onload = function () {
        setIsLoading(false);
        if (this.status === 200) {
          const blob = this.response;
          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = "image.jpg";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          URL.revokeObjectURL(url);

          showToast("Download successful!", "success");
        } else {
          showToast("Download failed!", "error");
        }
      };

      // Event handler for download failure
      xhr.onerror = function () {
        setIsLoading(false);
        showToast("Download failed!", "error");
      };

      xhr.send();
    } catch (err) {
      setIsLoading(false);
      console.error("Failed to download image:", err);
      showToast("Download failed!", "error");
    }
  };
  const handleClickOutside = (event) => {
    if (
      downloadCardRef.current &&
      !downloadCardRef.current.contains(event.target)
    ) {
      setShowDownloadCard(false);
    }
  };
  useEffect(() => {
    // Attach click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: Remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCommentSubmit();
    }
  };
  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return; // Ensure comment is not just whitespace

    try {
      const url = `${import.meta.env.VITE_COMMENT}`;
      const response = await axios.post(
        url,
        {
          post_id: id,
          parent_comment_id: null,
          user_id: cookies?.user?.Uid.toString(),
          text: commentText,
        },
        { headers: headers }
      );

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Failed to post comment");
      }

      // Access the new comment object correctly
      const newComment = response.data.comment;

      // Add the new comment to the existing comments
      setComments((prevComments) => [
        ...(Array.isArray(prevComments) ? prevComments : []),
        newComment,
      ]);

      // Clear the text input
      setCommentText("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const text =
    "In publishing and graphic design In publishing and graphic design In publishing and graphic design In publishing and graphic design In publishing and graphic design";

  return (
    <div className="rounded-lg dark:bg-[#1b1f23] w-full bg-cards drop-shadow-xl relative  ">
      {showDownloadCard && (
        <div
          ref={downloadCardRef}
          className="absolute top-0 right-0 mt-4 mr-4 bg-white p-2 rounded shadow-lg flex flex-col"
        >
          <div className="mb-2 flex flex-col">
            <button onClick={handleDownloadImage}>
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
              ) : (
                <>
                  <FontAwesomeIcon icon={faDownload} className="gap-2" /> Save
                  <div className="flex items-center gap-1 ml-3">
                    {/* <RiDeleteBinLine /> Delete */}
                  </div>
                </>
              )}
            </button>
          </div>
          {/* <div>
            <button onClick={handleBookmark} className="text-sm">
              {isBookmarked ? "Remove Bookmark" : "Save as Bookmark"}
            </button>
          </div> */}
        </div>
      )}

      <div className="flex items-center justify-between p-3  ">
        <div className="flex items-center gap-2">
          <Avatar
            onClick={hadleNavigateProfile}
            img={
              isDarkTheme
                ? alternativeProfileblack
                : profilePic
                ? profilePic
                : alternativeProfile
            }
          />
          <Link to="" className="flex flex-col gap-1">
            <h1
              onClick={hadleNavigateProfile}
              className="dark:text-white font-bold flex items-center gap-2 text-xs md:text-xs lg:text-xs"
            >
              {companyName}
            </h1>

            <span className="text-smallP md:text-midP text-gray-400 dark:text-white">
              {format(timestamp)}
            </span>
          </Link>
        </div>
        <FontAwesomeIcon
          className="dark:text-white"
          onClick={() => setShowDownloadCard(!showDownloadCard)}
          icon={faEllipsisVertical}
        />
      </div>
      {/* {newContent} */}
      <div className="w-full flex flex-col ">
        <div className="p-2 flex w-full ">
          <p
            id="fullText"
            className={`dark:text-white text-smallP md:text-midP lg:text-largeP ${
              showText
                ? "w-auto max-h-[none]"
                : "  max-w-[300px] md:max-w-[450px] max-h-[45px] overflow-hidden"
            }`}
          >
            {newContent?.length > 120 && !showText
              ? newContent.slice(0, 120) + "..."
              : newContent}
          </p>
          {!showText && newContent?.length > 120 && (
            <p
              className={`md:mt-6 text-[15px]  ${
                showText ? "hidden" : "text-gray-500"
              }`}
              onClick={handleToggleText}
            >
              see more
            </p>
          )}
        </div>

        <div className="overflow-hidden flex bg-center  ">
          <Image.PreviewGroup>
            {image.map((image, index) => (
              <Image
                key={index}
                width={600}
                height={380}
                src={image}
                className="object-cover"
              />
            ))}
          </Image.PreviewGroup>
        </div>
      </div>

      <div className="w-full flex flex-col z-10  ">
        <ul className="flex   mx-4 md:justify-start items-center p-4 gap-14 md:gap-20 ">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              onClick={(e) => handleLike(e)}
              className={
                Liked
                  ? "text-2xl md:text-smallT cursor-pointer text-secondary "
                  : "text-2xl cursor-pointer md:text-smallT text-gray dark:text-white"
              }
              icon={faThumbsUp}
            />
            <span
              className="dark:text-white text-smallP md:text-midP lg:text-largeP cursor-pointer"
              onClick={() => setShowLikeInfo(true)}
            >
              {likeCount === 0 || likeCount === "0" ? "" : likeCount}
            </span>
          </li>

          <li className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon
              icon={faMessage}
              onClick={onCommentShow}
              className="dark:text-white text-largeP md:text-smallT text-gray-400"
            />
            <span className="dark:text-white text-smallP md:text-midP lg:text-largeP">
              {comments.postCount === undefined
                ? ""
                : comments.postCount === "0"
                ? ""
                : `${comments.postCount}  `}
            </span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            {/* <PiShareFill className="dark:text-white text-largeP md:text-2xl text-[#929292]" /> */}
          </li>
        </ul>
        <hr className=" border-[0.7px]" />
        <div className="flex gap-2 p-2 items-center  ">
          {/* <div className="flex items-center justify-center w-fit overf  border-2 border-red-600">
          <Avatar
            img={
              isDarkTheme
                ? alternativeProfileblack
                : profilePic
                ? profilePic
                : alternativeProfile
            }
          />
        </div> */}
          <div className="flex items-center justify-between border-2 rounded-lg w-full h-[50px] gap bg-[#fffdfd] p-3">
            <div>
              <BsEmojiSmile className="text-xl md:smallT text-[#555555]" />
            </div>
            <input
              type="text"
              className="dark:bg-[#1b1f23]  m-3 flex w-full h-full outline-none pl-4 text-smallP md:text-midP lg:text-largeP"
              placeholder="Add a comment ..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <div
              className="flex gap-4    items-center h-full"
              onClick={handleCommentSubmit}
            >
              <div className="w-2 h-8 flex justify-end border-l-2 border-gray-400  "></div>
              Send
              <IoIosSend className="text-xl md:smallT text-[#555555]" />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-between items-center p-4 border-b border-2 border-red-900"> */}
        {/* <span
            className="dark:text-white text-smallP md:text-midP lg:text-largeP cursor-pointer"
            onClick={() => setShowLikeInfo(true)}
          >
            {likeCount === 0 || likeCount === "0" ? "" : likeCount}
          </span> */}
        {/* <span className="dark:text-white text-smallP md:text-midP lg:text-largeP">
            {comments.postCount === undefined
              ? "Loading..."
              : comments.postCount === "0"
              ? ""
              : `${comments.postCount} comments`}
          </span> */}
        {/* </div> */}
      </div>

      {/* Like Info Modal */}
      {showLikeInfo && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 "
          onClick={() => setShowLikeInfo(false)}
        >
          <div
            className="bg-white p-4 rounded   flex  flex-col overflow-y-auto "
            onClick={(e) => e.stopPropagation()}
          >
            {/* <div className="flex items-center mb-4 ">
              <img
                src={logoAddis}
                alt="Company Logo"
                className="w-6 h-6 self-center ml-3"
              />
              <h3 className="text-center ml-7">company who liked this</h3>
            </div>
            <div
              className={`flex-1 overflow-y-auto ${
                whoLikedPost?.length > 6 ? "max-h-60" : ""
              }`}
            >
              {whoLikedPost?.map((user) => (
                <div key={user?.uid} className="flex items-center mb-2">
                  <Avatar
                    className="h-8 w-8"
                    img={
                      user?.account?.profilePicture
                        ? user?.account?.profilePicture
                        : alternativeProfile
                    }
                  />
                  <span className="ml-4 text-sm">
                    {user?.account?.party?.length > 19
                      ? `${user?.account?.party.slice(0, 19).toLowerCase()}...`
                      : user?.account?.party}
                  </span>
                </div>
              ))}
            </div> */}
            <div className=" w-[400px] flex flex-col gap-2 ">
              <div className="flex gap-3  items-center">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-secondary text-xl"
                />
                <div className="flex justify-center items-center">
                  {" "}
                  <p className="font-bold ">Likes</p>
                  {/* <p className="text-[14px]">(1212)</p> */}
                </div>
              </div>
              <hr className="border-[1px] border-gray-200" />
              <div className="mt-3 flex flex-col gap-8  ">
                {LikePosts?.map((Like) => (
                  <LikeCard
                    // key={key.key}
                    companyName={Like.companyName}
                    date={Like.date}
                    image={Like.image}
                    icon={Like.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showComments && (
        <CommentContainer
          Uid={Uid}
          account_id={account_id}
          postid={id}
          isOpen={showComments}
        />
      )}
    </div>
  );
}
