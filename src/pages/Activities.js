import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Activity from '../components/Activity';

const activities = [
  {
    name: 'City Tour',
    description: 'Explore the city with our guide.',
    image: '/images/city-tour.jpg',
  },
  {
    name: 'Cooking Class',
    description: 'Learn to cook local cuisine.',
    image: '/images/cooking-class.jpg',
  },
];

const Activities = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-4">Exciting Activities</h1>
        <Row className="g-4">
          {activities.map((activity, index) => (
            <Activity
              key={index}
              name={activity.name}
              description={activity.description}
              image={activity.image}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Activities;
