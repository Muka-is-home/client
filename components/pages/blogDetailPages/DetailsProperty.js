import React from "react";
import { Row } from "reactstrap";

const DetailsProperty = ({ body }) => {
  return (
    <div className='details-property'>
      <Row>
        <p>{body}</p>
      </Row>
    </div>
  );
};

export default DetailsProperty;
