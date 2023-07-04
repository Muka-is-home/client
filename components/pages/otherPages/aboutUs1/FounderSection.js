import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";

const FounderSection = () => {
    return (
    <section className='founder-detail bg-light'>
        <Container>
        <Row className="px-5">
            <div className='col-lg-4 order-lg-1'>
                <div className='founder-img'>
                    <img src='/assets/images/muka/JantriceJohnson.jpeg' className='ratio_portrait img-fluid' alt='' />
                    {/* <Img src="/assets/images/muka/JantriceJohnson.jpeg" className="bg-img" /> */}
                    <span className="img-caption">Founder Jantrice Johnson</span>
                </div>
            </div>
            <div className='col-lg-8 pe-5'>
                <h2>Built for you by a family of minority realtors</h2>
                <p className='font-primary'>
                Buying and selling a home is one of the biggest investments of your lifetime. But recent numbers show that minorities are at a 41% homeowner rate, compared to their counterparts. With Muka, the information and resources are now at your fingertips.
                </p>
                <p className='font-primary'>
                Our goal is to providing educational resources and home buyer counseling to individuals, families universities, foundations and communities. Inequality and prejudice continue to contribute to the home ownership gap and our mission is to fill in the gaps with knowledge and education about minority home ownership.
                </p>
                <button onClick={(e) => e} type='button' className='btn btn-gradient btn-pill'>
                Read more? <i className='fas fa-arrow-right ms-1'></i>
                </button>
            </div>
        </Row>
        </Container>
    </section>
    );
};

export default FounderSection;
