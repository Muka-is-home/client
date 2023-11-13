import FooterOne from "../../layout/footers/FooterThree";
import NavbarThree from "../../layout/headers/NavbarOne";
import BodyContent from "../../components/pages/otherPages/store";
import BreadcrumbMukaSimple from "../../layout/Breadcrumb/BreadcrumbMukaSimple";

const Store = () => {
  return (
    <>
      <NavbarThree />
      <BreadcrumbMukaSimple />

      <BodyContent />
      <FooterOne />
    </>
  );
};

export default Store;
