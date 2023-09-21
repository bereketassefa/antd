import React, { useState } from "react";
import Avatar from "../../../../../../Fields/Avatar/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import ServiceModal from "../ServiceModal/serviceModal";

export default function ServiceCard({ logo, productName, size, onClick }) {
  return (
    <>
      {size === "small" ? (
        <div
          className="flex flex-col gap-1 items-center justify-center p-4 border border-1 border-primary w-full cursor-pointer"
          onClick={onClick}
        >
          <div className="overflow-hidden w-fit h-fit">
            <img
              src={logo}
              alt={productName}
              className="w-[50px] aspect-square"
            />
          </div>
          <h1>{productName}</h1>
        </div>
      ) : size === "large" ? (
        <div
          className="flex w-full items-center justify-between bg-lightBg cursor-pointer p-4"
          onClick={onClick}
        >
          <div className="flex items-center gap-2">
            <Avatar img={logo} />
            <h1 className="text-smallP md:text-largeP">{productName}</h1>
          </div>
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon
              icon={faPencil}
              className="text-secondary text-smallT"
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="text-secondary text-smallT"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
