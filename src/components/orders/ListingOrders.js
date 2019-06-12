import React from "react";
import OrderSummary from './OrderSummary'
import { Col, Row, Card } from "react-materialize";

const ListingOrders = ({ item }) => {
  return (
    <div className="ListingDonor">
      <Row>
        <Col m={12} s={12}>
          <Card
            className="blue-grey darken-1 center"
            textClassName="white-text"
            title="Displaying Orders"
          >
            <Row>
              <Col s={3} className=" white-text">
                ProductId
              </Col>
              <Col s={3} className=" white-text">
                Quantity
              </Col>
              <Col s={3} className=" white-text">
                Update
              </Col>
              <Col s={3} className=" white-text">
                Delete
              </Col>
            </Row>
            {item &&
              item.map(item => {
                return <OrderSummary item={item} key={item._id} />;
              })}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ListingOrders;
