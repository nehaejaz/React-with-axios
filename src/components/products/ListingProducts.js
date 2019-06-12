import React from "react";
import ProductSummary from './ProductSummary'
import { Col, Row, Card } from "react-materialize";

const ListingProducts = ({ item }) => {
  return (
    <div className="ListingDonor">
      <Row>
        <Col m={12} s={12}>
          <Card
            className="blue-grey darken-1 center"
            textClassName="white-text"
            title="Displaying Products"
          >
            <Row>
              <Col s={3} className=" white-text">
                _id
              </Col>
              <Col s={3} className=" white-text">
                Product name
              </Col>
              <Col s={2} className=" white-text">
                Product price
              </Col>
              <Col s={2} className=" white-text">
                Update
              </Col>
              <Col s={2} className=" white-text">
                Delete
              </Col>
            </Row>
            {item &&
              item.map(item => {
                return <ProductSummary item={item} key={item._id} />;
              })}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ListingProducts;
