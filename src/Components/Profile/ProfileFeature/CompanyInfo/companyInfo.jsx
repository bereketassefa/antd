import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPencil,
  faShareNodes,
  faUserPlus,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import profileHolder from "../../../../assets/img/profileHolder.png";
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import Button from "../../../../Fields/Button/button";
import { useCookies } from "react-cookie";
import axios from "axios";
import { message } from "antd";

export default function CompanyInfo({ data, Uid }) {

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [UidData,setUid]= useState(null)
  const [showCancelRequestPopup, setShowCancelRequestPopup] = useState(false);
const [showDisconnectPopup, setShowDisconnectPopup] = useState(false);
const [isLoading, setIsLoading] = useState(false);
    const [cookies] = useCookies(["user"]);
  const [Data, setData] = useState(null);
 
   
    const [res, setRes] = useState(null);
    const [sender, setSender] = useState(null);
    const [countData, setCountData] = useState();
    const [profilePic, setProfilePic]= useState(null) 

  //    console.log(Uid)
  const OwnerUid = cookies?.user.Uid;
  // const ownerid = cookies?.user._id;
  const anotherUid = data?.account[0]?.Uid;
  //  const anotherid= data?.account[0]?._id

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);  // <-- Set the selected file here
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

    const formData = new FormData();
    formData.append("profilePicture", selectedFile);
    formData.append("_id", cookies.user._id);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post("https://account.qa.addissystems.et/uploads", formData, config);
      if (response.status === 200) {
        setSelectedImage(response.data.profilePicture);
        console.log(response.data.profilePicture)
         message.success("Profile picture uploaded successfully");
        closeModal();
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      message.error(error.response ? error.response.data : "An error occurred");
    }
  };

  const handleModalChangeClick = () => {
    openModal(false);
      document.getElementById("profileImageInput").click();
  };


  const handleRequestConectionlClick = async () => {
    try {
      const url= `${import.meta.env.VITE_SEND_CONNECION}`
      await axios.post(url, {
        node1:OwnerUid.toString(),
        node2: UidData.toString() 
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      // console.log("Successful Response:", response.data);
    } catch (error) {
      console.error("Error in handleRequestConectionlClick:", error.response ? error.response.data : error.message);
    }
  };
  
  async function checkTheStatus(ownerUid, UidData, setRes) {
    const url = `${import.meta.env.VITE_CHECK_THE_STATUS}/${ownerUid}/${UidData}`;
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setRes(response.data);
    } catch (error) {
      console.error(`Error fetching status: ${error}`);
    }
  }
  useEffect(() => {
    FetchCountRetation()
    // Async function inside useEffect should be executed this way
    checkTheStatus(OwnerUid, UidData, setRes);
  }, [OwnerUid, UidData]); 
  
    const FetchCountRetation = async () => {
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
        console.log(dataa)
      } catch (error) {
        console.error(error);
      }
    };
    // Runs only when Uid changes
  
    
  const handleAcceptClick = async () => {
    try {
      const url = `${import.meta.env.VITE_ACCEPT_THE_RELATION}/${res[0].relation?.properties?.id
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

  useEffect(() => {
    const handlecheckWhoisSender = async () => {
      // Only proceed if both OwnerUid and anotherUid are available
      if (!OwnerUid || !anotherUid) {
        console.warn("OwnerUid or anotherUid is not yet available");
        setIsLoading(true); // Set loading to true if IDs are not available
        return;
      }
  
      setIsLoading(true); // Set loading to true when fetching starts
  
      try {
     
        const url = `https://connection.qa.addissystems.et/connection/get/${OwnerUid}/${UidData}`;
        const response = await fetch(url, {
          method: "GET",
        });
  
        if (!response.ok) {
          throw new Error("Request failed");
        }
  
        const data = await response.json();
        setSender(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading to false when fetching is done
      }
    };
  
    handlecheckWhoisSender();
  }, [OwnerUid, UidData]);
  const handleCancelClick = async () => {
    try {
      const url = `${import.meta.env.VITE_CANCEL_THE_RELATION}/${
        res[0].relation?.properties?.id
      }`;
      // console.log(    res[0].relation?.properties?.id)
      const response = await fetch(url, {
        method: "DELETE", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      FetchCountRetation();

      //   console.log(data); // Process the response data if needed
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }
    // Handle cancel click logic here
  };


  let buttonText = "Connect";
  let buttonIcon = <FontAwesomeIcon icon={faUserPlus} />;  // default icon

 
  if (res && res[0] && res[0].relation && res[0].relation.properties.status) {
      const status = res[0].relation.properties.status;
  
      if (status === "Accepted") {
          buttonText = "Connected";
          buttonIcon = <FontAwesomeIcon icon={faUserCheck} />;
      } else if (status === "pending") {
          if (sender && sender.sender === OwnerUid.toString()) {
              buttonText = "Pending";
          } else if (sender && sender.receiver === OwnerUid.toString()) {
              buttonText = "Accept";
          }
      }
  }



  const id =window.location.pathname.split('/')[3]
  // console.log(id)

  useEffect(() => {
    const fetchAccountDataForProfile = async () => {
        try {
            // const url= `http://localhost:8010/account/${cookies?.user._id}`;
            await axios.get(`https://account.qa.addissystems.et/account/${id}`)
            .then((res)=>{
                // console.log(res)
                if(res?.data){
                    setProfilePic(res?.data[0]?.profilePicture);
                    setUid(res?.data[0]?.Uid);
                   
                }
               
            })
            .catch((error)=>{
                console.warn(error)
            })
   
        } catch (error) {
            console.error("Error fetching profile picture:", error);
        }
    };

    fetchAccountDataForProfile();
   
}, []);

const CancelRequestPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg">
        <p>Are you sure you want to cancel the request?</p>
        <div className="flex justify-end gap-4">
          <button onClick={handleCancelClick} className="bg-blue-500 text-white py-1 px-4 rounded">Yes</button>
          <button onClick={onCancel} className="bg-gray-300 py-1 px-4 rounded">No</button>
        </div>
      </div>
    </div>
  );
};

const DisconnectPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg">
        <p>Are you sure you want to disconnect?</p>
        <div className="flex justify-end gap-4">
          <button onClick={onConfirm} className="bg-blue-500 text-white py-1 px-4 rounded">Yes</button>
          <button onClick={onCancel} className="bg-gray-300 py-1 px-4 rounded">No</button>
        </div>
      </div>
    </div>
  );
};
// console.log(countData)
  return (
    
    <>
    
    <div className="w-full flex flex-col gap-2 mt-[-5rem] md:mt-[-10rem]">
                <div className="w-full flex items-end justify-between">
                <div className="bg-white w-fit p-0 ml-[1rem] md:ml-[3rem] mt-[2rem] md:mt-[6rem] w-[9rem] md:w-[130px] aspect-square flex justify-end">
    <div className="w-full flex items-center justify-center">
        <img className="w-full object-cover h-full flex" src={profilePic ? profilePic : alternativeProfile} alt="Profile" />
    </div>
    <div className="bg-white p-[3px] rounded-full absolute mt-[-0.5rem] mr-[-0.5rem]">
        {data && data.account && data.account[0] && data.account[0]._id === cookies.user._id && (
            <div className="bg-secondary w-fit p-2 rounded-full flex cursor-pointer">
                <FontAwesomeIcon
                    icon={faPencil}
                    onClick={() => document.getElementById("profileImageInput").click()}
                    className="text-white text-midP"
                />
            </div>
        )}
    </div>
</div>

                    {data && data.account && data.account[0] && data.account[0]._id === cookies.user._id && (
                        <div className="mr-[1rem]">
                            <Button text={"Edit Profile"} filled={false} color={"secondary"} />
                        </div>
                    )}
                </div>
                <input 
                    type="file" 
                    id="profileImageInput"
                    style={{ display: 'none' }} 
                    accept=".jpg, .jpeg, .png"
                    onChange={handleImageChange}
                />
        <div className="flex flex-col gap-4 w-full  md:ml-[3rem] max-w-[600px]   ">
          <div className="w-full flex flex-col gap-1">
            <h1 className="flex gap-2 items-center text-smallT font-bold">
              {data?.account[0]?.party} <img alt="" />{" "}
              {/* {data?.account[0]?.party} <img src={verified} alt="" />{" "} */}
            </h1>

            <p className="w-full text-smallP">{data?.account[0]?.party}</p>

            <div className="flex gap-4 items-center">
              <span className="flex gap-2 items-center">
                <h1 className="font-bold text-smallP">{countData? countData: '' }</h1>
                <p className="text-smallP">Relations</p>
              </span>
              <span className="flex gap-2 items-center">
                {/* <h1 className='font-bold text-smallP'>2.4K</h1>
                                <p className='text-smallP'>Views</p> */}
              </span>
            </div>
          </div>
          {data &&
            data.account &&
            data.account[0] &&
            data.account[0]._id !== cookies.user._id && (
              <div className="w-full flex items-center justify-start gap-2 flex-wrap">
                <Button
                
                  onClick={() => {
                    if (buttonText === "Connect") {
                      handleRequestConectionlClick();
                    } else if (buttonText === "Accept") {
                      handleAcceptClick();
                    } else if (buttonText === "Pending") {
                      setShowCancelRequestPopup(true);
                    } else if (buttonText === "Connected") {
                      setShowDisconnectPopup(true);
                    }
                  }}
                  
                  text={buttonText}
                  filled={true}
                  color={"secondary"}
                  icon={buttonIcon}
                  iconPossition="left"
                />

                <Button
                  text={"Message"}
                  filled={false}
                  color={"secondary"}
                  icon={<FontAwesomeIcon icon={faMessage} />}
                  iconPossition="left"
                />
              </div>
            )}
          {data &&
            data.account &&
            data.account[0] &&
            data.account[0]._id === cookies.user._id && (
              <div className="w-full flex items-center justify-start gap-2 flex-wrap">
                <Button
                  text={"Invite"}
                  filled={false}
                  color={"primary"}
                  icon={<FontAwesomeIcon icon={faShareNodes} />}
                  iconPossition={"left"}
                />
              </div>
            )}
        </div>
        {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg">
                        <img src={selectedImage} alt="Selected" className="mb-4 w-full h-48 object-cover"/>
                        <div className="flex justify-end gap-4">
                            <button onClick={handleUploadClick} className="bg-blue-500 text-white py-1 px-4 rounded">Upload</button>
                            <button onClick={handleModalChangeClick} className="bg-gray-300 py-1 px-4 rounded">Change</button>
                        </div>
                    </div>
                </div>
            )}
       

      </div>
        {/* Add your custom popups here */}
    {showCancelRequestPopup && (
      <CancelRequestPopup 
        onConfirm={() => {
          handleCancelClick();
          setShowCancelRequestPopup(false);
        }} 
        onCancel={() => setShowCancelRequestPopup(false)}
      />
    )}

    {showDisconnectPopup && (
      <DisconnectPopup 
        onConfirm={() => {
          handleCancelClick();
          setShowDisconnectPopup(false);
        }} 
        onCancel={() => setShowDisconnectPopup(false)}
      />
    )}
    {/* End of custom popups */}
  </>
    
  );
  
}
