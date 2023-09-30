import React from "react";
import googleApp from "../../../../assets/image/play store -02.png";
import Appstor from "../../../../assets/image/app store-03.png";
function SociaCard() {
  return (
    <div className=" w-[300px]  p-2  border-2  ">
      <h1 className="flex justify-center items-center text-smallP md:text-midP lg:text-largeP">
        Check out Our Mpos Application
      </h1>
      <div className="  mt-4 flex justify-evenly items-center  ">
        <img
          src={googleApp}
          alt="googleApp"
          className="w-32 h-10 object-cover"
        ></img>
        <img
          src={Appstor}
          alt="Appstor"
          className="w-32 h-10 object-cover"
        ></img>
      </div>
    </div>
  );
}

export default SociaCard;
