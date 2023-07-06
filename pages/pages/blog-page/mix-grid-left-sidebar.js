/**
 * It takes the locale from the context and returns the translated strings for the given namespaces
 * @returns a React component.
 */
import React from "react";

import BodyContent from "../../../components/pages/blogPage/mixGridSidebar";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../../layout/footers/FooterThree";
import NavbarThree from "../../../layout/headers/NavbarOne";



const MixGridLeftSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"left"} />
      <FooterThree />
    </>
  );
};

export default MixGridLeftSidebar;
