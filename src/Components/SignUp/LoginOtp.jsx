
import React, { useState, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../SignUp/Login/Button";
import Heading from "../SignUp/Heading";
import Helppra from "../SignUp/Helppra";
import OTPInputBox from "./OTPInputBox";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { message } from "antd";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginOtp = ({ value, onChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const phoneNumber = location.state?.phoneNumber || "Not provided";
  const [loading,setLoading] =useState(false)
//   console.log(phoneNumber);
  
// console.log(phoneNumber)
  const [counter, setCounter] = useState(50);
  const [otp, setOtp] = useState(Array(6).fill(""));
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
  
      const otpString = otp.join("");

      const response = await axios.post('https://account.qa.addissystems.et/account/mobile/otp-verify', {
        phone: phoneNumber,
        OTP: otpString
      });
console.log(response.data)
      if (response.data.success === true) {
        console.log("OTP verified successfully:", response.data.message);
        const modifiedToken = response.data.token.replace(/\./g, '$').replace(/\//g, '&');

        navigate(`/ResetPss/${modifiedToken}`); // <-- Navigate to ResetPss with the token
      } else {
        message.error('Incorrect OTP');
        console.error(response.data.message);
      }
    } catch (error) {
      message.error('Incorrect OTP');
    } finally {
      setLoading(false); // <-- Stop loading
    }
  };
  const renderInput = (value, index) => {
    return (
      <input
        key={index}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  };

  return (
    <div className="">
      <a href="/forget-password" className="flex items-center gap-1 mb-10">
        <BsArrowLeftShort className="text-3xl" />
        <p className="text-[#626262] text-xl">Change phone number</p>
      </a>
      <Heading
        Title={"Enter OTP Code"}
        text={<span>We have sent the code to your Phone Number: <strong>+{phoneNumber}</strong></span>}
      />
      <p className="text-lg text-center lg:text-left text-[#B7B7B7]">
        No OTP received? Request a{" "}
        <Link to={""} className=" underline">
          resend.
        </Link>
      </p>
      <div className=" flex flex-col justify-center items-center my-2 ">
       
      <div className="flex gap-8">
        {otp.map((value, index) => (
          <OTPInputBox
            key={index}
            value={value}
            onChange={(e) => handleOtpChange(e.target.value, index)}
          />
        ))}
      </div>
        <div className="mt-2  ">
          <p>
            {counter > 0 ? `Receive in ${counter} seconds` : "Resend"}
          </p>
          <p className="text-red-500 hidden">"Invalid OTP Code. Please try again.</p>
        </div>
      </div>
      <div className="max-w-[500px]">
      
          <Button  text={loading ? "Loading..." : "Submit"} bgColor={"bg-[#d71a62]"}
           onClick={handleSubmit}
          />
      
        <div className=" ml-5">
          <Helppra />
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
