import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "../../../Fields/Avatar/avatar";
import { useCookies } from "react-cookie";
import { format } from "timeago.js";
import axios from "axios";
import { Link } from "react-router-dom";
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import Verifide from "../../../assets/logo/verified.png";
import { TiArrowForwardOutline } from "react-icons/ti";
const RplayCard = ({comment_id,post_id, companyName, time, comment, replays, img }) => {
  const deleteCardRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [showFullComment, setShowFullComment] = useState(false);
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [cookies] = useCookies("user");
  const [comments,setComments] =useState([])

  const headers = {
    "x-auth-token": `${import.meta.env.VITE_TOKEN_TIMELINE}`,
  };
  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return; // Ensure comment is not just whitespace

    try {
      const url = `${import.meta.env.VITE_COMMENT_Replies}`;
      const response = await axios.post(
        url,
        {
          post_id: post_id,
          replies_comments_id: comment_id,
          user_id: cookies?.user?.Uid.toString(),
          text: commentText,
        },
        {
          headers: headers,
        }
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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCommentSubmit();
    }
  };
  const maxLength = 40;

  let truncatedComment = comment;
  if (!showFullComment && comment?.length > maxLength) {
    truncatedComment = comment.slice(0, maxLength) + "...";
  }
  const handleSeeMoreClick = () => {
    setShowFullComment(!showFullComment);
    setShowFullComment(!showFullComment);

    // Update the height of the div
    if (commentCardRef.current) {
      setDivHeight(
        showFullComment ? "auto" : `${commentCardRef.current.scrollHeight}px`
      );
    }
  };

  return (
    <div className=" flex flex-col gap-2">
      <div className=" w-full flex gap-2   h-auto ">
        <div className="flex rounded-full w-15 h-15 ">
          <div>
            <Avatar
              // onClick={hadleNavigateProfile}
              img={profilePic ? profilePic : alternativeProfile}
            />
          </div>
        </div>
        <div className="dark:bg-[#1b1f23] dark:border   flex flex-col w-full rounded-r-lg bg-[#F4F6FF] rounded-bl-lg  border-2 gap-3 px-2    ">
          <div className="w-full flex items-center justify-between ">
            <Link to="" className="flex  justify-center items-center gap-2 ">
              <h1
                //   onClick={hadleNavigateProfile}
                className="dark:text-white text-smallP md:text-midP lg:text-largeP font-bold"
              >
                {companyName}
              </h1>
              <div>
                <img src={Verifide} alt="Verifide image" />
              </div>
            </Link>

            {(cookies?.user?.Uid || Uid === cookies?.user?.Uid) && (
              <div
                ref={deleteCardRef}
                className="relative flex justify-center items-center gap-2"
              >
                <span className="dark:text-white text-smallP md:text-midP text-gray-500 ">
                  {format(time)}
                </span>
                <BsThreeDots
                  // onClick={toggleDeleteOption}
                  className="text-2xl text-[#555555]"
                />

                {showDeleteOption && (
                  <div className="absolute right-3 top-2 bg-white p-2 rounded shadow-lg z-10">
                    <button
                      // onClick={handleDeleteComment}
                      className="..."
                      disabled={loading}
                    >
                      {loading ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="">
            <p
              className={`dark:text-white text-smallP md:text-midP lg:text-largeP  ${
                showFullComment
                  ? " h-auto overflow-hidden"
                  : "max-w-[400px] overflow-hidden"
              } `}
            >
              <p>{comment}</p>
              
              {/* {!showFullComment && (
                <span
                  className="text-gray-500 cursor-pointer"
                  onClick={handleSeeMoreClick}
                >
                  ...see more
                </span>
              )} */}
            </p>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default RplayCard;
