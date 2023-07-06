/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import Link from "next/link";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { DropdownInputFields } from "../../../elements/DropdownInputFields";

const InputForm = ({ label, lg, sm, lastSm }) => {
  const [filterValues, setFilterValues] = useState({});

  return (
    <Row className="gx-3">
      <p>I'm looking for..</p>
      <DropdownInputFields filterValues={filterValues} setFilterValues={setFilterValues} label={label} start={0} end={6} lg={lg} sm={sm} lastSm={lastSm} />
      <Col lg={lg || 12}>
        <Link href="/listing/list-view/listing/left-sidebar" className="btn btn-solid mt-3">
            Search Muka Community
        </Link>
      </Col>
    </Row>
  );
};

export default InputForm;
