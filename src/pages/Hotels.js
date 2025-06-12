import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hotel from '../components/Hotel';

const hotels = [
  { name: 'Hotel A', description: 'A comfortable stay.', image: '/images/hotel-a.jpg' },
  { name: 'Hotel B', description: 'Luxury redefined.', image: '/images/hotel-b.jpg' },
];

const Hotels = () => {
  return (
    <Container>
      <h1>Hotels</h1>
      <Row>
        {hotels.map((hotel, index) => (
          <Hotel key={index} {...hotel} />
        ))}
      </Row>
    </Container>
  );
};

export default Hotels;
