import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Destination from '../components/Destination';

const destinations = [
  { name: 'Paris', description: 'The city of love.', image: '/images/paris.jpg' },
  { name: 'New York', description: 'The city that never sleeps.', image: '/images/ny.jpg' },
];

const Destinations = () => {
  return (
    <Container>
      <h1>Popular Destinations</h1>
      <Row>
        {destinations.map((destination, index) => (
          <Destination key={index} {...destination} />
        ))}
      </Row>
    </Container>
  );
};

export default Destinations;
