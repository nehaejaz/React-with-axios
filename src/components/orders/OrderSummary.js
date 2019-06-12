import React from "react";
import { Col, Row, Button } from "react-materialize";

const OrderSummary = ({ item }) => {
  return (
    <div className="OrderSummary">
      <div className="">
        <Row className="grey">
          <Col s={3}>{item.productId}</Col>
          <Col s={3}>{item.quantity}</Col>
          <Col s={3}><Button>Update</Button></Col>
          <Col s={3}><Button className="red">Delete</Button></Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderSummary;
