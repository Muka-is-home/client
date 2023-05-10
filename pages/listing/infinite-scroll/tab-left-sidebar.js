/**
 * It takes the locale from the context and returns the translations for the given namespaces
 * @returns A React component.
 */
import React from "react";

import GridView from "../../../components/listing/gridView/grid/GridView";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../../layout/footers/FooterThree";
import NavbarThree from "../../../layout/headers/NavbarThree";



const LeftSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"left"} size={3} gridType={"grid-view"} gridBar={false} tabHeader={true} infiniteScroll={true} />
      <FooterThree />
    </>
  );
};

export default LeftSidebar;
