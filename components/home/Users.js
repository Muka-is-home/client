import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
import { usersSlider } from "../../data/slickSlider";
import NoSsr from "../../utils/NoSsr";

const UserSection = ({ value }) => {
  return (
    <section className="offer-section banner-section slick-between muka-users-banner">
      <Container>
        <Row>
          <Col>
            {/* <div className="title-1 text-white">
              <span className="label label-gradient">{NewOffer}</span>
              <h2>{OurNewOffer}</h2>
              <hr />
            </div> */}
            <NoSsr>
              <Slider className="offer-slider" {...usersSlider}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="offer-wrapper">
                        <div className="media">
                          <div className="offer-icon">
                            <img src={data.img} alt="" />
                          </div>
                          <div className="media-body">
                            <h3>{data.title}</h3>
                            <p>{data.details}</p>
                            <Link href="/" className="btn btn-solid mt-3">
                                Find a Realtor
                            </Link>
                          </div>
                        </div>
                      </div>
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
export default UserSection;
