/**
 * It takes the locale from the context and returns the props for the page
 * @returns a React component.
 */
import React from "react";

import GridView from "../../../components/listing/gridView/grid/GridView";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../../layout/footers/FooterThree";
import NavbarThree from "../../../layout/headers/NavbarOne";



const NoSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={false} size={3} gridType={"grid-view"} gridBar={false} tabHeader={true} AdvancedSearchShow={true} infiniteScroll={true} />
      <FooterThree />
    </>
  );
};

export default NoSidebar;
