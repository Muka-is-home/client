/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";
import NavbarThree from "../../layout/headers/NavbarOne";

import FooterThree from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/BreadcrumbMukaSimple";
import BodyContent from "../../components/agent/agentProfile";
import { useRouter } from "next/router";

const AgentProfile = () => {
  const router = useRouter()
  const {id} = router.query;

  // TODO: MODIFY TO MAKE CALL TO API USING THE ID AND GET USER DETAILS
  const proObject = {
    name: "Jonathan Scott",
    title: "Real Estate Agent"
  }

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent proObject={proObject}/>
      <FooterThree />
    </>
  );
};

export default AgentProfile;
