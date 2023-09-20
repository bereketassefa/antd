import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import Button from "../SignUp/Login/Button";
import Heading from "../SignUp/Heading";
import Helppra from "../SignUp/Helppra";

function ForgotPass() {
   const [onClick, setonClick] = useState(false);
  
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="">
      <Heading
        Title={"Forget Password?"}
        text={"Please enter your Phone Number to recover your password"}
      />

      <form action="">
        <div className="max-w-[500px]">
          <div className=" border-[2px] md:w-[500px] max-w-[500px] rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] border-[#3222c6]">
            <BsFillTelephoneFill className="text-[24px] text-gray-600" />
            <input
              className="text-[17px] outline-none w-full"
              type="number"
              placeholder="Phone Number"
              name="email"
            />
          </div>

          <Button text={"Send"} bgColor={"bg-[#d71a62]"} />
          <div className=" ml-5">
            {" "}
            <Helppra />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPass;
