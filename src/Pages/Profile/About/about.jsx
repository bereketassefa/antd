import React from 'react'
import OverView from '../../../Components/Profile/Details/Pages/About/overView'
import Achivements from '../../../Components/Profile/Details/Pages/About/achivements'
import Service from '../../../Components/Profile/Details/Pages/About/Service'
import ProductPage from '../../../Components/Profile/Details/Pages/About/Products/ProductPage';

export default function About() {
  return (
    <div className="w-full p-4 bg-lightBg flex flex-col gap-2  ">
      <OverView />
      <Service />
      <ProductPage />
      <Achivements />
    </div>
  );
}
