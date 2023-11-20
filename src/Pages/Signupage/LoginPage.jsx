import React from "react";
import logo1 from "../../assets/image/addissystems-logo.png";
import logo from "../../assets/image/logof.png";
import Login from "../../Components/SignUp/Login";
import dico from "../../assets/image/dico.png";
import dicor from "../../assets/image/dicor.png";
import Heroside2 from "../../Components/SignUp/Heroside2";
import pic from "../../assets/image/bgheroside1.png";
// import fl from "../../assets/image/fl.png";
import finallogo from "../../assets/image/finallogo.png";


function LoginPage() {
  return (
    <div className=" bg-[#3222C6] lg:h-screen  flex-col w-full relative border-box lg:overflow-clip">
      <img className="lg:hidden block absolute z-10 top-6 md:top-16 h-24 md:h-44 right-0" src={dicor} alt="" />
      <img className="lg:hidden block absolute z-10 top-0 h-20 md:h-40 right-0 mr-[-16px] md:mr-[-32px]" src={dico} alt="" />
      
      <div className=" lg:flex lg:max-w-full  h-[100%]   lg:pt-12 lg:mx-16">
        {/* Login Box  */}
        {/* <div className=" mx-auto "> */}
          <div className=" lg:w-[50%]  lg:mx-auto h-[64vh] lg:h-4/5 
           bg-[#3222C6] mb-[-20px]  lg:mb-0 lg:px-0 
           lg:bg-white  lg:border-2  lg:rounded-3xl mx-[3%] md:mx-[6%]  lg:ml-0 px-0 grid grid-col-2 lg:grid-none lg:mt-6">
          {/* desk */}
            <div className="hidden lg:flex  justify-start lg:ml-10 ">
              <div className="w-[215px] lg:w-[400px] mt-4 ">
                <img className="hidden lg:block w-full" src={finallogo} alt="" />
              </div>
            </div>

            <div className="lg:hidden mt-8 md:mt-10  lg:mt-12 grid-col-1  justify-start mb-24 md:mb-36 ml-4">
              <div className="w-[215px] md:w-[430px] relative">
                <img className="lg:hidden block w-[66%] h-18" src={logo} alt="" />
              </div>
                <p className="text-gray-200 text-[12px] md:text-[26px]  absolute mt-[-22px] md:mt-[-48px] ml-10 md:ml-20">you next big opportuniy awaits </p>
            </div>

            <div className="lg:w-[90%]  w-full mt-1 lg:mt-0 mx-auto  px-5 md:px-8 lg:px-0 ">
              <Login />
            </div>
          </div>
          {/* <p className=" h-[300] flex justify-center text-white mt-8  text-3xl">
            YOUR NEXT BIG <br />
            OPPORTUNITY AWAITS!
          </p> */}
        {/* </div> */}

        {/* Side Info Component */}
        <Heroside2 />
        <div className="lg:hidden w-full  z-[-1]  h-[36vh]  fixed
         object-fit"> 
            <img className=" lg:hidden absolute object-cover  w-full  z-[-100] opacity-[100%]" src={pic} alt="" />
        </div>
        {/* <img className="hidden lg:block w-full" src={pic} alt="" /> */}

        
      </div>
    </div>
  );
}

export default LoginPage;
