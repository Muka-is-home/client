/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
import React, { useEffect, useState } from "react";
import NavbarThree from "../../../layout/headers/NavbarOne";

import FooterThree from "../../../layout/footers/FooterThree";
import Breadcrumb from "../../../layout/Breadcrumb/BreadcrumbMukaSimple";
import BodyContent from "../../../components/agent/agentProfile";
import { useRouter } from "next/router";
import { getData } from "../../../utils/getData";

const ProProfile = () => {
  const [proData, setProData] = useState({});
  const router = useRouter()
  const {type, id} = router.query;

  // TODO: MODIFY TO MAKE CALL TO API USING THE ID AND GET USER DETAILS
  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_API_URL}/${type}/${id}`)
    .then((res) => {
      setProData(res.data);
    })
    .catch((error) => console.log("Error", error));
  }, [type, id])

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent proObject={proData}/>
      <FooterThree />
    </>
  );
};

export default ProProfile;
