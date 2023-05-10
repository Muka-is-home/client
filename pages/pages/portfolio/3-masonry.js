/* A code snippet. */
import React from "react";
import dynamic from "next/dynamic";

import NavbarThree from "../../../layout/headers/NavbarThree";


import FooterThree from "../../../layout/footers/FooterThree";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";

const DynamicBodyContent = dynamic(() => import("../../../components/pages/portfolio/Masonry/index"), {
  ssr: false,
});
const Masonry3 = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent masonryGrid={3} />
      <FooterThree />
    </>
  );
};

export default Masonry3;
