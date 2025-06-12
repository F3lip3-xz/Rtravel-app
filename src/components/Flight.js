import React from 'react';
import { Card } from 'react-bootstrap';

const Flight = ({ origin, destination, time, price }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{origin} to {destination}</Card.Title>
        <Card.Text>Time: {time}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Flight;
