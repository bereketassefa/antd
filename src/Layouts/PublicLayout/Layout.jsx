import React from "react";

import NavBar from "../../Components/PublicComponents/NavComponenet/NavBar";
import { Outlet } from "react-router-dom";

import Footer from "../../Components/PublicComponents/Footer";

import { Translator, useTranslation } from "../../Lang/Translater";

const Layout = () => {
  return (
    <>
      <Translator>
        <NavBar />
        {/* <div className=" min-h-[900px]"> */}
        <Outlet />
        {/* </div> */}
        <Footer />
      </Translator>
    </>
  );
};

export default Layout;
