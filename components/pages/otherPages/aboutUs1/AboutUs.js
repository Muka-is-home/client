import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";
import { AboutPageData } from "../../../../data/pages/aboutPage";

const AboutUsSection = () => {
  return (
    <>
    <section className='about-main ratio_36'>
      <Container>
        <Row>
          <div className='col'>
            <div className='title-1'>
              <img src="/assets/images/muka/open-door.png" className="img-fluid open-door-img" alt="" />
              <h2>{AboutPageData.mainHeading}</h2>
              <h4 className='font-primary'>{AboutPageData.subHeading1}</h4>
              <div className="row ratio_portrait gy-md-4 gy-3 py-3">
                <Col lg="3" sm="6" xs="6" className="grid-item ">
                  <Img src="/assets/images/muka/muka-studio-portrait6.jpeg" className="bg-img" />
                </Col>
                <Col lg="3" sm="6" xs="6" className="grid-item ">
                  <Img src="/assets/images/muka/muka-studio-portrait2.jpeg" className="bg-img" />
                </Col>
                <Col lg="3" sm="6" xs="6" className="grid-item ">
                  <Img src="/assets/images/muka/muka-studio-portrait3.jpeg" className="bg-img" />
                </Col>
                <Col lg="3" sm="6" xs="6" className="grid-item ">
                  <Img src="/assets/images/muka/muka-studio-portrait5.jpeg" className="bg-img" />
                </Col>
              </div>
              <h4 className='font-primary'>{AboutPageData.subHeading2}</h4>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  </>
  );
};

export default AboutUsSection;
