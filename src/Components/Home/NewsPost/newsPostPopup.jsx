import React, { useEffect, useState } from "react";
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

export default function NewsPostPopup({ isOpen, handleClose }) {
  const [fileList, setFileList] = useState([]);
  const [description, setDescription] = useState(""); // State to store the user's input description
  const [cookies] = useCookies(["User"]); // If you are using cookies for authentication
  const [imagesSelected, setImagesSelected] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const [profile,setProfilePic]=useState(null);

  const showWarningModal = () => {
    setWarningVisible(true);
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

  const handlePublish = async () => {
    if (!imagesSelected) {
      showWarningModal();

      return;
    }

    // Prepare the form data to be sent to the backend API
    const formData = new FormData();
    formData.append("Uid", cookies?.user.Uid); // Assuming you have stored the user's ID in cookies
    formData.append("description", description);
    fileList.forEach((file) => {
      formData.append("image", file.originFileObj);
    });

    try {
    
      // Make a POST request to the backend API
      await axios
        .post(import.meta.env.VITE_POST_NEWS, formData) // Replace '/api/timeline' with the appropriate backend API endpoint URL
        .then((response) => {
          if (response) {
            message.success('Upload sucess')
            // Handle the response from the backend if needed
            console.log("Data inserted successfully");
            handleClose();
          }
       
        })
        .catch((error) => {
          if (error.message === "Network Error") {
            message.error("Network Error: Failed to post.");
          
          } else {
            console.error("Error inserting data:", error);
          }
        });
    } catch (error) {
      message.error("Faild to post");
      handleClose();
    }
  };
  useEffect(() => {
    const fetchAccountDataForProfile = async () => {
        try {
            // const url= `http://localhost:8010/account/${cookies?.user._id}`;
            await axios.get(`https://account.addispay.et/account/${cookies?.user._id}`)
            .then((res)=>{
                // console.log(res)
                if(res?.data){
                    setProfilePic(res?.data[0]?.profilePicture);
                   
                }
               
            })
            .catch((error)=>{
                message.error('Error occurred'+ error)
            })
   
        } catch (error) {
            console.error("Error fetching profile picture:", error);
        }
    };

    fetchAccountDataForProfile();
   
}, []);
  return (
    <Modal
      open={isOpen}
      onCancel={handleClose}
      footer={[]}
      style={{
        top: 80,
        borderRadius: 0,
      }}
      width={800}
    >
      <Modal
        title="Warning"
        visible={warningVisible}
        onOk={closeWarningModal}
        onCancel={closeWarningModal}
        okText="Ok"
        cancelText="Cancel"
      >
        <p>Please select at least one image before publishing.</p>
      </Modal>
      <div className="w-full md:p-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Avatar img={profile?profile: alternativeProfile } />
          <h1 className="text-smallP md:text-midP lg:text-largeP font-bold">
            {cookies?.user.party}
          </h1>
        </div>
        <div className="w-full">
          <textarea
            className="w-full border-none p-3 outline-none text-smallP md:text-midP lg:text-largeP"
            placeholder="Write something here ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="w-full p-2 pb-0">
          <ul className="w-full flex items-center justify-center md:justify-start gap-4">
            <ImgCrop rotationSlider>
              <Upload
                listType="picture-card"
                maxCount={5}
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && (
                  <p>
                    <FontAwesomeIcon
                      className="text-secondary text-smallT"
                      icon={faImage}
                    />{" "}
                    <p className="text-smallP">Image</p>
                  </p>
                )}
              </Upload>
            </ImgCrop>
            {/* Other upload options (video and document) */}
          </ul>
        </div>
        <Divider className="bg-gray-300" />
        <div className="w-full flex items-center justify-center">
          <button
            className="bg-secondary w-[113px] h-[49px] text-white text-smallP md:text-midP lg:text-largeP"
            onClick={handlePublish}
          >
            Publish
          </button>
        </div>
      </div>
    </Modal>
  );
}
