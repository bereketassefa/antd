import React from "react";
import right from "../../assets/image/right.png";
function ResetConfirm() {
  return (
    <div className="  pl-14  pt-4 flex  flex-col justify-center items-center w-[400px] h-[250px] ">
      <div className="  ml-6 items-center rounded-full ring-[18px] ring-[#f4f2f2] flex justify-center    ">
        <img
          src={right}
          alt=""
          className="flex justify-center items-center w-20 h-20"
        ></img>
      </div>
      <p className="flex justify-center text-[15px] font-bold mt-8">
        Your password has been successfully reset!
      </p>
      <p>
        Please proceed to the login page to{" "}
        <a className="underline" href="/">
          sign in.
        </a>
      </p>
    </div>
  );
}

export default ResetConfirm;
