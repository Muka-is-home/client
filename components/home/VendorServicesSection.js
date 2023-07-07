import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { HomePageData } from "../../data/pages/homePage";

const VendorServicesSection = ({ value }) => {
  return (
    <section className="service-section service-1">
      <Container>
        <Row>
          <Col>
            <div className="title-1">
              <h2>{HomePageData.vendorHeading}</h2>
              <p>{HomePageData.vendorText}</p>
            </div>
            <Row className=" property-service column-space">
              {value?.map((data, i) => (
                <Col xl="4" md="6" className=" wow fadeInUp" key={i}>
                  <div className="service-box">
                    {/* <div className="icon-round">{data.img}</div> */}
                    <h3>
                      <Link href="/pages/other-pages/services">{data.title}</Link>
                    </h3>
                    <p>{data.details}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VendorServicesSection;
