/**
 * It fetches data from the API and then passes it to the BodyContent component
 * @returns The data is being returned from the API.
 */

// UPDATE TO ONLY CALL VENDORS 
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import BodyContent from "../../components/pages/agency/agencyGrid";
import Breadcrumb from "../../layout/Breadcrumb/BreadcrumbMukaSimple";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarThree from "../../layout/headers/NavbarOne";


import { getData } from "../../utils/getData";

const AgentList = () => {
  const [clientData, setClientData] = useState();


  const searchParams = useSearchParams()
  const state = searchParams.get('state')
  const county = searchParams.get('county')
  const specialty = searchParams.get('specialty')

  useEffect(() => {
    if (state && county) {
      getData(`${process.env.NEXT_PUBLIC_API_URL}/search?userType=Vendor&state=${state}&county=${county}`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
    } else if (specialty) {
      getData(`${process.env.NEXT_PUBLIC_API_URL}/vendors?specialty=${specialty}`)
      .then((res) => {
        setClientData(res.data);
      })
    } else {
      getData(`${process.env.NEXT_PUBLIC_API_URL}/vendors`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
    }
  }, [state, county]);

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
