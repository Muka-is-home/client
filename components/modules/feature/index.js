import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import FeaturedPropertySection from "../../home/classic/FeaturedProperty";
import FeaturedPropertySectionOne from "../../home/corporate/FeatureProperty";
import FeatureSection from "../../home/Feature";
import FeatureSectionOne from "../../home/enterprise/Feature";

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
      {/* <FeaturedPropertySection value={value?.FeaturedPropertyInClassicLayout} />
      <div className="section-pb">
        <FeatureSection value={value?.FeaturedProperty} />
      </div>
      <FeaturedPropertySectionOne value={value?.FeaturedPropertyInCorporateLayout} />
      <FeatureSectionOne value={AppPropertyData.FeaturedCitiesInEnterprise} /> */}
    </>
  );
};

export default BodyContent;
