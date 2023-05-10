import React, { useEffect, useState } from "react";

import NavbarThree from "../../../layout/headers/NavbarThree";


import FooterThree from "../../../layout/footers/FooterThree";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../../components/pages/agency/agencyGrid";
import { getData } from "../../../utils/getData";

const AgencyList = () => {
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data.agencyList);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent clientData={clientData} style={"list-view"} listSize={2} size={3} />
      <FooterThree />
    </>
  );
};

export default AgencyList;
