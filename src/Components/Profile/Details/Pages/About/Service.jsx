import React, { useState } from "react";
import { Collapse } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./ServiceCard/serviceCard";
import addisLogoS from "../../../../../assets/logo/addisLogoS.png";
import ServiceModal from "./ServiceModal/serviceModal";
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export default function Service() {
  const [openServiceModal, setOpenServiceModal] = useState(false);
  const { id } = useParams();  // Destructure id from useParams
  const [cookies] = useCookies(['user']);

  // console.log(cookies.user._id);
  const isUserIdEqual = cookies.user._id === id;
  const handleServiceModal = () => {
    setOpenProductModal(!openServiceModal);
  };
  return (
    <>
      <Collapse
        className="w-full bg-zinc-50"
        items={[
          {
            key: "1",
            label: (
              <div className="w-full flex items-center justify-between">
                <h1 className="font-bold text-smallP">Service</h1>
                {
                  isUserIdEqual && (
                      <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="text-secondary text-smallT cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-secondary text-smallT cursor-pointer"
                  />
                </div>
                  )
                }
              
              </div>
            ),
            children: (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-2">
                <ServiceCard
                  logo={addisLogoS}
                  productName={"ERP"}
                  size={"small"}
                  onClick={handleServiceModal}
                />
                <ServiceCard
                  logo={addisLogoS}
                  productName={"POS"}
                  size={"small"}
                  onClick={handleServiceModal}
                />
                <ServiceCard
                  logo={addisLogoS}
                  productName={"M-POS"}
                  size={"small"}
                  onClick={handleServiceModal}
                />
                <ServiceCard
                  logo={addisLogoS}
                  productName={"Exchange"}
                  size={"small"}
                  onClick={handleServiceModal}
                />
                <ServiceCard
                  logo={addisLogoS}
                  productName={"M-POS"}
                  size={"small"}
                  onClick={handleServiceModal}
                />
                <ServiceCard
                  logo={addisLogoS}
                  productName={"Exchange"}
                  size={"small"}
                  onClick={handleServiceModal}
                />
              </div>
            ),
          },
        ]}
      />
      <ServiceModal
        isVisisble={openServiceModal}
        onClose={handleServiceModal}
      />
    </>
  );
}
