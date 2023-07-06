/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import Link from "next/link";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { DropdownInputFields } from "../../../elements/DropdownInputFields";
import { SearchForm } from "../../../../data/searchForm";

const InputForm = ({ label, lg, sm, lastSm }) => {
  const [filterValues, setFilterValues] = useState({});

  const [searchType, setSearchType] = useState([]);
  const [states, setStates] = useState([]);
  const [counties, setCounties] = useState([]);

  const getState = (searchType) => {
    const [, type] = searchType.split(' ');

    // make the call to the API (type.toLowerCase())
    const statesObj = {
      name: "stateList", 
      label: "Select A State", 
      size: "12",
      options: ["TN", "TEXAS"]//list that comes back from API
    }
    setSearchType(searchType);
    setStates([statesObj]);
    setCounties([]);
  }

  const getCounty = (state) => {
    // make the call to the API (state.toLowerCase())
    const countiesObj = {
      name: "countyList", 
      label: "Select A County", 
      size: "12",
      options: ["Davidson", "Cooke"]//list that comes back from API
    }
    setCounties([countiesObj]);
  } 

  const runQuery = (county) => {
    console.log(searchType, county)
  }

  return (
    <Row className="gx-3">
      <p>I'm looking for..</p>
      <DropdownInputFields query={getState} filterValues={filterValues} setFilterValues={setFilterValues} data={SearchForm} label={label} start={0} end={6} lg={lg} sm={sm} lastSm={lastSm} />

       {
        states.length ? <DropdownInputFields data={states} query={getCounty} label={label} start={0} end={6} lg={lg} sm={sm} lastSm={lastSm} filterValues={filterValues} setFilterValues={setFilterValues} /> : null
      }
      {
        counties.length ? <DropdownInputFields data={counties} filterValues={filterValues} setFilterValues={setFilterValues} label={label}  query={runQuery} start={0} end={6} lg={lg} sm={sm} lastSm={lastSm} /> : null
      }
      <Col lg={lg || 12}>
        <Link href="/listing/list-view/listing/left-sidebar" className="btn btn-solid mt-3">
            Search Muka Community
        </Link>
      </Col>
    </Row>
  );
};

export default InputForm;
