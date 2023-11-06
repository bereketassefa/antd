import React from "react";
import FeatureImgHolder from "./FeatureImgHolder/featureImgHolder";
import CompanyInfo from "./CompanyInfo/companyInfo";
export default function ProfileFeature({ data, Uid }) {
  return (
    <div className="dark:bg-[#1b1f23] flex flex-col  mt-4 bg-lightBg py-2 overflow-hidden  ">
      <FeatureImgHolder data={data} />

      <CompanyInfo Uid={Uid} data={data} />
    </div>
  );
}
