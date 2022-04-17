import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

const ProductCard = () => {
  return (
    <Container>
      <h2 className="text-center mt-4">Blog</h2>
      <Row className="justify-content-md-center">
        <Card
          style={{
            width: "20rem",
            margin: "20px 20px"
          }}
        >
          <Card.Img variant="top" src="https://picsum.photos/id/1001/500/500" />
          <Card.Body>
            <Card.Title>Kayaking</Card.Title>
            <Card.Text>
              We deliver a range of courses, taster sessions or adventures for
              trail running, skyrunning, rock climbing, mountain biking,
              scrambling and more.
            </Card.Text>
            <Button variant="success">Sign Up</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20rem",
            margin: "20px 20px"
          }}
        >
          <Card.Img variant="top" src="https://picsum.photos/id/101/500/500" />
          <Card.Body>
            <Card.Title>Tree Climbing</Card.Title>
            <Card.Text>
              Whether you want to learn new skills, improve your knowledge, try
              something new or enjoy the outdoors, everyone deserves adventure.
            </Card.Text>
            <Button variant="danger">Sign Up</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20rem",
            margin: "20px 20px"
          }}
        >
          <Card.Img variant="top" src="https://picsum.photos/id/1053/500/500" />
          <Card.Body>
            <Card.Title>Biking</Card.Title>
            <Card.Text>
              Climbing has seen a huge increase in numbers over the last few
              years. With the majority of people learning on artificial climbing
              walls. Give it shot!
            </Card.Text>
            <Button variant="warning">Sign Up</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default ProductCard;
