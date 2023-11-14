import React, { useEffect, useState } from 'react';
import AboutSection from './About';
import VendorServicesSection from './VendorServicesSection';
import HomeBannerSection from './HomeBanner';
import UserSection from './Users';
import { HomePageData } from '../../data/pages/homePage';
import { getData } from '../../utils/getData';
// import { VendorServices } from "../../data/vendorServices";

const BodyContent = () => {
  const [vendorServices, setVendorServices] = useState([]);

  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_API_URL}/specializations?homePage=True`).then((res) => {
      setVendorServices(res.data);
    });
  }, []);

  return (
    <>
      <HomeBannerSection />
      <UserSection value={HomePageData.sliders} />
      {vendorServices.length && <VendorServicesSection value={vendorServices} />}
      <div className='bg-light'>
        <AboutSection />
      </div>
    </>
  );
};

export default BodyContent;
