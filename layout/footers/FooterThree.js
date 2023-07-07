import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterLink from "./elements/FooterLink";
import FooterBlog from "./footerThreeElements/FooterBlog";
import FooterContactUsDetails from "./footerThreeElements/FooterContactUsDetails";
import SubFooterTwo from "./elements/SubFooterTwo";

const FooterThree = () => {
  const [isActive, setIsActive] = useState();
  return (
    <footer>
      <div className="footer footer-bg">
        <Container>
          <Row>
            <FooterContactUsDetails />
            <Col xl="9">
              <Row>
                <FooterLink value={FooterData.feature} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterData.usefulLinks} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterData.social} isActive={isActive} setIsActive={setIsActive} />
              </Row>
              <FooterBlog />
            </Col>
          </Row>
        </Container>
      </div>
      <SubFooterTwo />
    </footer>
  );
};

export default FooterThree;
