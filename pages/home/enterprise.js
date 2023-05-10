/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns The Enterprise component is being returned.
 */

import BodyContent from "../../components/home/enterprise";
import NavbarThree from "../../layout/headers/NavbarThree";
import FooterThree from "../../layout/footers/FooterThree";


const Enterprise = () => {
  return (
    <>
      <NavbarThree />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default Enterprise;
