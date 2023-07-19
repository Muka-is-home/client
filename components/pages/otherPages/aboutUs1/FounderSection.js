import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";
import { AboutPageData } from "../../../../data/pages/aboutPage";

const FounderSection = () => {
    return (
    <section className='founder-detail bg-light'>
        <Container>
        <Row className="px-5">
            <div className='col-lg-4 order-lg-1'>
                <div className='founder-img'>
                    <img src='/assets/images/muka/JantriceJohnson.jpeg' className='ratio_portrait img-fluid' alt='' />
                    {/* <Img src="/assets/images/muka/JantriceJohnson.jpeg" className="bg-img" /> */}
                    <span className="img-caption">{AboutPageData.founderImg}</span>
                </div>
            </div>
            <div className='col-lg-8 pe-5'>
                <h2>{AboutPageData.founderHeading}</h2>
                <p className='font-primary'>{AboutPageData.founderPara1}
                </p>
                <p className='font-primary'>{AboutPageData.founderPara2}
                </p>
            </div>
        </Row>
        </Container>
    </section>
    );
};

export default FounderSection;
