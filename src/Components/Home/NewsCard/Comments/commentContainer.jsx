import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Avatar from "../../../../Fields/Avatar/avatar";
import profilePlaceHolder from "../../../../assets/logo/newCompanyPlaceHolder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faSmile } from "@fortawesome/free-regular-svg-icons";
import CommentCard from "./commentCard";
import { IoIosSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import alternativeProfileblack from "../../../../assets/image/alternativeProfile-black.png";
import { message } from "antd";
import { identifier } from "stylis";
export default function CommentContainer({ account_id, postid, isOpen }) {
  const [commentText, setCommentText] = useState("");
  const [visibleComments, setVisibleComments] = useState(2);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [cookies] = useCookies(["User"]);
  const [profilePic, setProfilePic] = useState(null);
  const [comments, setComments] = useState([]);
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check the theme from local storage when the component mounts
    const theme = localStorage.getItem("theme");
    setIsDarkTheme(theme === "dark");
  }, []);
  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return; // Ensure comment is not just whitespace

    try {
      const url = `${import.meta.env.VITE_COMMENT}`;
      const response = await axios.post(url, {
        post_id: postid,
        parent_comment_id: null,
        user_id: cookies?.user?.Uid.toString(),
        text: commentText,
      });

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

  const handleCommentDelete = (deletedCommentId) => {
    setComments((prevComments) => {
      // Ensure prevComments is an array, then filter out the deleted comment
      return Array.isArray(prevComments)
        ? prevComments.filter(
            (comment) => comment.comment_id !== deletedCommentId
          )
        : [];
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCommentSubmit();
    }
  };

  // console.log(id)
  // useEffect(() => {
  //   async function fetchComments() {
  //     try {
  //       const url = `${import.meta.env.VITE_GET_COMMENT}/${id}`;
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setComments(data);
  //       // console.log(data)
  //       if (data.length <= 2) {
  //         setShowSeeMore(false);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch comments:", error);
  //     }
  //   }
  //   fetchComments();
  // }, [id, refreshComments]);

  // Remove the following useEffect block that sets up the SSE connection
  useEffect(() => {
    console.log(postid);
    const fetchComments = async () => {
      try {
        const url = `${import.meta.env.VITE_GET_COMMENT}/${postid}`;
        const response = await axios.get(url);
        const data = response.data;
        // console.log(data)
        if (Array.isArray(data) && data.length > 0) {
          setComments(data);
        } else {
          console.warn("Received empty or invalid comment data");
        }
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };
    fetchComments();
    // Set up an interval to fetch comments every 5000ms (5 seconds)
    //  const intervalId = setInterval(fetchComments, 5000);

    // Cleanup: clear the interval when the component is unmounted
    //  return () => {
    //    clearInterval(intervalId);
    //  };
  }, [postid, refreshComments]);

  // console.log(id)
  useEffect(() => {
    const fetchAccountDataForProfile = async () => {
      try {
        const url = `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${
          cookies?.user?._id
        }`;

        await axios
          .get(url)
          .then((res) => {
            //   console.log(res)
            if (res?.data) {
              setProfilePic(res?.data[0]?.profilePicture);
            }
          })
          .catch((error) => {
            console.warn(error);
            // message.error('Cant find user account')
          });
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };

    fetchAccountDataForProfile();
  }, []);

  const toggleDeleteOption = () => {
    setShowDeleteOption(!showDeleteOption);
  };
  // useEffect(() => {
  //   // console.log("Updated comments state:", comments);
  // }, [comments]);

  return (
    <div
      className={
        isOpen
          ? "w-full flex flex-col gap-4 p-2 "
          : "w-full sm:flex flex-col gap-4 p-2 hidden"
      }
    >
      <div className="dark:bg-[#1b1f23] flex p-2  text-[#555555] font-bold">
        Comments
      </div>

      <div className=" w-full flex flex-col gap-4   ">
        {Array.isArray(comments) && comments.length > 0
          ? comments.slice(0, visibleComments).map((item) => {
              return (
                <CommentCard
                  key={item?.comment_id || item?._id}
                  img={item?.account?.profilePicture || alternativeProfile}
                  companyName={item?.party?.party[0]?.party?.businessname}
                  id={item?.account?._id}
                  time={item?.DateCreated}
                  comment={item?.text}
                  likes={item?.likes}
                  replays={item?.repays}
                  postId={item?.post_id}
                  account_id={account_id}
                  user_id={item?.user_id}
                  comment_id={item?.comment_id}
                  onCommentDelete={handleCommentDelete}
                />
              );
            })
          : null}

        {showSeeMore && (
          <div className=" w-full flex items-center justify-center">
            <p
              className=" text-primary font-bold text-smallP md:text-midP lg:text-largeP underline underline-offset-2 cursor-pointer"
              onClick={() => {
                setVisibleComments(visibleComments + 2);
                if (visibleComments + 2 >= comments.length) {
                  setShowSeeMore(false);
                }
              }}
            >
              See More
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
