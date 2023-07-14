import Link from "next/link";
import React from "react";
import { Container, Row } from "reactstrap";
import { FooterData } from "../../../data/footerData";

const SubFooterTwo = ({value}) => {
  return (
    <div className="sub-footer footer-light">
      <Container>
        <Row>
          <div className="col-xl-6 col-md-6">
            <div className="copy-right">
              <p className="mb-0">Copyright {new Date().getFullYear()}, {value}</p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 text-end">
            <ul className="sub-footer-link">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <ul className='footer-social sub-footer-link'>
                {FooterData.sub_footer.map((value, index) => (
                  <li key={index}>
                    <a href={value.link}>
                      <i className={value.class}></i>
                    </a>
                  </li>
                ))}
              </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SubFooterTwo;
