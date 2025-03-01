/**
 * It takes in a list of data and returns a list of components
 * @returns The return statement is used to return a value from a function.
 */
import React, { useEffect, useReducer } from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import PropertyBoxFour from "../../../elements/propertyBoxs/PropertyBoxFour";
import Header from "../../../../layout/sidebarLayout/Header";
import { gridReducer, initialGrid } from "../../../listing/gridView/grid/gridReducer";
import Filter from "../../../../layout/sidebarLayout/Filter";

const BodyContent = ({ title, clientData, listSize, size, style }) => {
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  useEffect(() => {
    gridDispatch({ type: "gridSize", payload: size });
    gridDispatch({ type: "gridStyle", payload: style || "grid-view" });
  }, []);

  return (
    <section className="agent-section property-section">
      <Container>
        <Row className="row ratio2_3">
          <Col className="property-grid-3 agent-grids">
            <Header title={title} grid={grid} gridDispatch={gridDispatch} gridBar={true} />
            <div className={`property-wrapper-grid ${grid.gridStyle === "list-view" ? "list-view" : ""}`}>
              <div className={`property-2 row column-sm property-label property-grid ${grid.gridStyle === "list-view" ? "list-view" : ""} `}>
                {clientData?.length ?
                  clientData.map((data, i) => (
                    <Col
                      sm={grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6"}
                      // md={grid.gridStyle === 'list-view' && '12'}
                      lg={grid.gridStyle === "grid-view" && ((grid.gridSize === 2 && "6") || ((grid.gridSize === 3 || 4) && "4"))}
                      xl={grid.gridStyle === "list-view" && listSize === 2 && "6"}
                      xxl={grid.gridStyle === "grid-view" && grid.gridSize === 4 && "3"}
                      className={`${grid.gridStyle === "list-view" ? "list-view" : ""} wow fadeInUp grid-view `}
                      key={i}>
                      <PropertyBoxFour type={title === "Experts" ? "vendors" : title.toLowerCase()} data={data} />
                    </Col>
                  )):
                  <p>NO AVAILABLE LISTINGS</p>
                  }
              </div>
            </div>
          </Col>
          <Sidebar>
           <Filter />
          </Sidebar>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
