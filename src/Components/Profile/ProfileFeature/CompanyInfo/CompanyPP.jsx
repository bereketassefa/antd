import React from "react";
import profile from "../../../../assets/image/cute-girl-pic (12).jpg";
// import { IoClose } from "react-icons/io";
function CompanyPP() {
  return (
    <div>
      <div className="flex justify-between">
        
        <p>Upploading profile</p>
        <div>
          {/* <IoClose /> */}
        </div>
      </div>
      <hr />
      <div>
        <p>help to recogeize </p>
        <div>
          <img src={profile} alt="" className=" w-48 h-48 rounded-full" />
        </div>
      </div>
      <hr />
      <div className="flex justify-end">
        <button>update</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default CompanyPP;
