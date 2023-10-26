import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPencil,
  faShareNodes,
  faUserPlus,
  faUserCheck,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { IoClose } from "react-icons/io5";
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import Button from "../../../../Fields/Button/button";
import { useCookies } from "react-cookie";
import axios from "axios";
import { message } from "antd";
import { Modal } from "antd";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import CompanyPP from "./CompanyPP";
import { Link } from "react-router-dom";

export default function CompanyInfo({ data, Uid }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [UidData, setUid] = useState(null);
  const [showCancelRequestPopup, setShowCancelRequestPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies(["user"]);
  const [res, setRes] = useState(null);
  const [sender, setSender] = useState(null);
  const [countData, setCountData] = useState();
  const [profilePic, setProfilePic] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDeclineLoading, setDeclineLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [mymodalOpen, setMyModalOpen] = useState(false);
  const id = window.location.pathname.split("/")[3];

  const toggleModal = () => {
    setModalOpen(false);
  };

  //    console.log(Uid)
  const OwnerUid = cookies?.user.Uid;
  // const ownerid = cookies?.user._id;
  //  const anotherid= data?.account[0]?._id
  const isUserIdEqual = cookies.user._id === id;
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // <-- Set the selected file here
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        openModal();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      message.error("No file selected");
      return;
    }
  
    // Check file size on client side before uploading
    if (selectedFile.size > 5 * 1024 * 1024) {
      message.error("File size should not exceed 5 MB");
      return;
    }
  
    const formData = new FormData();
    formData.append("profilePicture", selectedFile);
    formData.append("_id", cookies?.user?._id);
  
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
    const url = `${import.meta.env.VITE_ACCOUNT_UPLOAD_PROFILE}`
      const response = await axios.post(
       url,
        formData,
        config
      );

      if (response.status === 200) {
        setSelectedImage(response?.data?.profilePicture);
        message.success("Profile updated successfully");
        closeModal();
      } else {
        // Handle other status codes here if needed
        message.error("An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      message.error(error.response ? error.response.data.error : "An error occurred");
    }
  };
  
  useEffect(() => {
    let intervalId1, intervalId2, intervalId3;

    const fetchData = async () => {
      try {
        if (!id) {
          console.warn("ID is not available");
          return;
        }
        const url = `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${id}`
        const response = await axios.get(url);

        if (response.status !== 200) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        if (response?.data) {
          setUid(response?.data[0]?.Uid);
          // handlecheckWhoisSender();  // Calling this function after setting Uid
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchAccountDataForProfile = async () => {
      try {
        if (!id) {
          return;
        }
        const url = `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${id}`
        await axios
          .get(url)
          .then((res) => {
            // console.log(res)
            if (res?.data) {
              setProfilePic(res?.data[0]?.profilePicture);
            }
          })
          .catch((error) => {
            console.warn(error);
          });
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };

    // Set intervals
    intervalId1 = setInterval(fetchData, 1000); // Runs every 1 second
    intervalId2 = setInterval(fetchAccountDataForProfile, 1000); // Runs every 1 second
    intervalId3 = setInterval(handlecheckWhoisSender, 1000); // Runs every 1 second

    // Clear intervals when component unmounts
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [UidData, OwnerUid, id]);

  const handlecheckWhoisSender = async () => {
    // Only proceed if both OwnerUid and anotherUid are available

    if (!UidData || !OwnerUid) {
      return;
    }
    setButtonLoading(true);
    // Set loading to true when fetching starts

    try {
      const url =`${import.meta.env.VITE_CHECK_WHO_IS_THE_SENDER}/${OwnerUid}/${UidData}`;
      const response = await fetch(url, {
        method: "GET",
      });

      const data = await response.json();
      setSender(data);
      // console.log(data)
      setIsLoading(false);
      setIsDataLoaded(true);
    } catch (error) {
      console.error(error);
      // setIsDataFetched(false);
    } finally {
      setButtonLoading(false); // Set loading to false when fetching is done
    }
  };

  const handleModalChangeClick = () => {
    openModal(false);
    document.getElementById("profileImageInput").click();
  };

  const [datacONENCTION, setConnection] = useState(null);
  const handleRequestConectionlClick = async () => {
    try {
      if (!UidData) {
        console.warn("UidData is not yet available");
        return;
      }
      const url = `${import.meta.env.VITE_SEND_CONNECION}`;
      const res = await axios.post(
        url,
        {
          node1: OwnerUid.toString(),
          node2: UidData.toString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setConnection(res);
    } catch (error) {
      console.error(
        "Error in handleRequestConectionlClick:",
        error.response ? error.response.data : error.message
      );
    }
  };
  async function checkTheStatus(ownerUid, UidData, setRes) {
    const url = `${
      import.meta.env.VITE_CHECK_THE_STATUS
    }/${ownerUid}/${UidData}`;
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setRes(response.data);
      // console.log(response?.data[0]?.relation?.properties?.id)
    } catch (error) {
      console.error(`Error fetching status: ${error}`);
    }
  }
  useEffect(
    () => {
      FetchCountRetation();
      // Async function inside useEffect should be executed this way
      checkTheStatus(OwnerUid, UidData, setRes);
    },
    [OwnerUid, UidData],
    1000
  );

  const FetchCountRetation = async () => {
    setIsLoading(true);
    try {
      const url = `${import.meta.env.VITE_COUNT_RELATION}/${UidData}`;
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const dataa = await response.json();
      setCountData(dataa.count);
      setIsLoading(false);
      // console.log(dataa);
    } catch (error) {
      console.error(error);
    }
  };
  // Runs only when Uid changes

  const handleAcceptClick = async () => {
    try {
      const url = `${import.meta.env.VITE_ACCEPT_THE_RELATION}/${
        res[0].relation?.properties?.id
      }`;
      const response = await fetch(url, {
        method: "POST", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      await response.json();
      //   console.log(data); // Process the response data if needed

      // Call FetchCountRetation here to update the count
      FetchCountRetation();
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }
  };

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

  // console.log(id)

  // Empty dependency array means this effect runs once when the component mounts
  const [buttonText, setButtonText] = useState("Connect");
  const [buttonIcon, setButtonIcon] = useState(
    <FontAwesomeIcon icon={faUserPlus} />
  );

  useEffect(() => {
    connectButton();
  }, [res, sender, OwnerUid]);

  const connectButton = () => {
    if (
      res &&
      res[0] &&
      res[0]?.relation &&
      res[0]?.relation?.properties?.status
    ) {
      const status = res[0]?.relation?.properties?.status;
      if (status === "Accepted") {
        // setButtonText("Connected");
        setButtonIcon(<FontAwesomeIcon icon={faUserCheck} />);
      } else if (status === "pending") {
        if (sender && sender?.sender === OwnerUid?.toString()) {
          setButtonText("Pending");
        } else if (sender && sender?.receiver === OwnerUid?.toString()) {
          setButtonText("Accept");
        }
      }
    }
  };

  // default icon

  const CancelRequestPopup = ({ onConfirm, onCancel }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div>
          <IoClose />
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p>Are you sure you want to cancel the request?</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancelClick}
              className="bg-blue-500 text-white py-1 px-4 rounded"
            >
              Yes
            </button>
            <button
              onClick={onCancel}
              className="bg-gray-300 py-1 px-4 rounded"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };

  // console.log(countData)
  if (isLoading) {
    return (
      <div className="w-full flex flex-col gap-2 mt-[-5rem] md:mt-[-10rem]   ">
        <div className="w-full flex items-end justify-between ">
          <div className="bg-white   p-0 ml-[1rem] md:ml-[3rem] mt-[2rem] md:mt-[6rem] w-[9rem] md:w-[130px] aspect-square flex justify-end">
            <div className="w-full flex items-center justify-center bg-gray-400 animate-pulse"></div>
          </div>
        </div>
        {/* Skeleton for Profile Image */}

        {/* Skeleton for Name */}
        <div className="ml-[3rem] w-[15rem] h-4 bg-gray-300 animate-pulse rounded"></div>

        {/* Skeleton for Relations */}
        <div className="ml-[3rem] w-[10rem] h-4 bg-gray-300 animate-pulse rounded"></div>
        <div className="ml-[3rem] w-[5rem] h-4 bg-gray-300 animate-pulse rounded"></div>
        {/* Skeleton for Button */}
        <div className="gap-2 ">
          <div className="ml-[4rem] w-[4rem] h-6 bg-gray-300 animate-pulse rounded">
            <div className="ml-[5rem] w-[4rem] h-6 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Modal
        open={mymodalOpen}
        onOk={() => setMyModalOpen(false)}
        onCancel={() => setMyModalOpen(false)}
        footer={[]}
      >
        <CompanyPP />
      </Modal>

      <div className="w-full flex flex-col gap-2 mt-[-5rem] md:mt-[-10rem] border-2 border-red-600">
        <div className="w-full flex items-end justify-between">
          <div className="bg-white  p-0 ml-[1rem] md:ml-[3rem] mt-[2rem] md:mt-[6rem] w-[9rem] md:w-[130px] aspect-square flex justify-end">
            <div className="w-full flex items-center justify-center">
              <img
                className="w-full object-cover h-full flex"
                src={profilePic ? profilePic : alternativeProfile}
                alt="Profile"
                onClick={() => {
                  if (isUserIdEqual) {
                    setMyModalOpen(true);
                  }
                }}
              />
            </div>
            <div className="bg-white p-[3px] rounded-full absolute mt-[-0.5rem] mr-[-0.5rem]">
              {data &&
                data.account &&
                data.account[0] &&
                data.account[0]._id === cookies?.user?._id && (
                  <div className="bg-secondary w-fit p-2 rounded-full flex cursor-pointer">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() =>
                        document.getElementById("profileImageInput").click()
                      }
                      className="text-white text-midP"
                    />
                  </div>
                )}
            </div>
          </div>

          {data &&
            data.account &&
            data.account[0] &&
            data.account[0]._id === cookies?.user?._id && (
              <Link to="/feed/settings/edit">
                {" "}
                <div className="mr-[1rem]">
                  <Button
                    text={"Edit Profile"}
                    filled={false}
                    color={"secondary"}
                  />
                </div>
              </Link>
            )}
        </div>
        <input
          type="file"
          id="profileImageInput"
          style={{ display: "none" }}
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
        <div className="flex flex-col gap-4 w-full  md:ml-[3rem] max-w-[600px]   ">
          <div className="w-full flex flex-col gap-1">
            <h1 className="dark:text-white flex gap-2 items-center text-smallT font-bold">
              {data?.account[0]?.party} <img alt="" />{" "}
              {/* {data?.account[0]?.party} <img src={verified} alt="" />{" "} */}
            </h1>

            <p className="dark:text-white w-full text-smallP">
              {data?.account[0]?.party}
            </p>
            <div className="flex gap-4 items-center">
              <span className="flex gap-2 items-center">
                <h1 className="dark:text-white font-bold text-smallP">
                  {countData ? countData : ""}
                </h1>
                <p className="dark:text-white text-smallP">Relations</p>
              </span>
              <span className="flex gap-2 items-center">
                {/* <h1 className='font-bold text-smallP'>2.4K</h1>
                                <p className='text-smallP'>Views</p> */}
              </span>
            </div>
          </div>
          {data &&
          data.account &&
          isDataLoaded &&
          data.account[0] &&
          data.account[0]._id !== cookies?.user?._id ? (
            <>
              {sender?.status === "Accepted" ? (
                <div className="w-full flex items-center justify-start gap-2 flex-wrap">
                  <Button
                    text={"Message"}
                    filled={false}
                    color={"secondary"}
                    icon={<FontAwesomeIcon icon={faMessage} />}
                    iconPossition="left"
                  />
                </div>
              ) : (
                <div className="w-full flex items-center justify-start gap-2 flex-wrap">
                  <Button
                    onClick={async () => {
                      if (buttonText === "Connect") {
                        setIsLoadingButton(true); // Show loading

                        await handleRequestConectionlClick();
                        await handlecheckWhoisSender();

                        setIsLoadingButton(false); // Hide loading
                        setButtonText("Pending"); // Update button text

                        await checkTheStatus();
                      } else if (buttonText === "Accept") {
                        setIsLoadingButton(true); // Show loading

                        await handleAcceptClick();
                        await handlecheckWhoisSender();
                        setIsAccepted(true); // Disable
                        setButtonText("Message");
                        setIsLoadingButton(false);
                      } else if (buttonText === "Pending") {
                        setIsLoadingButton(true);
                        handleCancelClick();
                        setButtonText("Connect");
                        setIsLoadingButton(false);
                      } else if (buttonText === "Decline") {
                        setIsLoadingButton(true);

                        await handleCancelClick();
                        setButtonText("Connect");
                        setIsLoadingButton(false);
                      }
                    }}
                    text={isLoadingButton ? null : buttonText} // if loading, don't show text
                    filled={true}
                    color={"secondary"}
                    icon={
                      isLoadingButton ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : (
                        buttonIcon
                      )
                    } // if loading, show spinner
                    iconPossition="left"
                    disabled={isAccepted}
                  />

                  {sender?.receiver === OwnerUid?.toString() &&
                    sender?.status === "pending" && (
                      <Button
                        text={isDeclineLoading ? "Loading..." : "Decline"}
                        filled={false}
                        color={"secondary"}
                        icon={<FontAwesomeIcon icon={faRemove} />}
                        iconPossition="left"
                        onClick={async () => {
                          setDeclineLoading(true);
                          await handleCancelClick();
                          setDeclineLoading(false);
                          setButtonText("Connect");
                        }}
                      />
                    )}
                </div>
              )}
            </>
          ) : null}
        </div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-2 rounded-lg">
              <div className=" flex justify-end  mb-1">
                <IoClose
                  className="text-red-700 text-xl"
                  onClick={toggleModal}
                />
              </div>
              <img
                // src={selectedImage}
                alt="Selected"
                className="mb-4 w-full h-48 object-cover"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleUploadClick}
                  className="bg-blue-500 text-white py-1 px-4 rounded"
                >
                  Upload
                </button>
                <button
                  onClick={handleModalChangeClick}
                  className="bg-gray-300 py-1 px-4 rounded"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Add your custom popups here */}
      {showCancelRequestPopup && (
        <CancelRequestPopup
          onConfirm={async () => {
            await handleCancelClick();
            setShowCancelRequestPopup(false);
          }}
          onCancel={() => setShowCancelRequestPopup(false)}
        />
      )}

      {/* End of custom popups */}
    </>
  );
}
