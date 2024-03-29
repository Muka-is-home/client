import React, { useEffect, useReducer, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "../../../../layout/sidebarLayout/Header";
import { gridReducer, initialGrid } from "../../../listing/gridView/grid/gridReducer";
import Filter from "../../../../layout/sidebarLayout/Filter";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
// import { products } from '../../../../data/pages/storePage';
import ProductBoxFour from "../../../elements/propertyBoxs/ProductBox";
import { getData } from "../../../../utils/getData";

const BodyContent = () => {
  const [products, setProducts] = useState([]);
  const [style, listSize, size] = ["grid-view", 2,3];
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  useEffect(() => {
    gridDispatch({ type: "gridSize", payload: size });
    gridDispatch({ type: "gridStyle", payload: style || "grid-view" });

    getData(`${process.env.NEXT_PUBLIC_API_URL}/shop`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
     <section className="agent-section property-section">
      <Container>
        <Row className="row ratio2_3">
          <Col className="property-grid-3 agent-grids">

            <Header title="Store" grid={grid} gridDispatch={gridDispatch} gridBar={false} />
            <div className={`property-wrapper-grid ${grid.gridStyle === "list-view" ? "list-view" : ""}`}>
              <div className={`property-2 row column-sm property-label property-grid ${grid.gridStyle === "list-view" ? "list-view" : ""} `}>
                {products.length ?
                  products?.map((product) => (
                    <Col
                      sm={grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6"}
                      md={grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6"}
                      lg={grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6"}
                      xl={grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6"}
                      xxl={grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6"}
                      className={`${grid.gridStyle === "list-view" ? "list-view" : ""} wow fadeInUp grid-view `}
                      key={product.id}>
                      <ProductBoxFour data={product} />
                    </Col>
                  )):
                  <p>NO AVAILABLE PRODUCTS</p>}
              </div>
            </div>
          </Col>
          <Sidebar>
           <Filter />
          </Sidebar>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default BodyContent;
