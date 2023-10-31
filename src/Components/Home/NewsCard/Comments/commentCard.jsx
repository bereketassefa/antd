import React, { useEffect, useRef, useState } from "react";
import Avatar from "../../../../Fields/Avatar/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import profilePlaceHolder from "../../../../assets/logo/newCompanyPlaceHolder.png";
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import Verifide from "../../../../assets/logo/verified.png";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TiArrowForwardOutline } from "react-icons/ti";
import PropTypes from "prop-types";
import { Message, Rplay } from "../../../../data";
import RplayCard from "../../CardHolder/RplayCard";

export default function CommentCard({
  account_id,
  id,
  img,
  companyName,
  time,
  comment,
  likes,
  replays,
  props,
  Uid,
  user_id,
  comment_id,
  onCommentDelete,
  nuberofcomment,
}) {
  CommentCard.propTypes = {
    account_id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    comment_id: PropTypes.string,
    companyName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    replays: PropTypes.array,
    props: PropTypes.object,
  };

  const [cookies] = useCookies(["user"]);
  const [showReplays, setShowReplays] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showFullComment, setShowFullComment] = useState(false);

  const [divHeight, setDivHeight] = useState("auto");
  const commentCardRef = useRef(null);

  const navigate = useNavigate();
  const deleteCardRef = useRef(null);
  const onShowReplay = () => {
    setShowReplays(!showReplays);
  };

  const toggleDeleteOption = (event) => {
    event.stopPropagation(); // Log this
    setShowDeleteOption(!showDeleteOption);
  };

  const hadleNavigateProfile = async (e) => {
    e.preventDefault();
    // navigate(`/feed/profile/${_id}`)

    try {
      navigate(`/feed/profile/${id}`);

      // console.log(cookies.user._id)
      // window.location.href = `/feed/profile/${Uid}`;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAccountDataForProfile = async () => {
      try {
        const url = `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${id}`;
        // const url= `http://localhost:8010/account/${cookies?.user._id}`;
        await axios
          .get(url)
          .then((res) => {
            // console.log(res)
            if (res?.data) {
              setProfilePic(res?.data[0]?.profilePicture);
            }
          })
          .catch((error) => {
            // message.error('Cant find user account')
          });
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };

    fetchAccountDataForProfile();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        deleteCardRef.current &&
        !deleteCardRef.current.contains(event.target)
      ) {
        setShowDeleteOption(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleDeleteComment = async () => {
    console.log("Delete comment clicked");
    setLoading(true);

    try {
      const url = `${import.meta.env.VITE_DELETE_COMMENT_API}/${comment_id}`;
      console.log("API URL:", url);

      const response = await axios.delete(url);
      console.log("API Response:", response);
      if (response.status === 200) {
        console.log("Calling onCommentDelete with comment_id:", comment_id);
        onCommentDelete(comment_id);
        console.log("Comment deleted successfully");
      } else {
        console.error(
          "Failed to delete comment:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      setLoading(false);
      console.error("API Error:", error);
      console.error("Error Details:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   // console.log("Comment ID:", id);
  //   // console.log("User ID from cookies:", cookies.user._id);
  // }, [props]);

  // console.log('deleteCardRef.current:', deleteCardRef.current);
  // console.log('showDeleteOption:', showDeleteOption);
  // const check = Uid === cookies?.user?.Uid
  // console.log('check:', check);
  // console.log('post Uid:', Uid);

  const maxLength = 40;

  let truncatedComment = comment;
  if (!showFullComment && comment.length > maxLength) {
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

  const onShowReplays = () => {
    setShowReplays(!showReplays);
  };

  return (
    <>
      <div>
        {" "}
        <div className=" w-full flex gap-2   h-auto ">
          <div className="flex rounded-full w-15 h-15 ">
            <div>
              <Avatar
                onClick={hadleNavigateProfile}
                img={profilePic ? profilePic : alternativeProfile}
              />
            </div>
          </div>
          <div className="dark:bg-[#1b1f23] dark:border  bg-white flex flex-col w-full rounded-r-lg   rounded-bl-lg  border-2 gap-3 px-2">
            <div className="w-full flex items-center justify-between ">
              <Link to="" className="flex  justify-center items-center gap-2">
                <h1
                  onClick={hadleNavigateProfile}
                  className="dark:text-white text-smallP md:text-midP lg:text-largeP font-bold"
                >
                  {companyName}
                </h1>
                <div>
                  <img src={Verifide} alt="Verifide image" />
                </div>
              </Link>
              {/* {console.log("Checking conditions: ", account_id, id, cookies.user._id)} */}
              {(user_id === cookies?.user?.Uid ||
                Uid === cookies?.user?.Uid) && (
                <div
                  ref={deleteCardRef}
                  className="relative flex justify-center items-center gap-2"
                >
                  <span className="dark:text-white text-smallP md:text-midP text-gray-500 ">
                    {time} 7:30 am
                  </span>
                  <BsThreeDots
                    onClick={toggleDeleteOption}
                    className="text-2xl text-[#555555]"
                  />

                  {showDeleteOption && (
                    <div className="absolute right-3 top-2 bg-white p-2 rounded shadow-lg z-10">
                      <button
                        onClick={handleDeleteComment}
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
                {truncatedComment}
                {!showFullComment && comment.length > maxLength && (
                  <span
                    className="text-primary cursor-pointer"
                    onClick={handleSeeMoreClick}
                  >
                    ...see more
                  </span>
                )}
              </p>

              <div className=" flex   items-center  justify-end gap-2 ">
                {/* <p className="dark:text-white text-smallP md:text-midP lg:text-largeP text-secondary cursor-pointer">
              Likes <span>{likes === 0 ? "" : likes}</span>
            </p> */}
                <p
                  className="dark:text-white text-smallP flex items-center gap-1 justify-center md:text-midP lg:text-largeP cursor-pointer"
                  onClick={onShowReplays}
                >
                  Replay
                  <span>{replays?.length}</span>
                  <TiArrowForwardOutline />
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="flex justify-end text-[12px] text-[#A7A7A7]">
          {nuberofcomment} Replies
        </p>
      </div>
      <div className={showReplays ? "flex flex-col gap-2 ml-[45px]" : "hidden"}>
        {Rplay?.map((Rplay) => (
          <RplayCard
            key={Rplay.comment_id}
            companyName={Rplay.companyName}
            time={Rplay.time}
            comment={Rplay.comment}
            replays={Rplay.replays}
            Uid={Rplay.Uid}
            user_id={Rplay.user_id}
            comment_id={Rplay.Rplay_id}
          />
        ))}
      </div>
    </>
  );
}
