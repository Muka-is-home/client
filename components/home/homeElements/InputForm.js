import Link from "next/link";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { DropdownInputFields } from "../../elements/DropdownInputFields";
import { getData } from "../../../utils/getData";
import { useRouter } from "next/router";

const SearchForm = {
  name: "propertyStatus",
  label: "Select A Professional",
  size: "12",
  options: ["Realtor", "Vendor"],
};

const InputForm = () => {
  const [filterValues, setFilterValues] = useState({});

  const [searchType, setSearchType] = useState("");
  const [states, setStates] = useState({});
  const [stateName, setStateName] = useState("");
  const [counties, setCounties] = useState({});
  const [countyName, setCountyName] = useState("");

  const router = useRouter();

  const getState = (searchType) => {
    getData(`${process.env.NEXT_PUBLIC_API_URL}/search?userType=${searchType}`)
      .then((res) => {
        const statesObj = {
          name: "stateList",
          label: "Select A State",
          size: "12",
          options: Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2), //list that comes back from API
        };
        setSearchType(searchType);
        setStates(statesObj);
        setCounties({});
      })
      .catch((error) => console.log("Error", error));
  };

  const getCounty = (state) => {
    getData(
      `${process.env.NEXT_PUBLIC_API_URL}/search?userType=${searchType}&state=${state}`
    ).then((res) => {
      const countiesObj = {
        name: "countyList",
        label: "Select A County",
        size: "12",
        options: Object.keys(res.data)
          .map((key) => [res.data[key]])
          .flat(2), //list that comes back from API
      };
      setCounties(countiesObj);
      setStateName(state);
    });
  };

  const statesExist = states.options?.length;
  const countiesExist = Object.keys(counties).length;

  return (
    <Row className="gx-3">
      <h3>Search the Muka Community</h3>
      <DropdownInputFields
        query={getState}
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        data={SearchForm}
      />
      {statesExist ? (
        <DropdownInputFields
          data={states}
          query={getCounty}
          filterValues={filterValues}
          setFilterValues={setFilterValues}
        />
      ) : searchType ? (
        <Col lg={12}>
          <button
            onClick={() => {
              const path = searchType === "Realtor" ? "agents" : "vendors";
              router.push(`/${path}`);
            }}
            className="btn btn-solid mt-3"
          >
            Search Muka Community
          </button>
        </Col>
      ) : null}
      {countiesExist ? (
        <DropdownInputFields
          data={counties}
          filterValues={filterValues}
          query={setCountyName}
          setFilterValues={setFilterValues}
        />
      ) : null}
      {statesExist && filterValues.countyList ? (
        <Col lg={12}>
          <button
            onClick={() => {
              const path = searchType === "Realtor" ? "agents" : "vendors";
              router.push(`/${path}?state=${stateName}&county=${countyName}`);
            }}
            className="btn btn-solid mt-3"
          >
            Search Muka Community
          </button>
        </Col>
      ) : null}
    </Row>
  );
};

export default InputForm;
