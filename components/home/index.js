import React, { useEffect, useState } from "react";
import { getData } from "../../utils/getData";
import { AppPropertyData } from "../../data/appPropertyData";
import AboutSection from "./About";
import VendorServicesSection from "./VendorServicesSection";
import HomeBannerSection from "./HomeBanner";
import UserSection from "./Users";
import { HomePageData } from "../../data/pages/homePage";

const BodyContent = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <HomeBannerSection />
      <UserSection value={HomePageData.sliders} />
      <VendorServicesSection value={AppPropertyData.VendorServices} />
      <div className="bg-light">
        <AboutSection value={HomePageData.FeaturedAgents} />
      </div> 
    </>
  );
};

export default BodyContent;
