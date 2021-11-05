import React from "react";
import { Container, Nav, Button, Row, Col } from "react-bootstrap";
import Navbar from "../../Components/Navbar/Navbar";
import Suggestions from "../../Components/Suggestions/Suggestions";
import Tweets from "../../Components/Tweets/Tweets";

function index(props) {
  return (
    <>
      <Container>
        <Row>
            <Tweets></Tweets>
        </Row>
      </Container>
    </>
  );
}

export default index;
