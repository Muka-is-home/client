import React from 'react';
import { Link, Mail, MapPin, PhoneCall } from 'react-feather';
import { Col, Container, Row } from 'reactstrap';
import Sidebar from '../../../layout/sidebarLayout/Sidebar';
import Filter from '../../../layout/sidebarLayout/Filter';
import Img from '../../../utils/BackgroundImageRatio';

const BodyContent = ({ proObject }) => {
  return (
    <section className='agent-section property-section agent-profile-wrap muka-agent-details'>
      <Container>
        <Row className=' ratio_55'>
          <Col xl='9' lg='8' className=' property-grid-2'>
            <div className='our-agent theme-card'>
              <Row>
                <Col sm='6' className=' ratio_landscape'>
                  <div className='agent-image bg-size'>
                    <Img src={proObject.image || 'https://placehold.co/600x400?text=Image+Not+Available'} className='img-fluid bg-img' alt='' />
                  </div>
                </Col>
                <Col sm='6'>
                  <div className='our-agent-details'>
                    <h3 className='f-w-600'>{proObject.name}</h3>
                    <h6>{proObject.user_type?.name}</h6>
                    <ul>
                      {proObject.company_address ? (
                        <li>
                          <div className='media'>
                            <div className='icons-square'>
                              <MapPin />
                            </div>
                            <div className='media-body'>
                              <h6>{proObject.company_address}</h6>
                            </div>
                          </div>
                        </li>
                      ) : null}

                      {proObject.company_phone ? (
                        <li>
                          <div className='media'>
                            <div className='icons-square'>
                              <PhoneCall />
                            </div>
                            <div className='media-body'>
                              <h6 href={`tel:${proObject.company_phone}`}>{proObject.company_phone}</h6>
                            </div>
                          </div>
                        </li>
                      ) : null}

                      {proObject.email ? (
                        <li>
                          <div className='media'>
                            <div className='icons-square'>
                              <Mail />
                            </div>
                            <div className='media-body'>
                              <h6>
                                <a href={`mailto:${proObject.email}?subject=Muka Site Message`}>
                                  {proObject.email}
                                </a>
                              </h6>
                            </div>
                          </div>
                        </li>
                      ) : null}

                      {proObject.website ? (
                        <li className='with-link'>
                          <div className='media'>
                            <div className='icons-square'>
                              <Link />
                            </div>
                            <div className='media-body'>
                              <h6>
                                <a href={proObject.website} target='_blank'>
                                  Website
                                </a>
                              </h6>
                            </div>
                          </div>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                  <ul className='agent-social'>
                    {proObject.facebook && (
                      <li>
                        <a href={proObject.facebook} target="_blank" className='facebook'>
                          <i className='fab fa-facebook-f'></i>
                        </a>
                      </li>
                    )}

                    {proObject.instagram && (
                      <li>
                        <a href={proObject.instagram} target="_blank" className='facebook'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    )}

                    {proObject.tiktok && (
                      <li>
                        <a href={proObject.tiktok} target="_blank" className='facebook'>
                          <i className='fab fa-tiktok'></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </Col>
              </Row>
            </div>
            <div className='about-agent theme-card'>
              <h3>About {proObject.name}</h3>
              <p className='font-primary'>{proObject.bio}</p>
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
