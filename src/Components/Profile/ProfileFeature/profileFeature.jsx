import React from 'react'
import pofileFeature1 from '../../../assets/img/ProfileFeature1.png'
import FeatureImgHolder from './FeatureImgHolder/featureImgHolder'
import CompanyInfo from './CompanyInfo/companyInfo'
export default function ProfileFeature() {
  return (
    <div className='flex flex-col  bg-lightBg py-2 overflow-hidden' >
         
        <FeatureImgHolder />
         
         <CompanyInfo />
    </div>
  )
}
