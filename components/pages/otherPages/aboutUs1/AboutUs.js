import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";

const AboutUsSection = () => {
  return (
    <>
    <section className='about-main ratio_36'>
      <Container>
        <Row>
          <div className='col'>
            <div className='title-1'>
              <h2>What is Muka?</h2>
              <h4 className='font-primary'>Muka, LLC. is a virtual community dedicated to bridging the gap in minority homeownership. Founded by Jantrice Johnson, a Tennessee Realtor and passionate advocate for rebuilding communities, Muka strives to empower and connect minority home buyers, sellers, and industry professionals through a comprehensive online platform.</h4>
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
              <h4 className='font-primary'>At Muka, we are deeply aware of the persistent disparity between minority and white homeownership, which has unfortunately widened over the years. As disheartening as these statistics may be, they fuel our commitment to effect positive change. Inspired by the vision of a more inclusive and equitable real estate landscape, we have created Muka as a catalyst for closing this gap.</h4>
            </div>
            {/* <div className='user-about'>
              <Row>
                <div className='col-xl-5 col-lg-7'>
                  <div className='about-content'>
                    <h3>Homebuying shouldn't feel like an obstacle course.</h3>
                    <p className='font-primary'>Buying and selling a home is one of the biggest investments of your lifetime. But recent numbers show that minorities are at a 41% homeowner rate, compared to their counterparts.</p>
                    <p className='font-primary'>At Muka, we connect minority homebuyers and sellers to trusted realtors that understand you and your needs while also providing educational tips that will make the home buying and selling experience easier – one online connection at a time.</p>
                  </div>
                  <div className='about-listing'>
                    <ul>
                      <li>
                        <h4>15,801</h4>
                        <p>Total property</p>
                      </li>
                      <li>
                        <h4>5792</h4>
                        <p>Agents</p>
                      </li>
                      <li>
                        <h4>3871</h4>
                        <p>Agency</p>
                      </li>
                      <li>
                        <h4>4791+</h4>
                        <p>Sold out property</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-xl-7 col-lg-5'>
                  <Img src='https://mukaishome.com/wp-content/uploads/2020/11/Woman-at-desk-07.svg' className='img-fluid bg-img' alt='' />
                </div>
              </Row>
            </div> */}
          </div>
        </Row>
      </Container>
    </section>
  </>
  );
};

export default AboutUsSection;
