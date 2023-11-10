import React from "react";

import logo1 from "../../assets/image/addissystems-logo.png";
import logo from "../../assets/image/final logo-04.png";
import Login from "../../Components/SignUp/Login";
import Heroside2 from "../../Components/SignUp/Heroside2";

function LoginPage() {
  return (
    <div className=" bg-[#3222C6] h-screen ">
      <div className=" flex max-w-full    ">
        {/* Login Box  */}
        <div className=" mx-auto">
          <div className=" lg:max-w-[600px] md:max-w-[700px]  h-[600px] mt-16    sm:px-0 bg-white  border-2  rounded-3xl">
            <div className=" flex  justify-start ">
              <div className="w-[215px] mt-4 mb">
                <img className="hidden lg:block w-full" src={logo} alt="" />
              </div>
            </div>

            <div className=" mt-12 mb-4 flex justify-start">
              <div className="w-[215px] ">
                <img className="lg:hidden w-full" src={logo1} alt="" />
              </div>
            </div>
            <div className="lg:max-w-[600px] md:w-[600px] mx-auto  px-5 sm:px-0 ">
              <Login />
            </div>
          </div>
          {/* <p className="  flex justify-center text-white mt-8  text-3xl">
            YOUR NEXT BIG <br />
            OPPORTUNITY AWAITS!
          </p> */}
        </div>

        {/* Side Info Component */}
        <Heroside2 />
      </div>
    </div>
  );
}

export default LoginPage;
