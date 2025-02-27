import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import BlogTitle from "./BlogTitle";
import DetailsProperty from "./DetailsProperty";
import Filter from "../../../layout/sidebarLayout/Filter";

const BodyContent = ({ blog, side, children }) => {
  return (
    <section className="ratio2_3">
      <Container>
        <Row>
          <Col xl={side ? "9" : "12"} lg={side ? "8" : ""} className=" order-lg-1">
            <div className="blog-single-detail theme-card">
              {children}
              <DetailsProperty body={blog?.body}/>
            </div>
          </Col>
          {side && (
            <Sidebar side={side}>
             <Filter />
            </Sidebar>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
