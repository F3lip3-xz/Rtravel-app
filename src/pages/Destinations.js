import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Destination from '../components/Destination';

const destinations = [
  {
    name: 'Paris',
    description: 'The city of love.',
    image: '/images/paris.jpg',
  },
  {
    name: 'New York',
    description: 'The city that never sleeps.',
    image: '/images/ny.jpg',
  },
];

const Destinations = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-4">Popular Destinations</h1>
        <Row className="g-4">
          {destinations.map((destination, index) => (
            <Destination
              key={index}
              name={destination.name}
              description={destination.description}
              image={destination.image}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Destinations;
