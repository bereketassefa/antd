import React, { useEffect, useState } from "react";
import logos from "../../assets/logo/addisLogoS.png";
import logo from "../../assets/logo/addisLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faSearch,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faMessage } from "@fortawesome/free-regular-svg-icons";
import alternativeProfile from "../../assets/image/alternativeProfile.png";
import DropMenu from "./DropMenu/dropMenu";
import { useMediaQuery } from "react-responsive";
import Avatar from "../../Fields/Avatar/avatar";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { useCookies } from "react-cookie";
import axios from "axios";
import SearchCard from "./SearchAllCompo/SearchCard";
import { useToast } from '../Toast/toastContext';
import { ToastContainer, toast } from 'react-toastify';
import { UpSquareTwoTone } from "@ant-design/icons";
export default function Topbar() {
  function truncateCompanyName(name) {
    return name && name.length > 8 ? name.substring(0, 8) + "..." : name;
  }
  const [profilePic, setProfilePic] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationCount, setNotificationsCount] = useState();
  const [searchInput, setSearchInput] = useState("");
  const isScreenMdOrLarger = useMediaQuery({ minWidth: 768 });
  const [cookies, removeCookie] = useCookies(["user"]);

  const handleHover = () => {
    setDropDown(!dropDown);
  };
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogOut = () => {
    removeCookie(["user"]);
    window.location.reload(true);
  };
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    console.log("showResults changed:", showResults);
  }, [showResults]);
  
  const handleSearch = async () => {
    if (searchInput.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    try {
      const url = 'http://localhost:8031/partially'; // Replace with your actual URL
      const response = await axios.post(url, {
        query: searchInput,
      });

      const formattedResults = response.data.map((item) => {
        let result = { entityType: item.entityType };
        if (item.entityType === 'party') {
          result.name = item.party.businessname;
          result.Uid = item.Uid
        } else if (item.entityType === 'product') {
          result.name = item.productName;
          result.Uid= item.Uid
        }
        return result;
      });

      setSearchResults(formattedResults);
      setShowResults(true); 
    } catch (error) {
      console.error("Error performing search", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput]);


  useEffect(() => {
    handleSearch();
  }, [searchInput]);
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
            // console.log(res)
            if (res?.data) {
              setProfilePic(res?.data[0]?.profilePicture);
              // console.log(res?.data[0]?.profilePicture)
            }
            // message.error('Cant find the image url')
          })
          .catch((error) => {
            // message.error('Cant find user account')
          });
        // let response = await fetch(url);
        // let data = await response.json();
        // console.log("Data received from server: ", data);  // Debugging line

        UpSquareTwoTone
        // console.log("Profile Picture URL from server:", data?.[0].profilePicture);
        // setProfilePic(data?.[0].profilePicture);
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };

    fetchAccountDataForProfile();
  }, []);

  // console.log("Current Profile Picture URL:", profilePic);
  // console.log(profilePic)
  const hadleNavigateProfile = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_FIND_MY_DATA}/${cookies.user._id}`;
      await axios.get(url);
      //  console.log(response?.data)
      //   setProfilePic(response?.data?.account[0]?.profilePicture)

      // console.log(cookies.user._id)
      window.location.href = `/feed/profile/${cookies.user._id}`;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const url = `${import.meta.env.VITE_UNSEEN_NOTIFICATION}/${
          cookies?.user._id
        }`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setNotificationsCount(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    // fetchNotifications();
    const Interval = setInterval(() => {
      fetchNotifications();
    }, 1000);
  }, []);

  const { toastMessage, hideToast } = useToast();

useEffect(() => {
  if (toastMessage) {
    toast.success(toastMessage, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 });
    hideToast();
  }
}, [toastMessage]);
// In your top-level component, e.g., App.js

useEffect(() => {
  // Initialize theme from localStorage right when the app mounts
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);

  return (
    <>
      <div className="dark:bg-[#1b1f23] z-20 w-full drop-shadow-lg h-topbarH bg-topbarBg border-1 border-[rgba(0, 0, 0, 0.10)] p-3 flex items-center justify-center fixed md:sticky ">
        <div className="flex  w-full md:max-w-[1120px] items-center justify-between">
          <div className="w-[50px] h-[45px] md:w-[208px] md:h-[33px]   flex items-center justify-center">
            {isScreenMdOrLarger ? (
              <Link to={"/feed"}>
                {" "}
                <img src={logo} alt="" className="w-full" />
              </Link>
            ) : (
              <Link to={"/feed"}>
                <img src={logos} alt="" className="w-full" />
              </Link>
            )}
          </div>
          <div className="flex gap-[1rem] items-center ">
            <div className="flex gap-[1rem] items-center">
              {/* search bar */}
              <div className=" relative">
                <div className="dark:bg-[#38434f] flex gap-2 border-[2px] border-blue-800 py-[10px] px-4 items-center min-w-[300px] ">
                  <div>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xl text-gray-500 "
                    />
                  </div>
                  <input
                    className="outline-none text-[17px] w-full"
                    type="text"
                    value={searchInput}
                    placeholder="Search"
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                  />
                </div>
                {searchInput && (
                  <div className="absolute bg-white w-full p-1 border-[2px] border-blue-800 translate-y-[1px]">
                    <div className="flex flex-col  ">
                      {searchResults.map((result, index) => (
                        <SearchCard
                          key={index}
                          id={result.id}
                          name={result.name}
                          type={result.type} // This will be either "business" or "product"
                          image={
                            result.type === "business"
                              ? result.profilePicture
                              : result.imageUrl
                          } // Pass the appropriate image based on the type
                        />
                      ))}
                    </div>
                    <hr className="border-[1px] border-blue-800" />
                    <Link
                      to={`/feed/SearchNav/${searchInput}`}
                      onClick={() => setSearchInput("")}
                    >
                      {/* <p className="flex justify-center text-primary ">
                        See All results
                      </p> */}
                    </Link>
                  </div>
                )}
              </div>

              {/* <SearchRoute  /> */}
              {/* message  */}
              <Link to={"/feed/notifications"}>
                <Badge count={notificationCount}>
                  <FontAwesomeIcon icon={faBell} className="dark:text-white text-largeT" />
                </Badge>
              </Link>
              {/* notification */}
              {/* <Link to={"/feed/messages"}>
                <FontAwesomeIcon icon={faMessage} className="dark:text-white text-largeT" />
              </Link> */}
            </div>
            <FontAwesomeIcon
              icon={!menuOpen ? faBars : faSquareXmark}
              className={
                !menuOpen
                  ? "text-smallT text-primary md:hidden cursor-pointer "
                  : "text-smallT text-secondary md:hidden cursor-pointer "
              }
              onClick={handleMenu}
            />
            <div
              className="hidden md:flex items-center jutify-center flex-col "
              onClick={handleHover}
              // onMouseLeave={handleLeaveHover}
            >
              <div className=" flex items-center gap-2">
                <Avatar
                  img={profilePic ? profilePic : alternativeProfile}
                  alt="image"
                />

                <div className=" flex items-center gap-2">
                  <h1 className="dark:text-white text-smallP md:text-midP lg:text-largeP">
                    {truncateCompanyName(cookies?.user.party)}
                  </h1>
                  <FontAwesomeIcon className="dark:text-white" icon={faCaretDown} />
                </div>
              </div>
              <div
  className={
    dropDown
      ? "rounded-lg dark:bg-[#1b1f23] absolute mt-[65px] w-[208px] drop-shadow-lg bg-topbarBg transition ease-in-out delay-150"
      : "h-[0px] overflow-hidden absolute mt-[65px] w-[208px] drop-shadow-lg transition ease-in-out delay-150"
  }
>
  <ul className="flex flex-col w-full h-full items-center justify-center">
    <Link onClick={hadleNavigateProfile} className="w-full">
      <li className="w-full p-3 items-center justify-start hover:bg-lightPrimaryHover">
        <p className="dark:text-white text-smallP md:text-midP lg:text-largeP">
          {" "}
          View Profile
        </p>
      </li>
    </Link>
    <hr className="w-full border-t border-gray-300 dark:border-gray-700" /> {/* Added this line */}
    <li
      className="w-full p-3 items-center justify-start  hover:bg-lightPrimaryHover"
      onClick={handleLogOut}
    >
      <p className="dark:text-white text-smallP md:text-midP lg:text-largeP">
        Sign Out
      </p>
    </li>
  </ul>
</div>

            </div>
          </div>
        </div>
      </div>
      <DropMenu image={profilePic} isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
}
