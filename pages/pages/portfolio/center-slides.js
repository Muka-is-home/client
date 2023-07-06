/**
 * It takes the locale from the context and returns the props for the page
 * @returns a React component.
 */
import React from "react";

import BodyContent from "../../../components/pages/portfolio/centerSlides";
import FooterThree from "../../../layout/footers/FooterThree";
import NavbarFive from "../../../layout/headers/NavbarOne";



const parallax = () => {
  return (
    <>
      <NavbarFive />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default parallax;
