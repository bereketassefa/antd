<<<<<<< HEAD
import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../../Components/Topbar/topbar'
=======
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../../Components/Topbar/topbar";
import Navigator from "../../Components/Home/Navigator/navigator";
import AddItemsPage from "../../Pages/AddProduct/AddItemsPage";
import { IoClose } from "react-icons/io5";
>>>>>>> origin/Hawi

export default function Primary() {
  const [showAddProductModal, setShowAddProductModal] = useState(false)

  function handleShowModal() {
    setShowAddProductModal(true)
  }

  return (
    <div className="relative w-full p-0 m-0 flex flex-col max-w-full items-center">
      {showAddProductModal && (
        <div className="flex absolute bg-[rgba(0,0,0,0.5)] w-full z-50 h-full min-h-screen ">
          <div className="fixed flex h-screen w-full justify-center items-center p-4">
            <div className=" w-[700px] bg-white rounded-md p-6 ">
              <div className="flex justify-end right-0" onClick={() => setShowAddProductModal(false)}>
                <IoClose className="text-white bg-[#B71A62] text-2xl" />
              </div>
              <AddItemsPage />
            </div>
          </div>
        </div>
      )}

      <div className="fixed w-full z-10 bg-green-100 ">
        <Topbar />
      </div>

      <div className="mt-[65px] w-full flex items-start justify-center md:max-w-[1120px] gap-2 px-2 md:px-0  ">
        <Navigator handleAddProduct={handleShowModal} />
        <div className="w-full h-full   ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
