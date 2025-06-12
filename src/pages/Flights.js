import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Flight from '../components/Flight';

const flights = [
  { origin: 'New York', destination: 'London', time: '10:00 AM', price: 450 },
  { origin: 'London', destination: 'Paris', time: '2:00 PM', price: 150 },
];

const Flights = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-4">Available Flights</h1>
        <Row className="g-4">
          {flights.map((flight, index) => (
            <Flight
              key={index}
              origin={flight.origin}
              destination={flight.destination}
              time={flight.time}
              price={flight.price}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Flights;
