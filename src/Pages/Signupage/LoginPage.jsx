import React from "react";
import logo1 from "../../assets/image/addissystems-logo.png";
import logo from "../../assets/image/logof.png";
import Login from "../../Components/SignUp/Login";
import dico from "../../assets/image/dico.png";
import dicor from "../../assets/image/dicor.png";
import Heroside2 from "../../Components/SignUp/Heroside2";
import pic from "../../assets/image/bgheroside1.png";


function LoginPage() {
  return (
    <div className=" bg-[#3222C6] md:h-screen h-[100%] flex-col w-full relative border-box sm:overflow-clip">
      <img className="md:hidden block absolute z-10 top-6 h-20 right-0" src={dicor} alt="" />
      <img className="md:hidden block absolute z-10 top-0 h-16 right-0 mr-[-16px]" src={dico} alt="" />
      <div className=" md:flex md:max-w-full   h-[100%]  sm:pt-12 sm:ml-16">
        {/* Login Box  */}
        {/* <div className=" mx-auto "> */}
          <div className=" lg:max-w-[600px] md:max-w-[700px] md:mx:auto  md:h-4/5
           bg-[#3222C6] mb-[-20px]  md:mb-0 sm:px-0 
           md:bg-white  md:border-2  md:rounded-3xl ml-[6px] md:ml-0 px-0 grid grid-col-2 md:grid-none sm:mt-6">
          {/* desk */}
            <div className="hidden md:flex  justify-start ">
              <div className="w-[215px] mt-4 mb">
                <img className="hidden lg:block w-full" src={logo1} alt="" />
              </div>
            </div>

            <div className="md:hidden mt-8   sm:mt-12 grid-col-1  justify-start mb-24 ml-4">
              <div className="w-[215px] relative">
                <img className="lg:hidden block w-[66%] h-18" src={logo} alt="" />
              </div>
                <p className="text-gray-200 text-[12px] absolute mt-[-22px] ml-10 ">you next big opportuniy awaits </p>
            </div>

            <div className="lg:max-w-[600px] md:w-[600px] w-full mt-1 md:mt-0 mx-auto  px-5 sm:px-0 ">
              <Login />
            </div>
          </div>
          {/* <p className="  flex justify-center text-white mt-8  text-3xl">
            YOUR NEXT BIG <br />
            OPPORTUNITY AWAITS!
          </p> */}
        {/* </div> */}

        {/* Side Info Component */}
        <Heroside2 />
        <div className="md:hidden w-full  z-[-1]  relative
         object-cover"> 
            <img className=" sm:hidden absolute object-cover  w-full h-fit z-[-100] opacity-[98%]" src={pic} alt="" />
        </div>
        {/* <img className="hidden lg:block w-full" src={pic} alt="" /> */}

        
      </div>
    </div>
  );
}

export default LoginPage;
