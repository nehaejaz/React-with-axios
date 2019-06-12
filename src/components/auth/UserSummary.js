import React from "react";
import { Col, Row, Button } from "react-materialize";

const UserSummary = ({ users }) => {
  return (
    <div className="UserSummary">
      <div className="">
        <Row className="grey">
          <Col s={4}>{users._id}</Col>
          <Col s={4}>{users.email}</Col>
          <Col s={4}><Button className="red">Delete</Button></Col>
        </Row>
      </div>
    </div>
  );
};

export default UserSummary;
