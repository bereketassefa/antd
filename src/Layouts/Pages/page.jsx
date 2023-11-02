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
      <div className="w-full flex items-start justify-start md:px-2 md:gap-2 mt-2 ">
        <Navigator />
        <div className="min-h-screen w-full mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
