import Link from "next/link";
import React from "react";
import { Eye, Heart, Mail } from "react-feather";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { about1 } from "../../data/slickSlider";
import NoSsr from "../../utils/NoSsr";
import { HomePageData } from "../../data/pages/homePage";

const AboutSection = ({ value }) => {
  return (
    <section className="about-section slick-between">
      <Container>
        <Row>
          <Col>
            <div className="title-1">
              <span className="label label-gradient">Our Story</span>
              <h2>{HomePageData.ourStoryHeading}</h2>
              <p>{HomePageData.ourStoryText}</p>
              <hr />
              { HomePageData.youTubeVideoID ? (<iframe width="100%" height="600" src={`https://www.youtube.com/embed/${HomePageData.youTubeVideoID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              ): null}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
