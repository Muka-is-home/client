import React from "react";

import NavbarThree from "../../layout/headers/NavbarOne";


import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/modules/footer";

const button = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
    </>
  );
};

export default button;
