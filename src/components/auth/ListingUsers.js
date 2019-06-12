import React from "react";
import UserSummary from './UserSummary'
import { Col, Row, Card } from "react-materialize";

const ListingUsers = ({ users }) => {
  return (
    <div className="ListingUser">
      <Row>
        <Col m={12} s={12}>
          <Card
            className="blue-grey darken-1 center"
            textClassName="white-text"
            title="Displaying Users"
          >
            <Row>
              <Col s={4} className=" white-text">
                _id
              </Col>
              <Col s={4} className=" white-text">
                email
              </Col>
              <Col s={4} className=" white-text">
                Delete
              </Col>
            </Row>
            {users &&
              users.map(users => {
                return <UserSummary users={users} key={users._id} />;
              })}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ListingUsers;
