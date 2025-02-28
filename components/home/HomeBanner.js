/**
 * It renders a section with a container, a row, and two columns. The first column contains a
 * container, which contains a div with a slider and a WhatAreYouLookingFor component. The second
 * column contains a div with an InputForm component
 * @returns The HomeBannerSection component is being returned.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import InputForm from "./homeElements/InputForm";
import { HomePageData } from "../../data/pages/homePage";
import Img from "../../utils/BackgroundImageRatio";

const HomeBannerSection = () => {
  return (
    <section className="home-section layout-1 layout-6 muka-home">
      <div className="home-main">
        <Container>
          <Row>
            <Col lg="7">
              <Container>
                <Img src="/assets/images/logo/muka-logo-teal.svg" className="img-fluid" alt="" />
                <div className="home-left">
                  <div>
                    {/* home main slider start*/}
                    <h1>{HomePageData.subHeading}</h1>
                    {/* <h3>{HomePageData.subHeading}</h3> */}
                  </div>
                  <div className="home-search-6 hide-on-mobile">
                    <div className="vertical-search">
                      <div className="left-sidebar">
                        {/* <h5>Find a trusted professional</h5> */}
                        <InputForm lastSm="6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl="4" lg="5">
            </Col>
          </Row>
        </Container>
        <Img src="/assets/images/muka/muka-graphic-full.png" className="img-fluid bg-img" alt="" />
      </div>
    </section>
  );
};

export default HomeBannerSection;
