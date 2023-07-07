import Link from "next/link";
import React from "react";
import { Eye, Heart, Mail } from "react-feather";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { about1 } from "../../data/slickSlider";
import NoSsr from "../../utils/NoSsr";
import { HomePageData } from "../../data/homePage";

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
              { HomePageData.youTubeVideoID ? (<iframe width="100%" height="600" src={`https://www.youtube.com/embed/${HomePageData.youTubeVideoID}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              ): null}
            </div>
            <NoSsr>
              <Slider className="about-wrap arrow-white" {...about1}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <Row className="about-content">
                        <Col xl="6">
                          <div className="about-image">
                            <img src={data.img} className="img-fluid" style={{minHeight: '308px'}} alt="" />
                          </div>
                        </Col>
                        <Col xl="6">
                          <div className="our-details">
                            <Link href="/agent/agent-profile">
                              <h6 className="d-flex">
                                {data.name}
                                <span className="label-heart ms-2">
                                  <Heart />
                                </span>
                              </h6>
                            </Link>
                            <h3>{data.work}</h3>
                            <span className="font-primary">
                              <Mail className="me-1" />
                              {data.email}
                            </span>
                            <p className="font-primary">{data.detail}</p>
                            <Link href="/agent/agent-profile" className="btn btn-gradient btn-pill mt-2">
                              <Eye />
                              View Profile
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
