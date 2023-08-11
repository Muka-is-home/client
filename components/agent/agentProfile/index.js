import React from "react";
import { Link, Mail, MapPin, PhoneCall } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import Filter from "../../../layout/sidebarLayout/Filter";
import Img from "../../../utils/BackgroundImageRatio";

const BodyContent = ({ proObject }) => {

  return (
    <section className="agent-section property-section agent-profile-wrap muka-agent-details">
      <Container>
        <Row className=" ratio_55">
          <Col xl="9" lg="8" className=" property-grid-2">
            <div className="our-agent theme-card">
              <Row>
                <Col sm="6" className=" ratio_landscape">
                  <div className="agent-image bg-size">
                    <Img src="/assets/images/avatar/5.jpg" className="img-fluid bg-img" alt="" />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="our-agent-details">
                    <h3 className="f-w-600">{proObject.name}</h3>
                    <h6>{proObject.title}</h6>
                    <ul>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <MapPin />
                          </div>
                          <div className="media-body">
                            <h6>Nashville, TN</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <PhoneCall />
                          </div>
                          <div className="media-body">
                            <h6>(615)518-4571</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <Mail />
                          </div>
                          <div className="media-body">
                            <h6>Contact@gmail.com</h6>
                          </div>
                        </div>
                      </li>
                      <li className="with-link">
                        <div className="media">
                          <div className="icons-square">
                            <Link />
                          </div>
                          <div className="media-body">
                            <h6>
                              <a>https://www.jonathanscott.com</a>
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ul className="agent-social">
                    <li>
                      <a href="https://www.facebook.com/" className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" className="linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="about-agent theme-card">
              <h3>About the agent</h3>
              <p className="font-primary">
              I'm Jonathan Scott, your Nashville Realtor specializing in helping minority buyers find their perfect homes. As an African American Realtor, I understand the unique challenges and needs faced by minority buyers in the real estate market. With years of experience under my belt, I have honed my skills in various specialties, including VA loans and assisting first-time homebuyers. I am well-versed in navigating the intricacies of VA loans, ensuring our deserving veterans and their families receive the benefits they are entitled to. Additionally, I take pride in guiding first-time buyers through the entire process, making it smooth and stress-free.<br/><br/>Being deeply knowledgeable about the Nashville housing market, I stay up-to-date on the latest trends, prices, and neighborhood developments. My goal is to provide personalized attention and tailored solutions that match the specific requirements of each client. Whether you're a minority buyer, a veteran, or a first-time homebuyer, I am committed to empowering you with the knowledge and resources needed to make informed decisions. My dedication to clients goes beyond the transaction itself.<br/><br/>I believe in building long-lasting relationships and maintaining open lines of communication, even after the deal is closed. Professionalism, integrity, and exceptional service are the cornerstones of my work, and I have earned a reputation as a trusted Realtor in Nashville's diverse communities.<br/><br/>If you're ready to embark on your homebuying journey, I'm here to be your advocate and guide. Contact me today, and let's work together to turn your dreams of homeownership into a reality.</p>
            </div>
          </Col>
          <Sidebar>
            <Filter />
          </Sidebar>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
