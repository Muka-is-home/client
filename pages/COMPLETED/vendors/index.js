/**
 * It fetches data from the API and then passes it to the BodyContent component
 * @returns The data is being returned from the API.
 */

// UPDATE TO ONLY CALL VENDORS 
import React, { useEffect, useState } from "react";

import BodyContent from "../../../components/pages/agency/agencyGrid";
import Breadcrumb from "../../../layout/Breadcrumb/BreadcrumbMukaSimple";
import FooterThree from "../../../layout/footers/FooterThree";
import NavbarThree from "../../../layout/headers/NavbarOne";


import { getData } from "../../../utils/getData";

const AgentList = () => {
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data.agentList);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent title={"Vendors"} clientData={clientData} style={"list-view"} listSize={2} size={3} />
      <FooterThree />
    </>
  );
};

export default AgentList;
