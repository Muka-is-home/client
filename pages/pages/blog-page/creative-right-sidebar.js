/**
 * It takes the locale from the context and returns the translated strings for the given namespaces
 * @returns a React component.
 */
import React from "react";

import BodyContent from "../../../components/pages/blogPage/creativeSidebarPage";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../../layout/footers/FooterThree";
import NavbarThree from "../../../layout/headers/NavbarThree";



const CreativeRightSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"right"} />
      <FooterThree />
    </>
  );
};
export default CreativeRightSidebar;
