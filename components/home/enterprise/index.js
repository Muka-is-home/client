/**
 * It fetches data from the API and passes it to the components
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { AppPropertyData } from "../../../data/appPropertyData";
import { getData } from "../../../utils/getData";
import BrandSection from "./Brand";
import FeatureSection from "./Feature";
import HomeBannerSection from "./HomeBanner";
import LatestBlogSection from "./LatestBlog";
import LatestPropertySection from "./LatestProperty";
import ParallaxBannerSection from "./ParallaxBanner";
import PropertyOfTheDaySection from "./PropertyOfTheDay";
import VendorServicesSection from "./Propertyservices";
import PropertyTabSection from "./PropertyTab";
import TestimonialSection from "./Testimonial";

const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <HomeBannerSection />
      <VendorServicesSection value={AppPropertyData.PropertyServices} />
      <PropertyOfTheDaySection value={value?.PropertyOfTheDay} />
      <LatestPropertySection value={value?.LatestPropertyListingInEnterprise} />
      <PropertyTabSection value={value} />
      <FeatureSection value={AppPropertyData.FeaturedCitiesInEnterprise} />
      <ParallaxBannerSection />
      <TestimonialSection value={clientData?.WhatPeopleSay} />
      <LatestBlogSection value={value?.LatestBlogInEnterprise} />
      <BrandSection />
    </>
  );
};

export default BodyContent;
