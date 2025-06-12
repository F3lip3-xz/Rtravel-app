import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hotel from '../components/Hotel';

const hotels = [
  {
    name: 'Hotel A',
    description: 'A comfortable stay.',
    image: '/images/hotel-a.jpg',
  },
  {
    name: 'Hotel B',
    description: 'Luxury redefined.',
    image: '/images/hotel-b.jpg',
  },
];

const Hotels = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-4">Our Hotels</h1>
        <Row className="g-4">
          {hotels.map((hotel, index) => (
            <Hotel
              key={index}
              name={hotel.name}
              description={hotel.description}
              image={hotel.image}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hotels;
