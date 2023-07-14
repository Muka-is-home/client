import React from "react";
import { Mail, MapPin } from "react-feather";
import { Col, Container } from "reactstrap";
import LogInCard from "../contactUs1/LogInCard";
import { ContactPageData } from "../../../data/pages/contactPage";
import { FooterData } from "../../../data/footerData";
import { GoogleForm } from "./ContactGoogleForm";

const GetInTouchSection = () => {
  return (
    <section className='small-section contact-2'>
      <Container>
        <div className='row gx-3'>
          <Col xl='6' lg='5'>
          <GoogleForm />
          </Col>
          <Col xl='6' lg='7' className='contact_section contact_wrap_2'>
            <div className='row contact-detail theme-card'>
              <Col lg='12' className='p-0'>
                <div className='contact-content'>
                  <h2>{ContactPageData.mainHeading}</h2>
                  <p className='font-primary'>
                   {ContactPageData.subHeading}
                  </p>
                </div>
              </Col>
              <Col sm='6' className=' p-0'>
                <div className='contact_wrap shadow-none text-start ps-0'>
                  <MapPin />
                  <h4>Where ?</h4>
                  <p className='font-primary'>
                   {ContactPageData.address}
                  </p>
                </div>
              </Col>
              <Col sm='6' className='p-0'>
                <div className='contact_wrap shadow-none text-start ps-0'>
                  <Mail />
                  <h4>Online service</h4>
                  <a href={`mailto:${ContactPageData.email}`} target="_blank">{ContactPageData.email}</a>
                  <div style={{marginTop: '20px'}} className='footer-social sub-footer-link'>
                {FooterData.sub_footer.map((value, index) => (
                  <span style={{marginRight: '10px'}} key={index}>
                    <a href={value.link}>
                      <i className={value.class}></i>
                    </a>
                  </span>
                ))}
              </div>
                </div>
              </Col>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouchSection;
