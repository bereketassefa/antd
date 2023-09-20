import React, { useState } from "react";

import Button from "../SignUp/Login/Button";
import Heading from "../SignUp/Heading";
import Helppra from "../SignUp/Helppra";
import flag from "../../assets/image/etflag.png";
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
          <div className="  border-2 border-[#3222C6] mb-4">
            <label
              htmlFor="companyPhone"
              className="block mb-2 text-lg font-medium text-gray-700"
            ></label>
            <div className="flex px-3 py-2 items-center">
              <img
                className="h-7 w-9 rounded object-cover"
                src={flag}
                alt="ethiopian flag"
              />{" "}
              <span className="ml-1 text-base">
                <select className="outline-none">
                  <option>+251</option>
                  <option>+200</option>
                  <option>+400</option>
                  <option>+2321</option>
                  <option>+231</option>
                  <option>+251</option>
                  <option>+231</option>
                  <option>+251</option>
                  <option>+551</option>
                  <option>+951</option>
                  <option>+751</option>
                  <option>+851</option>
                </select>
              </span>{" "}
              {""}
              <input
                type="number"
                id="companyPhone"
                name="companyPhone"
                className="bg-transparent w-full outline-none  "
              />
            </div>
          </div>

          <Button  text={"Send"} bgColor={"bg-[#d71a62]"} />
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
