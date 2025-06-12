import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Activity from '../components/Activity';

const activities = [
  { name: 'City Tour', description: 'Explore the city with our guide.', image: '/images/city-tour.jpg' },
  { name: 'Cooking Class', description: 'Learn to cook local cuisine.', image: '/images/cooking-class.jpg' },
];

const Activities = () => {
  return (
    <Container>
      <h1>Activities</h1>
      <Row>
        {activities.map((activity, index) => (
          <Activity key={index} {...activity} />
        ))}
      </Row>
    </Container>
  );
};

export default Activities;
