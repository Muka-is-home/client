import React, { useEffect, useState } from "react";
import { AppPropertyData } from "../../../../data/appPropertyData";
import { getData } from "../../../../utils/getData";
import TestimonialSection from "../../../home/classic/Testimonial";
import BlogSection from "../../../home/corporate/Blog";
import BrandSection from "../../../home/enterprise/Brand";
import VendorServicesSection from "../../../home/enterprise/Propertyservices";
import AboutUsSection from "./AboutUs";
import SubscribeSection from "../../../home/classic/Subscribe";
import FounderSection from "./FounderSection";

const BodyContent = () => {
  return (
    <>
      <AboutUsSection />
      <FounderSection />
    </>
  );
};

export default BodyContent;
