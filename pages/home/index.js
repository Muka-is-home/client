/**
 * It returns the NavbarOne, BodyContent, and FooterOne components
 * @returns The NavbarOne, BodyContent, and FooterOne components are being returned.
 */

import { useEffect } from "react";
import BodyContent from "../../components/home/slider-filter-search";
import { ConfigDB } from "../../config/themeCustomizerConfig";
import FooterOne from "../../layout/footers/FooterThree";
import NavbarOne from "../../layout/headers/NavbarOne";



const SliderFilterSearch = () => {
  useEffect(() => {}, []);
  return (
    <>
      <NavbarOne />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default SliderFilterSearch;
