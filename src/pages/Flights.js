import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Flight from '../components/Flight';

const flights = [
  { origin: 'New York', destination: 'London', time: '10:00 AM', price: 450 },
  { origin: 'London', destination: 'Paris', time: '2:00 PM', price: 150 },
];

const Flights = () => {
  return (
    <Container>
      <h1>Flights</h1>
      <Row>
        {flights.map((flight, index) => (
          <Flight key={index} {...flight} />
        ))}
      </Row>
    </Container>
  );
};

export default Flights;
