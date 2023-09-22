// // import React from "react";
// // import Button from "../SignUp/Login/Button";
// // import Heading from "../SignUp/Heading";
// // import Helppra from "../SignUp/Helppra";
// // import OTPInput from "react-otp-input";

// // import { BsArrowLeftShort } from "react-icons/bs";
// // const LoginOtp = ({ value, onChange }) => {
// //   return (
// //     <div className="">
// //       <div className="flex items-center gap-1">
// //         <BsArrowLeftShort />
// //         <p>Change phone number</p>
// //       </div>
// //       <Heading
// //         Title={"Enter OTP Code?"}
// //         text={"We have sent the code to your Phone Number:+251 911 223344"}
// //       />
// //       <div>
// //         No OTP received? Request a{" "}
// //         <a className="" href="">
// //           resend
// //         </a>
// //         <OTPInput
// //           value={value}
// //           onChange={onChange}
// //           numInputs={6} // Specify the number of OTP digits
// //           separator={<span>-</span>} // Customize the separator
// //           isInputNum // Allow only numeric inputs
// //         />
// //       </div>
// //       <div className="max-w-[500px]">
// //         <a href="">
// //           <Button text={"Send"} bgColor={"bg-[#d71a62]"} />
// //         </a>
// //         <div className=" ml-5">
// //           {" "}
// //           <Helppra />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginOtp;// Import the necessary dependencies
import React, { useState, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import OTPInput from "react-otp-input";
import Button from "../SignUp/Login/Button";
import Heading from "../SignUp/Heading";
import Helppra from "../SignUp/Helppra";
import OTPInputBox from "./OTPInputBox";
import {useParams} from 'react-router-dom'

const LoginOtp = ({ value, onChange }) => {
  const phoneNumber = useParams()
  
console.log(phoneNumber)
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

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
        text={"We have sent the code to your Phone Number: +251 911 223344"}
      />
      <p className="text-lg text-center lg:text-left text-[#B7B7B7]">
        No OTP received? Request a{" "}
        <a className=" underline" href="">
          resend.
        </a>
      </p>
      <div className=" flex flex-col justify-center items-center my-2 ">
       
        <div className="flex gap-8">
         
          <OTPInputBox />
          <OTPInputBox />
          <OTPInputBox />
          <OTPInputBox />
          <OTPInputBox />
          <OTPInputBox />
        </div>
        <div className="mt-2  ">
          <p>
            {counter > 0 ? `Code expires in ${counter} seconds` : "OTP expired"}
          </p>
          <p className="text-red-500 hidden">"Invalid OTP Code. Please try again.</p>
        </div>
      </div>
      <div className="max-w-[500px]">
        <a href="">
          <Button text={"Submit"} bgColor={"bg-[#d71a62]"} />
        </a>
        <div className=" ml-5">
          <Helppra />
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
