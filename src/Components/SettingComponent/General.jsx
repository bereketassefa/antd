import React, { useState, useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import Britness from "./Britness";
import { ThemeContext } from "../../theme/ThemeContext";
import FontSize from "./FontSize";

function General() {
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  const [currentPass, setCurrentPass] = useState("")
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")

  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [changePassDropped, setChangePassDropped] = useState(true);
  const [languageDroped, setLanguageDroped] = useState(false);

  const [passwordError, setPasswordError] = useState(false);

  // console.log("myNewFontSize:", myNewFontSize);
  console.log("myFontSize:", myFontSize);

  const handleLogin = (e) => {
    e.preventDefault();

    // Resetting errors

    setPasswordError("");

    // Password validation
    if (currentPass.trim() === "") {
      setPasswordError("Please enter your password");
    } else if (newPass.trim === " ") {
      setPasswordError("Password doesnt mutch");
    } else if (newPass.trim !== confirmPass.trim) {
      setPasswordError("Password doesnt mutch");
    }
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-[#F9F7F7] max-w-[505px] mt-5 mx-auto p-8">
      <a href="Settings" className="flex justify-start items-center gap-2 pl-6">
        <BsArrowLeft
          style={{ fontSize: 16 + myFontSize }}
          className=" text-[#555555] h-[27px] w-[27px]"
        />
        <h1 style={{ fontSize: 16 + myFontSize }} className={` font-bold `}>
          Select Theme
        </h1>
      </a>
      <p
        style={{ fontSize: 16 + myFontSize }}
        className="flex justify-start pl-6"
      >
        Customize your workspace and make it enjoyable...
      </p>
      <Britness />
     <FontSize/>

      <hr className="max-w-[480px] mx-auto h-0 border-2 border-gray-400 "></hr>
      <p
        style={{ fontSize: 16 + myFontSize }}
        className="flex justify-start pl-6 mb-3"
      >
        Account Security
      </p>

      <div className=" flex  justify-between pl-6 mb-3">
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
        className=" relative flex justify-between pl-6 mb-3"
      >
        <p style={{ fontSize: 16 + myFontSize }}>Change Password</p>
        <RiArrowDropDownLine className="text-4xl mt-2  lg:hidden" />
      </div>
      {changePassDropped && (
        <form onSubmit={handleLogin}>
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
                className="text-[17px] outline-none w-full"
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
                className="text-[17px] outline-none w-full"
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
                className="text-[17px] outline-none w-full"
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
            {passwordError && <p className="text-red-500">{passwordError}</p>}

            <div className="flex justify-center lg:justify-end md:justify-end my-12">
              <button
                type="submit"
                style={{ fontSize: 16 }}
                className="px-4 py-2 text-lg w-[100px] font-medium text-white bg-[#D71A62] hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}

      <h1 style={{ fontSize: 16 + myFontSize }} className="my-6 pl-6">
        Active Session
      </h1>
      <hr className="max-w-[480px] mx-auto h-0 border-2 border-gray-400 "></hr>
      <h1
        style={{ fontSize: 16 + myFontSize }}
        className="pl-6 text-[18px] font-bold my-8"
      >
        Language
      </h1>

      <div
        className="relative "
        onClick={() => setLanguageDroped(!languageDroped)}
      >
        <div className="flex justify-between  mx-8 items-center bg-slate-100  ">
          <p style={{ fontSize: 16 + myFontSize }}>Select language</p>
          <RiArrowDropDownLine className="text-4xl mt-2" />
        </div>
        {languageDroped && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
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
                Amharik
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
