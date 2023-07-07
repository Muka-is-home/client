import React from "react";
import { Col } from "reactstrap";
import { Logo } from "../../../components/elements/Logo";
import { FooterData } from "../../../data/footerData";

const FooterContactUsDetails = ({ value }) => {
  return (
    <Col xl="3">
      <div className="footer-details text-center">
        <Logo />
        <p>{value}</p>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
