import React, { useState } from "react";
import Navigator from "../../Components/Home/Navigator/navigator";
import { Outlet } from "react-router-dom";
import AddItemsPage from "../../Pages/AddProduct/AddItemsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function PageLayout() {
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  function handleShowModal() {
    setShowAddProductModal(!showAddProductModal);
  }
  return (
    <div className="w-full p-0 m-0 flex flex-col max-w-full items-center sticky top-[75px]">
      {showAddProductModal && (
        <div
          className="flex justify-center items-center absolute bg-[rgba(0,0,0,0.5)] w-full z-50 min-h-screen"
          style={{
            left: -400,
            top: 0,
            bottom: 0,
            width: "100vw",
            height: "100%",
          }}
        >
          <div
            className="fixed flex h-screen w-full justify-center items-center"
            style={{
              left: 0,
              top: 20,
              bottom: 0,
              width: "100vw",
              height: "100%",
            }}
          >
            <div className="w-[700px] bg-white rounded-md p-6">
              <div
                className="flex justify-end right-0"
                onClick={() => setShowAddProductModal(false)}
              >
                <FontAwesomeIcon
                  icon={faClose}
                  className="text-white bg-[#B71A62] text-2xl"
                />
              </div>

              <AddItemsPage handleModal={handleShowModal} />
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex items-start justify-start px-2 md:px-0 mt-2 gap-2">
        <Navigator handleAddProduct={handleShowModal} />
        <div className="min-h-screen w-full mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
