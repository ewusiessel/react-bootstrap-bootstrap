import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const Featured = () => {
  return (
    <>
      <Card className="text-center" style={{ border: "none" }}>
        <Container>
          <Card.Header
            className="mt-3"
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <h2>Featured</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text className="pl-5 pr-5">
              With supporting text below as a natural lead-in to additional
              content. lorem ootstrap 4 is built with flexbox, but not every
              element’s display has been changed to display: flex as this would
              add many unnecessary overrides and unexpectedly change key browser
              behaviors. Most of our components are built with flexbox enabled.
            </Card.Text>
            <Button className=" m-1" variant="primary ">
              Go somewhere
            </Button>
            <Button className=" m-1" variant="success">
              Go somewhere
            </Button>
          </Card.Body>
        </Container>
        <hr />
      </Card>
    </>
  );
};

export default Featured;
