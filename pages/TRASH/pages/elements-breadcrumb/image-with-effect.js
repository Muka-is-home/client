import React from "react";
import dynamic from "next/dynamic";

import NavbarThree from "../../../../layout/headers/NavbarOne";


import Breadcrumb from "../../../../layout/Breadcrumb/BreadCrumb2";
import FooterThree from "../../../../layout/footers/FooterThree";

const DynamicBodyContent = dynamic(() => import("../../../components/pages/portfolio/grid/index.js"), {
  ssr: false,
});

const ImageWithEffect = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent size={6} />
      <FooterThree />
    </>
  );
};

export default ImageWithEffect;
