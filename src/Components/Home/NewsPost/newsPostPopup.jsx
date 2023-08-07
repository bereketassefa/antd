import React, { useState } from 'react';
import { Button, Divider, Modal } from 'antd';
import profilePlaceHolder from '../../../assets/logo/profilePlaceHolder.png';
import Avatar from '../../../Fields/Avatar/avatar';
import { faFile, faImage } from '@fortawesome/free-regular-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCookies } from 'react-cookie';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from 'axios'; // Import axios for making API requests

export default function NewsPostPopup({ isOpen, handleClose }) {
  const [fileList, setFileList] = useState([]);
  const [description, setDescription] = useState(''); // State to store the user's input description
  const [cookies, setCookie, removeCookie] = useCookies(['User']); // If you are using cookies for authentication
  const [imagesSelected, setImagesSelected] = useState(false); 
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

  const handlePublish = () => {
    if (!imagesSelected) {
      // If no images are selected, show a popup message
      console.log('Please select at least one image before publishing.');
      return;
    }
  
    // Prepare the form data to be sent to the backend API
    const formData = new FormData();
    formData.append('Uid', cookies?.user.Uid); // Assuming you have stored the user's ID in cookies
    formData.append('description', description);
    fileList.forEach((file) => {
      formData.append('image', file.originFileObj);
    });
  
    // Make a POST request to the backend API
    axios
      .post('http://localhost:8072/time-line', formData) // Replace '/api/timeline' with the appropriate backend API endpoint URL
      .then((response) => {
        // Handle the response from the backend if needed
        console.log('Data inserted successfully');
        handleClose();
  
        // Redirect to the desired URL on successful submission
        window.location.href = '/';
      })
      .catch((error) => {
        // Handle error if the API request fails
        console.error('Error inserting data:', error); 
      });
  };
  
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
      <div className="w-full md:p-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Avatar img={profilePlaceHolder} />
          <h1 className="text-smallP md:text-midP lg:text-largeP font-bold">{cookies?.user.party}</h1>
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
                    <FontAwesomeIcon className="text-secondary text-smallT" icon={faImage} />{' '}
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
