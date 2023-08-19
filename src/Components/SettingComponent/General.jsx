import React, { useState, useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import Britness from "./Britness";
import { ThemeContext } from "../../theme/ThemeContext";
import FontSize from "./FontSize";
import { useCookies } from 'react-cookie'

function General() {
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px

  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [changePassDropped, setChangePassDropped] = useState(true);
  const [languageDroped, setLanguageDroped] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['User']);
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPassError, setNewPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [invalid, setInvalidPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [activesession , setActiveSession] = useState(false);

  // console.log("myNewFontSize:", myNewFontSize);
  console.log("myFontSize:", myFontSize);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const validateInputs = () => {
    let isValid = true;
    
    
    if (!currentPass) {
      setPasswordError('Current password is required.');
      isValid = false;
    } else {
      setPasswordError('');
    }
    
    if (!newPass) {
      setNewPassError('New password is required.');
      isValid = false;
    } else {
      setNewPassError('');
    }
    
    if (!confirmPass) {
      setConfirmPassError('Please confirm your new password.');
      isValid = false;
    } else if (newPass !== confirmPass) {
      setConfirmPassError('Passwords do not match.');
      isValid = false;
    } else {
      setConfirmPassError('');
    }
  
    return isValid;
  }
  

  const handleSubmitClick = (event) => {
    
    event.preventDefault();
    if (validateInputs()) {
      setModalVisible(true);
    }
  }

  const handleLogin =async (e) => {
    e.preventDefault();

    // Check if new password and confirm password are the same
    if (newPass !== confirmPass) {
      setConfirmPassError("Passwords do not match");
      return;
    }
  
    // Get _id from cookies
    const _id =cookies.user._id
    console.log(_id)
    
    try {
      const response = await fetch(`http://localhost:8010/change-Password/${_id}`, {
        method: 'PATCH', // or POST depending on how your backend is set up
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: newPass,
          oldPassword: currentPass
        })
      });
  
      const data = await response.json();
  
      if (data.success) {
        setCurrentPass("");
      setNewPass("");
      setConfirmPass("");
      setModalVisible(false); // Close the modal on success
    
        console.log(data)
        // Handle success - maybe redirect the user or show a success message
      }  if (data.success === false) {
        setConfirmPassError("incorrect old password");
        return;
      }
    } catch (error) {
      console.error("There was an error updating the password", error);
    }
    // Additional validation logic...

    // Submit the form if there are no errors
    if (
      passwordError === "" &&
      newPassError === "" &&
      confirmPassError === ""
    ) {
       setInvalidPassword("Password is Invalid");
    }
  };
  const ConfirmationModal = ({ onClose, onConfirm }) => (
    <div className="fixed  z-10 inset-0 overflow-y-auto">
      <div className="flex  items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        {/* Actual modal */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Confirmation
                </h3>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">
                    Are you sure you want to change the password?
                  </p>
                  <p className="text-red-500">{confirmPassError}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button onClick={onConfirm} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                Yes
              </button>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:mt-0 sm:w-auto sm:text-sm sm:leading-5">
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="bg-[#F9F7F7]  mt-5 mx-auto p-4">
      <a href="Settings" className="flex justify-start items-center gap-2 pl-2 mt-2">
        <BsArrowLeft
          style={{ fontSize: 16 + myFontSize }}
          className="md:hidden lg:hidden text-[#555555] h-[27px] w-[27px]"
        />
        <h1 style={{ fontSize: 16 + myFontSize }} className={` font-bold `}>
          Select Theme
        </h1>
      </a>
      <p
        style={{ fontSize: 16 + myFontSize }}
        className="flex justify-start pl-2"
      >
        Customize your workspace and make it enjoyable...
      </p>
      <Britness />
      <FontSize />

      <hr className="max-w-[480px] mt-16 mx-auto h-0 border-2 border-gray-400 "></hr>
      <p
        style={{ fontSize: 16 + myFontSize }}
        className="flex justify-start pl-2 mb-3"
      >
        Account Security
      </p>

      <div className=" flex  justify-between pl-2 mb-3">
        <h1 style={{ fontSize: 16 + myFontSize }}>Two-step Authentication </h1>
        <button
          onClick={toggleMode}
          className={`flex items-center justify-center w-[51px] h-[31px] rounded-full ${
            isDarkMode ? "bg-[#56CA0F]" : "bg-[#b9acac]"
          }`}
        >
          <div
            className={`bg-gray-200 w-8 h-7 rounded-full shadow-md transform ${
              isDarkMode ? "translate-x-3" : "translate-x-1"
            }`}
          ></div>
        </button>
      </div>

      <div
        onClick={() => setChangePassDropped(!changePassDropped)}
        className=" relative flex justify-between pl-2 mb-3"
      >
        <p style={{ fontSize: 16 + myFontSize }}>Change Password</p>
        <RiArrowDropDownLine className="text-4xl mt-2  lg:hidden" />
      </div>
      {changePassDropped && (
        <form onSubmit={handleLogin}>
          {isModalVisible && <ConfirmationModal onClose={() => setModalVisible(false)} onConfirm={handleLogin} />}
          <div className="grid gap-3 max-w-[472px] mx-auto px-2">
            <div
              className={`border-[2px] rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] ${
                passwordError ? "border-red-500" : "border-[#3222c6]"
              }`}
            >
              <MdLockOutline
                className={`text-[24px] ${
                  currentPass?.length > 0 ? "hidden" : "block"
                } text-gray-400`}
              />
              <input
                className="bg-transparent text-[17px] outline-none w-full"
                type={showPass1 ? "text" : "password"}
                placeholder="Current Password"
                name="password"
                value={currentPass}
                onChange={(e) => setCurrentPass(e.target.value)}
              />

              <div
                className={`${currentPass?.length < 1 ? "hidden" : "block"}`}
                onClick={() => setShowPass1(!showPass1)}
              >
                {showPass1 > 0 ? (
                  <AiFillEye className="text-[26px] text-[#3222C6]" />
                ) : (
                  <AiFillEyeInvisible className="text-[26px] text-[#3222C6]" />
                )}
              </div>
            </div>

            {passwordError && <p className="text-red-500">{passwordError}</p>}

            <div
              className={`border-[2px] rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] ${
                passwordError ? "border-red-500" : "border-[#3222c6]"
              }`}
            >
              <MdLockOutline
                className={`text-[24px] ${
                  confirmPass?.length > 0 ? "hidden" : "block"
                } text-gray-400`}
              />
              <input
                className=" bg-transparent text-[17px] outline-none w-full"
                type={showPass2 ? "text" : "password"}
                placeholder="New Password"
                name="password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
              <div
                className={`${confirmPass?.length < 1 ? "hidden" : "block"}`}
                onClick={() => setShowPass2(!showPass2)}
              >
                {showPass2 > 0 ? (
                  <AiFillEye className="text-[26px] text-[#3222C6]" />
                ) : (
                  <AiFillEyeInvisible className="text-[26px] text-[#3222C6]" />
                )}
              </div>
            </div>
            {newPassError && <p className="text-red-500">{newPassError}</p>}

            <div
              className={`border-[2px] rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] ${
                passwordError ? "border-red-500" : "border-[#3222c6]"
              }`}
            >
              <MdLockOutline
                className={`text-[24px] ${
                  confirmPass?.length > 0 ? "hidden" : "block"
                } text-gray-400`}
              />
              <input
                className=" bg-transparent text-[17px] outline-none w-full"
                type={showPass3 ? "text" : "password"}
                placeholder="Confirm Password"
                name="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <div
                className={`${confirmPass?.length < 1 ? "hidden" : "block"}`}
                onClick={() => setShowPass3(!showPass2)}
              >
                {showPass3 > 0 ? (
                  <AiFillEye className="text-[26px] text-[#3222C6]" />
                ) : (
                  <AiFillEyeInvisible className="text-[26px] text-[#3222C6]" />
                )}
              </div>
            </div>

            {confirmPassError && (
              <p className="text-red-500">{confirmPassError}</p>
            )}

            <div className="flex justify-center lg:justify-end md:justify-end my-12">
            <button onClick={handleSubmitClick} type="button" style={{ fontSize: 16 }} className="px-4 py-2 text-lg w-[100px] font-medium text-white bg-[#D71A62] hover:bg-blue-600">Save</button>
            </div>
          </div>
        </form>
      )}

      <div
        className="relative bg-white  z-20 mb-8"
        onClick={() => setActiveSession(!activesession)}
      >
        <div className="flex justify-between  mx-8 items-center  bg-transparent ">
          <p style={{ fontSize: 16 + myFontSize }}>Active Session</p>
          <RiArrowDropDownLine className="text-4xl mt-2  md:hidden" />
        </div>
        {activesession && (
          <div className="absolute right-0 mt-2 w-full bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
            <ul className="py-2">
              <li
                style={{ fontSize: 16 + myFontSize }}
                className="px-4 py-2 hover:bg-gray-100"
              >
                1
              </li>
              <li
                style={{ fontSize: 16 + myFontSize }}
                className="px-4 py-2 hover:bg-gray-100"
              >
                2
              </li>
              <li
                style={{ fontSize: 16 + myFontSize }}
                className="px-4 py-2 hover:bg-gray-100"
              >
                3
              </li>
            </ul>
          </div>
        )}
      </div>
      <hr className="max-w-[480px] mx-auto h-0 border-2 border-gray-400 "></hr>
      <h1
        style={{ fontSize: 16 + myFontSize }}
        className="pl-2 text-[18px] font-bold my-8"
      >
        Language
      </h1>

      <div
        className="relative bg-white "
        onClick={() => setLanguageDroped(!languageDroped)}
      >
        <div className="flex justify-between  mx-8 items-center   ">
          <p style={{ fontSize: 16 + myFontSize }}>Select language</p>
          <RiArrowDropDownLine className="text-4xl mt-2" />
        </div>
        {languageDroped && (
          <div className="absolute right-0 mt-2 w-full bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
            <ul className="py-2">
              <li
                style={{ fontSize: 16 + myFontSize }}
                className="px-4 py-2 hover:bg-gray-100"
              >
                English
              </li>
              <li
                style={{ fontSize: 16 + myFontSize }}
                className="px-4 py-2 hover:bg-gray-100"
              >
                Amharic
              </li>
              <li
                style={{ fontSize: 16 + myFontSize }}
                className="px-4 py-2 hover:bg-gray-100"
              >
                Affan Oromo
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default General;
