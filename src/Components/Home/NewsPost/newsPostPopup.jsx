import React from 'react'
import { Button, Divider, Modal } from 'antd';
import { useState } from 'react';
import profilePlaceHolder from '../../../assets/logo/profilePlaceHolder.png'
import Avatar from '../../../Fields/Avatar/avatar'
import { faFile, faImage } from '@fortawesome/free-regular-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop'

export default function NewsPostPopup({isOpen , handleClose}) {
    const [fileList, setFileList] = useState([]);
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
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


  return (
    <Modal 
        open={isOpen}  
        onCancel={handleClose}
        footer={[]}
        style={{
            top: 80,
            borderRadius: 0
           
        }}
        width={800}
        
        >
        <div className='w-full md:p-4 flex flex-col gap-4' >
            <div className='flex gap-2 items-center'>
                <Avatar
                    img={profilePlaceHolder}
                />
                <h1 className='text-smallP md:text-midP lg:text-largeP font-bold' >Company Name</h1>
            </div>
            <div className='w-full '>
                 <textarea 
                    className='w-full border-none p-3 outline-none text-smallP md:text-midP lg:text-largeP'
                    placeholder='Write something here ...'
                 />
            </div>

           
 
            <div className='w-full p-2 pb-0'>
                <ul className='w-full flex items-center justify-center md:justify-start  gap-4'>
                    <ImgCrop rotationSlider>
                        <Upload
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            maxCount={5}
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}                            
                            
                        >
                            {fileList.length < 5 && 
                                 <p>
                                     <FontAwesomeIcon className='text-secondary text-smallT' icon={faImage}/> <p className='text-smallP'>Image</p>
                                </p>}
                        </Upload>
                    </ImgCrop>
{/*                     
                    <li className='flex flex-col border border-1 border-primary  items-center gap-2 px-4 py-2'>
                        <FontAwesomeIcon className='text-secondary text-smallT' icon={faVideo}/> <p className='text-smallP'>Video</p>
                    </li>
                    <li className='flex flex-col border border-1 border-primary  items-center gap-2 px-4 py-2'>
                        <FontAwesomeIcon className='text-secondary text-smallT' icon={faFile}  /> <p className='text-smallP'>Document</p>
                    </li> */}
                </ul>
            </div>
            <Divider
                className='bg-gray-300'
             />
            <div className='w-full flex items-center justify-center '>
                <button className='bg-secondary w-[113px] h-[49px] text-white text-smallP md:text-midP lg:text-largeP '>
                    Publish
                </button>
            </div>
        </div>
        
        
      </Modal>
  )
}
