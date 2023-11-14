import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Avatar from "../../../../Fields/Avatar/avatar";
import profilePlaceHolder from "../../../../assets/logo/newCompanyPlaceHolder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faSmile } from "@fortawesome/free-regular-svg-icons";
import CommentCard from "./commentCard";
import { IoMdSend } from "react-icons/io";
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import alternativeProfileblack from "../../../../assets/image/alternativeProfile-black.png";
import { message } from "antd";
import { identifier } from "stylis";
export default function CommentContainer({
  LikeCount,
  account_id,
  postid,
  isOpen,
  fetchComments
}) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [visibleComments, setVisibleComments] = useState(2);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [cookies] = useCookies(["User"]);
  const [profilePic, setProfilePic] = useState(null);

  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const headers = {
    "x-auth-token": `${import.meta.env.VITE_TOKEN_TIMELINE}`,
  };
  const [totalComments, setTotalComments] = useState(0);
  useEffect(() => {
    // Check the theme from local storage when the component mounts
    const theme = localStorage.getItem("theme");
    setIsDarkTheme(theme === "dark");
  }, []);
  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return; // Ensure comment is not just whitespace

    try {
      const url = `${import.meta.env.VITE_COMMENT}`;
      const response = await axios.post(url, headers, {
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
    fetchComments()
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
    // console.log(postid);
    const fetchComments = async () => {
      try {
        const url = `${import.meta.env.VITE_GET_COMMENT}/${postid}`;
        const response = await axios.get(url, { headers: headers });
        const data = response.data;
        // console.log(data)
        if (Array.isArray(data) && data.length > 0) {
          setComments(data);
          console.log(data);
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
            message.error("Cant find user account");
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
  useEffect(() => {
    // console.log("Updated comments state:", comments);
  }, [comments]);

  return (
    <div
      className={
        isOpen
          ? "w-full flex flex-col  p-2 "
          : "w-full flex flex-col  p-2 hidden"
      }
    >
      <div className="w-full flex items-center justify-start">
        <div className="dark:bg-[#1b1f23] flex p-2">Comments</div>
      </div>

      <div className=" w-full gap-2 flex flex-col ">
        {Array.isArray(comments) && comments.length > 0
          ? comments.slice(0, visibleComments).map((item) => {
              return (
                <CommentCard
                  key={item?.comment_id || item?._id}
                  img={item?.account?.profilePicture || alternativeProfile}
                  companyName={item?.account?.party}
                  id={item?.account?._id}
                  time={item?.time}
                  comment={item?.text}
                  likes={item?.likes}
                  replays={item?.repays}
                  postId={item?.post_id}
                  account_id={account_id}
                  user_id={item?.user_id}
                  nuberofcomment={12}
                  comment_id={item?.comment_id}
                  onCommentDelete={handleCommentDelete}
                />
              );
            })
          : null}
        {LikeCount > 2 ? (
          <div className="w-full flex items-center justify-center">
            <p
              className="font-bold text-smallP md:text-midP lg:text-largeP cursor-pointer"
              onClick={() => {
                setVisibleComments(visibleComments + 2);
                if (visibleComments + 2 >= LikeCount) {
                  setShowSeeMore(false);
                }
              }}
            >
              <div className="flex flex-col justify-center items-center">
                <p className="text-[#555555] font-bold">Load comments</p>
                <p className="text-[12px] text-[#A7A7A7]">
                  {LikeCount - 2} more comment{LikeCount > 1 ? "s" : ""}
                </p>
              </div>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
