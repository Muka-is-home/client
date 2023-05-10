/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";

import NavbarThree from "../../../layout/headers/NavbarThree";


import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../../layout/footers/FooterThree";
import BodyContent from "../../../components/pages/blogPage/masonry";

const MasonryLeftSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"left"} />
      <FooterThree />
    </>
  );
};

export default MasonryLeftSidebar;
