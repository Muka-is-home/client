/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";

import NavbarThree from "../../layout/headers/NavbarThree";


import FooterThree from "../../layout/footers/FooterThree";
import BodyContent from "../../components/home/modern";

const Modern = () => {
  return (
    <>
      <NavbarThree />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default Modern;
