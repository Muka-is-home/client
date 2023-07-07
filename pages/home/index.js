/**
 * It returns the NavbarOne, BodyContent, and FooterOne components
 * @returns The NavbarOne, BodyContent, and FooterOne components are being returned.
 */

import { useEffect } from "react";
import BodyContent from "../../components/home";
import FooterOne from "../../layout/footers/FooterThree";
import Navbar from "../../layout/headers/NavbarOne";



const SliderFilterSearch = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default SliderFilterSearch;
