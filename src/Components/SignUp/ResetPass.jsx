import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Button from "./Login/Button";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
import Helppra from "./Helppra";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { message } from "antd";
import { FaSpinner } from 'react-icons/fa';
function ResetPass({ setModalOpen }) {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [loading , setLoading] =useState(false)
  const { token } = useParams(); // Get the token from the URL params
  const Navigate = useNavigate();

  

  const handleReset = async (e) => {
    setLoading(true);
    console.log("Loading state after setting to true:", loading);
    
    e.preventDefault();
   
    const originalToken = token.replace(/\$/g, '.').replace(/&/g, '/');
    if (pass1 !== pass2) {
     message.error('Password Does not match')
     setLoading(false)
      return;
    }

    try {
     
      const response = await axios.post(`https://account.qa.addissystems.et/reset-Password/${pass1}/${originalToken}`);

      if (response.data) {
        // setModalOpen(true);
        message.success("Password Reset successfully");
        Navigate('/login'); // Redirect to login page or wherever you want
      }
    } catch (error) {
      console.error("Error resetting password:", error);
     message.error('Error resetting password')
     setLoading(false);
    }
    finally{
      setLoading(false)
    }
  };

 
  return (
    <div>
      <Heading Title={"Reset Password"} text={"Please enter a new password"} />
      <form action="">
        <div className=" grid  gap-3 max-w-[480px]">
          <div className=" border-[2px]  rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] border-[#3222c6]">
            <MdLockOutline
              className={`text-[24px] ${
                pass1?.length > 0 ? "hidden" : "block"
              } text-gray-400`}
            />
            <input
              className="text-[17px] outline-none w-full"
              type={showPass1 ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={(e) => setPass1(e.target.value)}
            />
            <div
              className={`${pass1?.length < 1 ? "hidden" : "block"}`}
              onClick={() => setShowPass1(!showPass1)}
            >
              {showPass1 > 0 ? (
                <AiFillEye className="text-[26px] text-[#3222C6]" />
              ) : (
                <AiFillEyeInvisible className="text-[26px] text-[#3222C6]" />
              )}
            </div>
          </div>
          <div className=" border-[2px]  rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] border-[#3222c6]">
            <MdLockOutline
              className={`text-[24px] ${
                pass2?.length > 0 ? "hidden" : "block"
              } text-gray-400`}
            />
            <input
              className="text-[17px] outline-none w-full"
              type={showPass2 ? "text" : "password"}
              placeholder="Confirm Password"
              name="password"
              onChange={(e) => setPass2(e.target.value)}
            />
            <div
              className={`${pass2?.length < 1 ? "hidden" : "block"}`}
              onClick={() => setShowPass2(!showPass2)}
            >
              {showPass2 > 0 ? (
                <AiFillEye className="text-[26px] text-[#3222C6]" />
              ) : (
                <AiFillEyeInvisible className="text-[26px] text-[#3222C6]" />
              )}
            </div>
          </div>
          <div className="grid gap-3">
            <div
              className={` ${
                pass1?.length > 0 ? "flex" : "hidden"
              }  items-center `}
            >
              {pass1?.length >= 8 ? (
                <BiCheck className="text-[20px] text-green-500" />
              ) : (
                <IoMdClose className="text-[20px] text-red-500" />
              )}
              <p>Password must be 8-16 characters</p>
            </div>
            <div
              className={` ${
                pass1?.length > 0 ? "flex" : "hidden"
              } items-center `}
            >
              {/[A-Z]/.test(pass1) ? (
                <BiCheck className="text-[20px] text-green-500" />
              ) : (
                <IoMdClose className="text-[20px] text-red-500" />
              )}
              <p>Password must have at least one capital letter</p>
            </div>

            <div
              className={` ${
                pass1?.length > 0 ? "flex" : "hidden"
              }  items-center `}
            >
              {/[a-z]/.test(pass1) ? (
                <BiCheck className="text-[20px] text-green-500" />
              ) : (
                <IoMdClose className="text-[20px] text-red-500" />
              )}
              <p>Password must have at least one small letter</p>
            </div>
            <div
              className={` ${
                pass1?.length > 0 ? "flex" : "hidden"
              }  items-center `}
            >
              {/[* ,% ,&,^ .!,@,#,$,(,)]/.test(pass1) ? (
                <BiCheck className="text-[20px] text-green-500" />
              ) : (
                <IoMdClose className="text-[20px] text-red-500" />
              )}
              <p>
                Password must have at least one special character ( !, @, #, $,
                ( , ), %, ^, &, * )
              </p>
            </div>
            <div
              className={` ${
                pass1?.length > 0 ? "flex" : "hidden"
              }  items-center `}
            >
              {pass1 === pass2 ? (
                <BiCheck className="text-[20px] text-green-500" />
              ) : (
                <IoMdClose className="text-[20px] text-red-500" />
              )}
              <p>Password must match</p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <input
              className="mt-1 h-[28px] w-[28px]"
              checked={isChecked}
              type="checkbox"
              onChange={() => setIsChecked(!isChecked)}
            />
            <p className="text-[17px] font-bold not-italic">
              By creating a password, you agree to the{" "}
              <span className="text-[#D71A62]">
                Terms of Service and Conditions
              </span>{" "}
              , and <span className="text-[#D71A62]">Privacy Policy</span> .
            </p>
          </div>
        </div>
        <Button 
          text={loading ?  <FaSpinner className="animate-spin" /> : "RESET"}
          bgColor={`bg-[#d71a62] ${
            !pass1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!pass1 ? true : false}
          onClick={(e) => handleReset(e)}
           
        />
            
        
        
        <div className="ml-5">
          <Helppra />
        </div>
      </form>
    </div>
  );
}

export default ResetPass;
