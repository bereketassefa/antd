import {
  faEllipsisVertical,
  faMessage,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import alternativeProfileblack from "../../../assets/image/alternativeProfile-black.png";
import newusimage from "../../../assets/image/iphone2.webp";

import { format } from "timeago.js";
import CommentContainer from "./Comments/commentContainer";
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
import NewSlider from "../../../Components/Home/NewsHolder/NewSlider";
import { RiDeleteBinLine } from "react-icons/ri";
import { Image } from "antd";
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

  const [showText, setShowText] = useState(false);

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
    let es; // Declare the EventSource variable

    const connect = () => {
      es = new EventSource(
        `${import.meta.env.VITE_GET_THE_DATA_OF_TIMELINE_BY_ID}/${id}`
      );

      es.onmessage = (event) => {
        const updatedPosts = JSON.parse(event.data);
        const updatedPost = updatedPosts.find((post) => post.id === id);
        if (updatedPost) {
          setLikeCount(updatedPost?.like);
          console.log(updatedPost?.like);
          checkIfLiked(); // Check if the current user has liked the updated post
        }
      };

      es.onmessage = (event) => {
        const updatedPost = JSON.parse(event.data);
        if (updatedPost.id === id) {
          setLikeCount(updatedPost.like);
          // console.log(updatedPost.like);
        }
      };
    };

    connect(); // Initialize the connection

    return () => {
      es.close(); // Close the EventSource connection when the component unmounts
    };
  }, [id]);

  const handleLike = async (e) => {
    e.preventDefault()
    // console.log(e);
   
      setLiked((prevLiked) => !prevLiked); // Optimistic update
      const url = `${import.meta.env.VITE_LIKE_DISLIKE_POST}/${cookies?.user?.Uid}/${id}`;
      console.log(url);
      await fetch(url, { method: "POST"}).then(response => response.json()).then((data) => {
        // console.log(data);
      })
   
  };
  
  
  

  const checkIfLiked = async () => {
    try {
      const url = `${import.meta.env.VITE_CHECK_LIKED_UNLIKED}/${
        cookies?.user?.Uid
      }`;
      const response = await fetch(url, { method: "GET" });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      // console.log(data)
      if (data.likedPosts.length === 0) {
        setLiked(false);
        return;
      }

      const isLiked = data.likedPosts.some((post) => post.id === id);
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
      const response = await axios.post(url);
      setCommentsCounts(response.data); // use response.data instead of response.json()
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
        console.log(response.data)
        setTimeline(response.data);
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
        `https://timeline.qa.addissystems.et/Like/${id}`
      );
      const data = await response.data;
      setWhoLikedPost(data.users);
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
  // useEffect(() => {
  //   // Attach click event listener
  //   document.addEventListener("mousedown", handleClickOutside);

  //   // Cleanup: Remove event listener
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const text =
    "In publishing and graphic design In publishing and graphic design In publishing and graphic design In publishing and graphic design In publishing and graphic design";

  return (
    <div className="rounded-lg dark:bg-[#1b1f23] w-full bg-cards drop-shadow-xl relative">
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
                  <FontAwesomeIcon icon={faDownload}  className="gap-2"/> Save
                  <div className="flex items-center gap-1 ml-3">
                    <RiDeleteBinLine /> Delete
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

      <div className="flex items-center justify-between p-3">
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
          <div className="flex flex-col gap-1">
            <h1
              onClick={hadleNavigateProfile}
              className="dark:text-white font-bold flex items-center gap-2 text-xs md:text-xs lg:text-xs"
            >
              {companyName}
            </h1>

            <span className="text-smallP md:text-midP text-gray-400 dark:text-white">
              {format(timestamp)}
            </span>
          </div>
        </div>
        <FontAwesomeIcon
          className="dark:text-white"
          onClick={() => setShowDownloadCard(!showDownloadCard)}
          icon={faEllipsisVertical}
        />
      </div>
      {/* {newContent} */}
      <div className="w-full flex flex-col">
        <div className="p-2 flex w-full ">
          <p
            id="fullText"
            className={`dark:text-white text-smallP md:text-midP lg:text-largeP ${
              showText
                ? "w-auto max-h-[none]"
                : "  max-w-[300px] md:max-w-[450px] max-h-[45px] overflow-hidden"
            }`}
          >
            {newContent.length > 120 && !showText ? newContent.slice(0, 120) + "..." : newContent}
          </p>
          {!showText && newContent.length > 120 && (
            <p
              className={`md:mt-6 text-[15px] ${
                showText ? "hidden" : "text-blue-900"
              }`}
              onClick={handleToggleText}
            >
              see more
            </p>
          )}
        </div>

        <div className="overflow-hidden flex bg-center">
          <Image.PreviewGroup>
            <Image
              width={600}
              height={450}
              src={
                image
              }
            />
          </Image.PreviewGroup>
        </div>
      </div>

      <div className="w-full flex flex-col z-10">
        <div className="flex justify-between items-center p-4 border-b">
          <span
            className="dark:text-white text-smallP md:text-midP lg:text-largeP cursor-pointer"
            onClick={() => setShowLikeInfo(true)}
          >
            {likeCount === 0 || likeCount === "0" ? "" : likeCount}
          </span>
          <span className="dark:text-white text-smallP md:text-midP lg:text-largeP">
            {comments.postCount === undefined
              ? "Loading..."
              : comments.postCount === "0"
              ? ""
              : `${comments.postCount} comments`}
          </span>
        </div>

        <ul className="flex items-center p-4 gap-4">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              onClick={(e)=> handleLike(e)}
              className={
                Liked
                  ? "text-largeP md:text-smallT cursor-pointer text-secondary "
                  : "text-largeP cursor-pointer md:text-smallT text-gray dark:text-white"
              }
              icon={faThumbsUp}
            />
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon
              onClick={onCommentShow}
              className="dark:text-white text-largeP md:text-smallT text-gray-400"
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
              <img
                src={logoAddis}
                alt="Company Logo"
                className="w-6 h-6 self-center ml-3"
              />
              <h3 className="text-center ml-7">company who liked this</h3>
            </div>
            <div
              className={`flex-1 overflow-y-auto ${
                whoLikedPost.length > 6 ? "max-h-60" : ""
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
            </div>
          </div>
        </div>
      )}

      <CommentContainer
        Uid={Uid}
        account_id={account_id}
        postid={id}
        isOpen={showComments}
      />
    </div>
  );
}
