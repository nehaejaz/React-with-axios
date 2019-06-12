import React from "react";
import { Col, Row, Button } from "react-materialize";

const ProductSummary = ({ item }) => {
  return (
    <div className="ProductSummary">
      <div className="">
        <Row className="grey">
          <Col s={3}>{item._id}</Col>
          <Col s={3}>{item.name}</Col>
          <Col s={2}>{item.price}</Col>
          <Col s={2}><Button>Update</Button></Col>
          <Col s={2}><Button className="red">Delete</Button></Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductSummary;
