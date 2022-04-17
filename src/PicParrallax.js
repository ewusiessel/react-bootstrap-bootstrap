import React from "react";
import { Container, Card, Row } from "react-bootstrap";

const PicParrallax = () => {
  return (
    <Container fluid>
      <Row>
        <Card.Img
          className="mt-5"
          src="https://picsum.photos/id/18/800/200"
          alt="parrallax"
        />
      </Row>
    </Container>
  );
};

export default PicParrallax;
