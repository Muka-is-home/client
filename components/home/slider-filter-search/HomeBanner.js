/**
 * It renders a section with a container, a row, and two columns. The first column contains a
 * container, which contains a div with a slider and a WhatAreYouLookingFor component. The second
 * column contains a div with an InputForm component
 * @returns The HomeBannerSection component is being returned.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { homeSlider1 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import WhatAreYouLookingFor from "../../elements/WhatAreYouLookingFor";
import HomeSliderContent from "./homeElements/HomeSliderContent";
import InputForm from "./homeElements/InputForm";

const HomeBannerSection = () => {
  return (
    <section className="home-section layout-1 layout-6">
      <div className="home-main">
        <Container>
          <Row>
            <Col lg="7">
              <Container>
                <div className="home-left">
                  <div>
                    {/* home main slider start*/}
                    <h1>We're bridging the gap in minority homeownership</h1>
                    <h3>Connect with minority home buyers, sellers, and industry professionals?</h3>
                    {/* <NoSsr>
                      <Slider className="home-slider-1 arrow-light slick-shadow" {...homeSlider1}>
                        <HomeSliderContent mainTitle="Reality Properties solve your problems" />
                        <HomeSliderContent mainTitle="Properties Seller" />
                      </Slider>
                    </NoSsr> */}
                    {/* home main slider end*/}
                    {/* <WhatAreYouLookingFor /> */}
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl="4" lg="5">
              <div className="home-search-6">
                <div className="vertical-search">
                  <div className="left-sidebar">
                    <h5>Find a trusted professional</h5>
                    <InputForm lastSm="6" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HomeBannerSection;
