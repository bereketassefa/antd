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
export default function CommentContainer({ account_id, id, isOpen }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [visibleComments, setVisibleComments] = useState(2);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [cookies] = useCookies(["User"]);
  const [profilePic, setProfilePic] = useState(null);

  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);
  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return; // Ensure comment is not just whitespace

    try {
      const url = `${import.meta.env.VITE_COMMENT}`;
      const response = await axios.post(url, {
        post_id: id,
        parent_comment_id: null,
        user_id: cookies?.user.Uid.toString(),
        text: commentText,
      });

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Failed to post comment");
      }

      // Assume the response data has the new comment object
      const newComment = response.data;

      // Add the new comment to the existing comments
      setComments((prevComments) => [...prevComments, newComment]);

      // Clear the text input
      setCommentText("");
      setRefreshComments(!refreshComments);
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCommentSubmit();
    }
  };

  // console.log(id)
  useEffect(() => {
    async function fetchComments() {
      try {
        const url = `${import.meta.env.VITE_GET_COMMENT}/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setComments(data);
        // console.log(data)
        if (data.length <= 2) {
          setShowSeeMore(false);
        }
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    }
    fetchComments();
  }, [id, refreshComments]);

  // console.log(id)
  useEffect(() => {
    const fetchAccountDataForProfile = async () => {
      try {
        const url = `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${
          cookies?.user._id
        }`;
        // const url= `http://localhost:8010/account/${cookies?.user._id}`;
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

  return (
    <div
      className={
        isOpen
          ? "w-full flex flex-col gap-4 p-2 "
          : "w-full flex flex-col gap-4 p-2 hidden"
      }
    >
      <div className="flex gap-2 items-center">
        <div className="flex items-center justify-center w-fit">
          <Avatar img={profilePic ? profilePic : alternativeProfile} />
        </div>
        <div className="flex flex-col items-end justify-center border border-primary w-full h-[45px] rounded-[5px]">
          <input
            type="text"
            className="dark:bg-[#1b1f23]  flex w-full h-full outline-none pl-3 text-smallP md:text-midP lg:text-largeP"
            placeholder="Add a comment ..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="absolute pr-4 flex gap-2">
            <IoMdSend className="text-largeP md:smallT text-primary" />
            <FontAwesomeIcon
              icon={faSmile}
              className="text-largeP md:smallT text-primary"
            />
            <FontAwesomeIcon
              icon={faImage}
              className="text-largeP md:smallT text-primary"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-start">
        <div className="dark:bg-[#1b1f23] flex p-2 bg-lightBg">
          <select className="dark:text-white outline-none bg-transparent text-smallP md:text-midP lg:text-largeP">
            <option className="dark:bg-[#1b1f23] text-smallP md:text-midP lg:text-largeP">
              Most Recent
            </option>
            <option
              className="dark:bg-[#1b1f23] text-smallP md:text-midP lg:text-largeP"
              value=""
            >
              Yesterday
            </option>
          </select>
        </div>
      </div>

      <div className=" w-full flex flex-col gap-4">
        {Array.isArray(comments)
          ? comments.slice(0, visibleComments).map((items) => {
              return (
                <CommentCard
                  key={items?.id || items._id} // Assuming `items` has a unique ID field
                  img={items?.img}
                  companyName={items?.party?.party[0]?.party?.businessname}
                  id={items?.account?._id}
                  time={items?.time}
                  comment={items?.text}
                  likes={items?.likes}
                  replays={items?.repays}
                  postId={items.post_id}
                  account_id={account_id}
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
