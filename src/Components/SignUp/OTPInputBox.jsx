import React from "react";

function OTPInputBox() {
  return (
    <div className="border-2 flex border-[#666666] w-[50px] rounded-sm h-12 justify-center items-center ">
      <input type="number" maxLength={1} className="w-full text-center outline-none" />
    </div>
  );
}

export default OTPInputBox;
