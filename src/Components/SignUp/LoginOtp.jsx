import React from "react";
import Button from "../SignUp/Login/Button";
import Heading from "../SignUp/Heading";
import Helppra from "../SignUp/Helppra";
import { BsArrowLeftShort } from "react-icons/bs";
function LoginOtp() {
  return (
    <div className="">
      <div className="flex items-center gap-1">
        <BsArrowLeftShort />
        <p>Change phone number</p>
      </div>
      <Heading
        Title={"Enter OTP Code?"}
        text={"We have sent the code to your Phone Number:+251 911 223344"}
      />
      <div>
        No OTP received? Request a{" "}
        <a className="" href="">
          resend
        </a>
        .
      </div>
      <div className="max-w-[500px]">
        <a href="">
          <Button text={"Send"} bgColor={"bg-[#d71a62]"} />
        </a>
        <div className=" ml-5">
          {" "}
          <Helppra />
        </div>
      </div>
    </div>
  );
}

export default LoginOtp;
