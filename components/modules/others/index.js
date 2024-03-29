import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import SubscribeSection from "../../home/classic/Subscribe";
import VideoSection from "../../home/classic/Video";
import PricingSection from "../../home/corporate/Pricing";
import PropertyOfTheDaySection from "../../home/enterprise/PropertyOfTheDay";
import CitiesWisePropertySection from "../../home/CitiesWiseProperty";

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
      {/* <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} /> */}
      {/* <OfferSection value={AppPropertyData.OurNewOffer} /> */}
      {/* <VideoSection />
      <PropertyOfTheDaySection value={value?.PropertyOfTheDay} />
      <PricingSection value={AppPropertyData.PricingPlan} />
      <SubscribeSection /> */}
    </>
  );
};

export default BodyContent;
