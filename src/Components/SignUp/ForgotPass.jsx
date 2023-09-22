import React, { useState } from "react";
import Button from "../SignUp/Login/Button";
import Heading from "../SignUp/Heading";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Helppra from "./Helppra";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ForgotPass() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (value) => {
    setPhoneNumber(value);

  };

  const handleSend = async () => {
    try {
      console.log('before send')
      console.log(phoneNumber);
      const response = await axios.post('http://localhost:8010/account/login/forgot', {
        phone: phoneNumber
      });
console.log('after send', response)
      if (response.data) {
        console.log("OTP sent successfully");
        navigate('/OTP', { state: { phoneNumber: phoneNumber } });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div className="">
      <Heading
        Title={"Forget Password?"}
        text={"Please enter your Phone Number to recover your password"}
      />

      <div className="flex w-full max-w-[500px] flex-col gap-y-4 sm:w-1/2 mt-4 ">
        <div className={formErrors.phone ? "flex items-center rounded bg-white pl-2" : "flex items-center rounded bg-white pl-2"}>
          <PhoneInput
            country={"et"}
            enableAreaCodes={true}
            value={phoneNumber}
            onChange={handleChange}
            inputProps={{
              className: "w-full py-3 px-12 rounded outline-none rounded border-2 border-[#3222C6]  max-w-[500px] md:w-[480px]",
            }}
            containerStyle={{ position: "relative" }}
            buttonStyle={{ background: "transparent", border: "none" }}
            dropdownStyle={{ position: "absolute", top: "100%", left: 0 }}
          />
        </div>
        <p className={formErrors.phone ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600" : "-mt-4 ml-2 text-[11px] text-red-600"}>
          {formErrors.phone}
        </p>
      </div>
      <div className="max-w-[500px] md:w-[480px]">
        <Button
          text={"Send"}
          bgColor={"bg-[#d71a62]"}
          onClick={handleSend}
        />
        <div className="ml-5">
          <Helppra />
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
