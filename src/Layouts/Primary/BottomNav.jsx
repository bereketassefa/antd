import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCirclesRelation } from "react-icons/tb";

const navigations = [
  { label: "Home", icon: <AiOutlineHome className="mx-auto text-[30px]" /> },
  {
    label: "Notifcation",
    icon: <MdNotificationsNone className="mx-auto text-[30px]" />,
  },
  {
    label: "Relations",
    icon: <TbCirclesRelation className="mx-auto text-[30px]" />,
  },
  {
    label: "Profile",
    icon: <BsPersonCircle className="mx-auto text-[30px]" />,
  },
  {
    label: "Setting",
    icon: <IoSettingsOutline className="mx-auto text-[30px]" />,
  },
];

function Icon({ label, icon }) {
  return (
    <div className="opacity-70 px-2 gap-[4px] w-[90px]  justify-center rounded-md  flex-col">
      {icon ? icon : <AiOutlineHome className="mx-auto text-[30px]" />}
      <span className="block mx-auto text-center">{label}</span>
      {label == "Home" ? (
        <div className="bg-red-700 h-[8px] mx-auto  rounded-t-md"></div>
      ) : null}
    </div>
  );
}

function BottomNav() {
  return (
    <div className="bg-white lg-sm:hidden color-red-700 max-sm:fixed bottom-0 shadow-xl rounded-t-[15px] border-solid border-2 border-t-black border-x-black h-[90px] flex justify-between items-center px-6 w-full sm:hidden  ">
      {navigations.map((nav) => {
        return <Icon label={nav.label} icon={nav.icon} />;
      })}
    </div>
  );
}

export default BottomNav;
