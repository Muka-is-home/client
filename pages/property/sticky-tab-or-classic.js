/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props.
 */
import React from "react";

import BodyContent from "../../components/property/stickyTabOrClassic";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarThree from "../../layout/headers/NavbarOne";



const StickyTabOrClassic = () => {
  return (
    <>
      <NavbarThree />
      <BodyContent side={"right"} />
      <FooterThree />
    </>
  );
};

export default StickyTabOrClassic;
