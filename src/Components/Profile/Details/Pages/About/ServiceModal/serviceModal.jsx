import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import React from "react";
import ServiceCard from "../ServiceCard/serviceCard";
import addisLogoS from "../../../../../../assets/logo/addisLogoS.png";
export default function ServiceModal({ isVisisble, onClose }) {
  return (
    <Modal
      open={isVisisble}
      onCancel={onClose}
      footer={[]}
      style={{
        top: 80,
        borderRadius: 0,
      }}
      width={700}
    >
      <div className="w-full flex flex-col gap-4 mt-6">
        <div className="w-full flex items-center justify-between border-b border-b-1 border-b-gray-300 py-4">
          <h1 className="text-smallT font-bold">Products</h1>
          <FontAwesomeIcon
            icon={faPlus}
            className="text-secondary text-smallT"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <ServiceCard logo={addisLogoS} productName={"ERP"} size={"large"} />
          <ServiceCard logo={addisLogoS} productName={"POS"} size={"large"} />
          <ServiceCard logo={addisLogoS} productName={"M-POS"} size={"large"} />
          <ServiceCard
            logo={addisLogoS}
            productName={"Exchange"}
            size={"large"}
          />
          <ServiceCard logo={addisLogoS} productName={"M-POS"} size={"large"} />
          <ServiceCard
            logo={addisLogoS}
            productName={"Exchange"}
            size={"large"}
          />
        </div>
      </div>
    </Modal>
  );
}
