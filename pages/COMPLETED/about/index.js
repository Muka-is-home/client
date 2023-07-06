import React from "react";

import NavbarOne from "../../../layout/headers/NavbarOne";


import FooterThree from "../../../layout/footers/FooterThree";
import Breadcrumb from "../../../layout/Breadcrumb/BreadcrumbMukaSimple";
import BodyContent from "../../../components/pages/otherPages/aboutUs1";

const AboutUs1 = () => {
  return (
    <>
      <NavbarOne />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default AboutUs1;
