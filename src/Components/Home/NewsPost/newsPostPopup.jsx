import React, { useEffect, useState,useRef } from "react";
import { Button, Divider, Modal, message } from "antd";
import profilePlaceHolder from "../../../assets/logo/profilePlaceHolder.png";
import Avatar from "../../../Fields/Avatar/avatar";
import { faFile, faImage } from "@fortawesome/free-regular-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios"; // Import axios for making API requests
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import backarrow from "../../../assets/image/backarrow.png";
// import addPost from "../../../assets/image/addimage.png";
import Topbar from "../../Topbar/topbar";
import BottomNav from "../../../Layouts/Primary/BottomNav";

export default function NewsPostPopup({ isOpen, handleClose }) {
  const [fileList, setFileList] = useState([]);
  const [description, setDescription] = useState(""); // State to store the user's input description
  const [cookies] = useCookies(["user"]); // If you are using cookies for authentication
  const [imagesSelected, setImagesSelected] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const [profile, setProfilePic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const windowWidth = useRef(window.innerWidth);
  const [showState, setShowState] = useState(true)

  const [theme, setTheme] = useState("light");
  const showWarningModal = () => {
    setWarningVisible(true);
  };
  const headers = {
    "x-auth-token": `${import.meta.env.VITE_TOKEN_TIMELINE}`,
  };
  const closeWarningModal = () => {
    setWarningVisible(false);
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setImagesSelected(newFileList.length > 0);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  // const modal = Modal.info();

// const closeModal = () => modal.destroy();

// modal.update({
//   title: 'Updated title',
//   content: (
//     <Button onClick={closeModal}>Destroy</Button>
//   ),
// });

  
   
  const handlePublish = async () => {
    if (!imagesSelected) {
      showWarningModal();
      return;
    }
    setIsLoading(true);

    const formData = new FormData();

    // Append Uid and description outside of the loop
    formData.append("description", description);
    formData.append("Uid", cookies?.user?.Uid);

    fileList.forEach((file) => {
      formData.append("image", file.originFileObj);
    });
    for (let [key, value] of formData.entries()) {
      // console.log(key, value);
    }

    try {
      const url = `${import.meta.env.VITE_POST_NEWS}`;
      // console.log('Sending request to:',formData ,url);
      const response = await axios.post(url, formData, { headers: headers });
      console.log("Response received:", response);
      if (response.statusCode === 400) {
        message.error("File size should not exceed 5 MB");
      }
      if (response.status === 200) {
        message.success("Upload successful");
        // console.log("Data inserted successfully");
        handleClose();
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      message.error("Error: Failed to post .");
    } finally {
      setIsLoading(false);
      
    }
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'docs';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG/docs file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('File must smaller than 5MB!');
    }
    return isJpgOrPng && isLt5M;
  };
  useEffect(() => {
    const fetchAccountDataForProfile = async () => {
      try {
        // console.log(cookies?.user._id)
        const url = `${import.meta.env.VITE_FETCH_DATA_BY_ACCOUNT_ID}/${
          cookies?.user._id
        }`;

        await axios
          .get(url)
          .then((res) => {
            // console.log(res)
            if (res?.data) {
              setProfilePic(res?.data[0]?.profilePicture);
            }
          })
          .catch((error) => {
            // message.error('Error occurred '+ error)
          });
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };

    fetchAccountDataForProfile();
  }, []);

  useEffect(() => {
    // Reading from localStorage when component mounts
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  return (
    <div>
      <Modal
        title="Warning"
        visible={warningVisible}
        onCancel={closeWarningModal}
        footer={[
          <Button key="ok" type="primary" onClick={closeWarningModal} ghost>
            OK
          </Button>,
        ]}
        >
        <p>Please select at least one image before publishing.</p>
      </Modal>

      <Modal
        className={`${theme === "dark" ? "dnewspost" : "newspost"}`}
        open={isOpen}
        onCancel={handleClose}
        footer={[]}
        // open ={showState}
        
        closable={false}
        
        // mask={false}
        style={windowWidth.current < 640?{
          top: '56px',
          right:0,
          borderRadius: 0,
          margin:0,
          height:'100vh',
          
          zIndex:0,
          // width:'100vw',
          overflow:'clip',
          maxWidth:'100%',
          boxShadow:'none' ,
          // content: (
          //   <Button onClick={handleCloseModal}>Destroy</Button>
          // ),
          
          
          // marginRight:0,
          // marginLeft:0,

          
          

        }:{
          top: 80,
          borderRadius: 0,
        }}
        width={windowWidth.current < 640? 1000:800}
      >
        {window.innerWidth < 640 ? <Topbar />:""}

        <div className="dark:bg-[#1b1f23] w-full md:p-4 flex flex-col gap-4  z-1000 ">
          <div className="sm:flex gap-2 items-center hidden">
            <Avatar img={profile ? profile : alternativeProfile} />
            <h1 className="dark:text-white text-smallP md:text-midP lg:text-largeP font-bold">
              {cookies?.user.party}
            </h1>
          </div>
          <div className="w-full mt-12">
            <textarea
              className="dark:bg-[#1b1f23] dark:text-white h-16   w-full border-none p-3 outline-none text-midP md:text-midP lg:text-largeP"
              placeholder="Write something here  ..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className=" w-full p-2 pb-0 ">
            <ul className="w-full flex items-center justify-center md:justify-start gap-4 ">
              {/* <ImgCrop
                rotationSlider
                modalOk={<div className="custom-ok">Ok</div>}
              > */}
              <Upload
                listType="picture-card"
                maxCount={3}
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                className= {`${windowWidth.current < 640? 'relative  flex justify-center p-8  h-[calc(100vh-46vh)] ':''} ` }>
                  
                {fileList.length < 5 && (
                  <p className={`${windowWidth.current < 640? " absolute bottom-6 right-6 ":''}`}>
                    {windowWidth.current < 640? (
                    <div className="border-2 border-gray-900 rounded-lg bg-gray-200 p-2 flex justify-center ">

                    {/* <img src={addPost} alt="+"  /> */}
                    </div>
                    ):(
                    <FontAwesomeIcon
                      className="dark:text-white text-secondary text-smallT "
                      icon={faImage}
                    />,
                    <p className="dark:text-white text-smallP">Image</p>) 
                  }
                  </p>
                )}
              </Upload>
              {/* </ImgCrop> */}
              {/* Other upload options (video and document) */}
            </ul>
          </div>
          <Divider className=" bg-gray-300 hidden sm:block" />
          <div className="w-full flex items-center justify-center">
            <button
              className="bg-secondary w-[113px] h-[49px] text-white text-smallP md:text-midP lg:text-largeP 
              sm:flex justify-center items-center no-hover hidden"
              onClick={handlePublish}
              disabled={isLoading} // Disable button during loading
            >
              {isLoading ? <div className="spinner"></div> : "Publish"}
            </button>
            <button
              className="bg-[#3222C6] w-[70px] h-[36px] text-white text-smallP md:text-midP lg:text-largeP 
              flex justify-center items-center no-hover absolute top-8 right-8 rounded-lg sm:hidden"
              onClick={handlePublish}
              disabled={isLoading} // Disable button during loading
            >
              {isLoading ? <div className="spinner"></div> : "Publish"}
            </button>

            <button
            className="bg-[#3222C6] w-[70px] h-[36px] text-white text-smallP md:text-midP lg:text-largeP 
            flex justify-center items-center no-hover absolute top-8 left-8 rounded-lg hidden"
            // onClick={()=>setShowState(false)} //here make showForm to false to close the modal

            // onClick={handleClose}
            disabled={isLoading} // Disable button during loading
            >back</button>
            <button className="text-4 absolute top-10 left-0 text-gray-600 font-bold 
            flex justify-center align-middle border-0 items-center" onClick={handleClose}><img src={backarrow}/> back</button>

            {/* Add the following styles to create a spinner */}
            <style jsx className="no-hover:hover">{`
              .spinner {
                border: 4px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                border-top: 4px solid white;
                width: 24px;
                height: 24px;
                animation: spin 1s linear infinite;
              }
              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            `}</style>
          </div>
        </div>
        {window.innerWidth < 640 ? <BottomNav />:""}

      </Modal>
    </div>
  );
}
