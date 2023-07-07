import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import BlogTitle from "./BlogTitle";
import DetailsProperty from "./DetailsProperty";
import Filter from "../../../layout/sidebarLayout/Filter";

const BodyContent = (props) => {
  return (
    <section className="ratio_40">
      <Container>
        <Row>
          <Col xl={props.side ? "9" : "12"} lg={props.side ? "8" : ""} className=" order-lg-1">
            <div className="blog-single-detail theme-card">
              {props.children}
              <BlogTitle />
              <DetailsProperty />
            </div>
          </Col>
          {props.side && (
            <Sidebar side={props.side}>
             <Filter />
            </Sidebar>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
