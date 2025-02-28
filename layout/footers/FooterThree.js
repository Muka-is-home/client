import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterLink from "./elements/FooterLink";
import FooterContactUsDetails from "./footerThreeElements/FooterContactUsDetails";
import SubFooterTwo from "./elements/SubFooterTwo";

const FooterThree = () => {
  const [isActive, setIsActive] = useState();
  return (
    <footer>
      <div className="footer footer-bg">
        <Container>
          <Row>
            <FooterContactUsDetails value={FooterData.brand_description}/>
            <Col xl="6">
              <Row>
                <FooterLink value={FooterData.col1} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterData.col2} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterData.col3} isActive={isActive} setIsActive={setIsActive} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <SubFooterTwo value={FooterData.copyright}/>
    </footer>
  );
};

export default FooterThree;
