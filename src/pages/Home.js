import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4 mb-4">Welcome to Travel App</h1>
          <p className="lead mb-4">
            Plan your next adventure with us. Discover new places, book your trips, and explore the world.
          </p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
