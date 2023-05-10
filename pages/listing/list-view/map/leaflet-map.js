/**
 * `dynamic` is a function that takes a function as an argument and returns a component
 * @returns a React component.
 */
import React from "react";

import dynamic from "next/dynamic";
import NavbarFive from "../../../../layout/headers/NavbarFive";


import FooterThree from "../../../../layout/footers/FooterThree";
import MapView from "../../../../components/listing/gridView/map/MapView";
import Breadcrumb4 from "../../../../layout/Breadcrumb/Breadcrumb4";

const LeafletMap = () => {
  const MyAwesomeMap = dynamic(() => import("../../../../components/listing/gridView/map/LeafletMap"), { ssr: false });
  return (
    <>
      <NavbarFive />
      <Breadcrumb4 />
      <MapView gridType={"list-view"} side={"right"}>
        <MyAwesomeMap />
      </MapView>
      <FooterThree />
    </>
  );
};

export default LeafletMap;
