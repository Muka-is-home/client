/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";
import Navbar from "../../layout/headers/NavbarOne";
import Footer from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/BreadcrumbMukaSimple";
import BodyContent from "../../components/contact/contactUs2";

const ContactUs1 = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <BodyContent />
      <Footer />
    </>
  );
};

export default ContactUs1;
