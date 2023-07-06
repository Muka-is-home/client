/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import { AppPropertyData } from "../../../data/appPropertyData";
import AboutSection from "./About";
import VendorServicesSection from "../classic/PropertyServices";
//import LatestBlogSection from "../enterprise/LatestBlog";

import HomeBannerSection from "./HomeBanner";
import UserSection from "./Users";

const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.NEXT_PUBLIC_API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <HomeBannerSection />
      <UserSection value={AppPropertyData.UserType} />
      <VendorServicesSection value={AppPropertyData.VendorServices} />
      <div className="bg-light">
        <AboutSection value={clientData?.MeetOurAgent} />
      </div> 
      <div><h1>Add section and callout for 'library of educational tools for communities, businesses and universities.'</h1></div>
    </>
  );
};

export default BodyContent;
