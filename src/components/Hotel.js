import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Hotel = ({ name, description, image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image || '/default-hotel.jpg'} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Hotel;