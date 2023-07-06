import React from "react";

import NavbarThree from "../../../layout/headers/NavbarOne";


import FooterThree from "../../../layout/footers/FooterThree";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import PropertyCompare from "../../../components/pages/userPanel/compareproperty";

const CompareProperty = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <PropertyCompare />
      <FooterThree />
    </>
  );
};

export default CompareProperty;