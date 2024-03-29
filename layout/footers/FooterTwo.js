import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterBlog from "./elements/FooterBlog";
import FooterContactUsDetails from "./elements/FooterContactUsDetails";
// import FooterContactDetails from "./elements/FooterContactDetails";
import FooterLink from "./elements/FooterLink";
import FooterMap from "./elements/FooterMap";

const FooterTwo = () => {
  const [isActive, setIsActive] = useState();

  return (
    <footer className="footer-dark">
      <div className="footer footer-custom-col">
        <Container>
          <Row>
            <FooterContactUsDetails
              isActive={isActive}
              setIsActive={setIsActive}
              logo={
                <a>
                  <img src="/assets/images/logo/3.png" alt="" />
                </a>
              }
            />
            <FooterLink value={FooterData.col1} isActive={isActive} setIsActive={setIsActive} />
            <FooterMap isActive={isActive} setIsActive={setIsActive} />
            <FooterLink value={FooterData.col2} isActive={isActive} setIsActive={setIsActive} />
            <FooterBlog isActive={isActive} setIsActive={setIsActive} img={["/assets/images/footer/4.jpg", "/assets/images/footer/5.jpg"]} />
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterTwo;
