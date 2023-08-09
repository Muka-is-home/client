import React, { useEffect, useState } from "react";
import AboutSection from "./About";
import VendorServicesSection from "./VendorServicesSection";
import HomeBannerSection from "./HomeBanner";
import UserSection from "./Users";
import { HomePageData } from "../../data/pages/homePage";
import { VendorServices } from "../../data/vendorServices";

const BodyContent = () => {

  return (
    <>
      <HomeBannerSection />
      <UserSection value={HomePageData.sliders} />
      <VendorServicesSection value={VendorServices} />
      <div className="bg-light">
        <AboutSection value={HomePageData.FeaturedAgents} />
      </div> 
    </>
  );
};

export default BodyContent;
