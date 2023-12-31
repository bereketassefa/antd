import React, { useEffect, useState } from "react";
import Avatar from "../../../Fields/Avatar/avatar";
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import {
  BiSolidUserPlus,
  BiMessageDetail,
  BiSolidUserCheck,
} from "react-icons/bi";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
 
const SearchCardTwo = ({ title, image, time, description, status,Uid }) => {
const [cookies] = useCookies(['user'])
const [AccountData , setAccountData]= useState(null)
const [res, setRes] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [isLoadingData, setIsLoadingData] = useState(true);


const OwnerUid = cookies?.user.Uid
  const checkUid= Uid !== cookies?.user?.Uid
  const truncateTitle = (title) => {
    return title.length > 15 ? title.substr(0, 15) + "..." : title;
  };
// console.log(Uid)
useEffect(() => {
  const fetchByUidData = async () => {
    try {
      const url = `${import.meta.env.VITE_FETCH_DATA_BY_UID_IN_ACCOUNT}/${Uid}`;
      const response = await axios.post(url);
      setAccountData(response.data)
      
      if (response.status !== 200) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      if (response?.data) {
        setAccountData(response.data);
        // handlecheckWhoisSender();  // Calling this function after setting Uid
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchByUidData();
}, [Uid]);
// console.log(AccountData)

const hadleNavigateProfile = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const url = `${import.meta.env.VITE_FIND_MY_DATA}/${AccountData._id}`;
    await axios.get(url);
    //  console.log(response?.data)
    //   setProfilePic(response?.data?.account[0]?.profilePicture)

    // console.log(cookies.user._id)
    window.location.href = `/feed/profile/${AccountData._id}`;
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);  // End loading
  }
};

const handleRequestConectionlClick = async () => {
  setIsLoading(true)
  try {
    // if (!UidData) {
    //   console.warn("UidData is not yet available");
    //   return;
    // }
    const url = `${import.meta.env.VITE_SEND_CONNECION}`;
    const res = await axios.post(
      url,
      {
        node1: OwnerUid.toString(),
        node2: AccountData?.Uid?.toString(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setIsLoading(false); 
    checkTheStatus()
    //  console.log(res);
  } catch (error) {
    setIsLoading(false);  
    console.error(
      "Error in handleRequestConectionlClick:",
      // error.response ? error.response.data : error.message
    );
  }
};

useEffect(()=>{
  checkTheStatus()
},[])

  async function checkTheStatus() {
    setIsLoadingData(true);  // Start data loading

    const url = `${import.meta.env.VITE_CHECK_THE_STATUS}/${OwnerUid}/${Uid}`;
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setRes(response?.data);
    } catch (error) {
      console.error(`Error fetching status: ${error}`);
    } finally {
      setIsLoadingData(false);  // End data loading
    }
  }
  const handleCancelClick = async () => {
    try {
      const url = `${import.meta.env.VITE_CANCEL_THE_RELATION}/${
        res[0]?.relation?.properties?.id
      }`;
      // console.log(    res[0].relation?.properties?.id)
      const response = await fetch(url, {
        method: "DELETE", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        return; // Handle non-successful response
      }

      await response.json();
      handlecheckWhoisSender();
      FetchCountRetation();
      //   console.log(data); // Process the response data if needed

      return true; // This will close the modal
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }

    // Handle cancel click logic here
  };


const ButtonSkeleton = () => (
  <div className="bg-white shadow-md rounded-lg py-3 w-[120px] animate-pulse">
    <p className="text-sm text-gray-300 flex justify-center items-center gap-1">
      <span className="block h-4 w-full rounded bg-gray-200"></span>
    </p>
  </div>
);

return (
  <div>
    <div className="flex justify-between grid-flow-col md:grid-cols-2 items-center p-2">
      <div className="flex gap-[7px]">
        <div>
          <Avatar onClick={hadleNavigateProfile} img={AccountData?.profilePicture ? AccountData?.profilePicture : alternativeProfile} />
        </div>
        <div className="flex flex-col">
          <h1 onClick={hadleNavigateProfile} className="font-bold text-[#000] text-[17px]">
            <Link>
             {truncateTitle(title).toLowerCase()}
            </Link>
           </h1>
          <p className="text-[13px] text-[#00000075]">{time}</p>
          {!checkUid && (
            <p className="text-[13px] text-[#00000075]">you</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {isLoadingData ? <ButtonSkeleton />: (
          <>
            {checkUid && (!res || res.length === 0) && (
              <div className="bg-secondary rounded-lg py-3 w-[120px]">
                <p onClick={handleRequestConectionlClick} className="text-sm text-white flex justify-center items-center gap-1">
                {isLoading ? ( // Show loading indicator for the Connect button
                      <span className="animate-spin h-4 w-4 border-t-2 border-b-2 border-white"></span>
                    ) : (
                      <>
                        <BiSolidUserPlus className="text-white text-lg" />
                        <Link>Connect</Link>
                      </>
                    )}
                  </p>
                </div>
            )}
            {res && res[0]?.relation?.properties?.status === 'Accepted' && (
              <div className="bg-primary rounded-lg py-3 w-[120px]">
                <p className="text-sm text-white flex justify-center items-center gap-1">
                  <BiMessageDetail className="text-white text-lg" />
                  Message
                </p>
              </div>
            )}
            {res && res[0]?.relation?.properties?.status === 'pending' && (
              <div className="bg-secondary rounded-lg py-3 w-[120px]">
                <p className="text-sm text-white flex justify-center items-center gap-1">
                  Pending
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
    <p className="text-[13px] text-[#00000075] ml-16">{description}</p>
  </div>
);
};

export default SearchCardTwo;