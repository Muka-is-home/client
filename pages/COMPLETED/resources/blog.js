import React from "react";

import FooterThree from "../../../layout/footers/FooterThree";
import NavbarThree from "../../../layout/headers/NavbarOne";


import Breadcrumb from "../../../layout/Breadcrumb/BreadcrumbMukaSimple";
import BodyContent from "../../../components/modules/blog";

const button = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default button;
