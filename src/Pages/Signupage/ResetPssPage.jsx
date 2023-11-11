import { React, useState } from "react";
import Heroside from "../../Components/SignUp/Heroside";
import logo from "../../assets/image/final logo-04.png";
import dotTopBackground from "../../assets/image/dot2for web.jpg";
import dotTopMobBackground from "../../assets/image/dot1formob.jpg";
import dotBottomBackground from "../../assets/image/dot1forweb.jpg";
import dotBottomMobBackground from "../../assets/image/dot2formob.jpg";
import ResetPass from "../../Components/SignUp/ResetPass";
import { Modal } from "antd";
import ResetConfirm from "../../Components/SignUp/ResetConfirm";
function ResetPssPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmitBtn = () => {
    setModalOpen(true);
  };
  return (
    <div className=" h-screen ">
      <Modal
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[]}
      >
        <ResetConfirm />
      </Modal>
      <div>
        <div className=" flex max-w-screen  ">
          {/* Login Box  */}
          <div className="  w-full md:w-1/2  flex-col justify-between ">
            <div className=" flex justify-between">
              <div className="w-[215px] mt-4 ml-40 mb">
                <img className="hidden lg:block w-full" src={logo} alt="" />
              </div>
              <div className=" w-[215px] ">
                <img
                  className="hidden lg:block "
                  src={dotTopBackground}
                  alt=""
                />
                <img className="lg:hidden " src={dotTopMobBackground} alt="" />
              </div>
            </div>

            <div className=" mt-12 mb-4 flex justify-center">
              <div className="w-[215px] ">
                <img className="lg:hidden w-full" src={logo} alt="" />
              </div>
            </div>

            <div className="lg:max-w-[550px] md:max-w-[550px] mx-auto flex justify-center px-5 sm:px-0  ">
              <ResetPass setModalOpen={setModalOpen} />
            </div>

            <div className="">
              <img
                className="hidden lg:block -mt-10 w-[150px] object-cover"
                src={dotBottomBackground}
                alt=""
              />
              <img className="lg:hidden " src={dotBottomMobBackground} alt="" />
            </div>
          </div>

          {/* Side Info Component */}
          <Heroside />
        </div>
      </div>
    </div>
  );
}

export default ResetPssPage;
