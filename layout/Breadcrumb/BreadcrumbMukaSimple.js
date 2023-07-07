import Link from "next/link";
import React from "react";
import { Container } from "reactstrap";
import Img from "../../utils/BackgroundImageRatio";
import { Headers } from "../../data/headers";

const BreadcrumbMukaSimple = () => {
  return (
    <section className="breadcrumb-section breadcrumb-simple">
      <Img src={Headers.image} className="bg-img img-fluid" alt="" />
      <Container>
        <div className="breadcrumb-content"></div>
      </Container>
    </section>
  );
};

export default BreadcrumbMukaSimple;
