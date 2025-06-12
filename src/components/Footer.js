import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = ({ year = new Date().getFullYear() }) => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <p className="text-muted">© {year} Travel_App @Felipe Henriquez</p>
      </Container>
    </footer>
  );
};

export default Footer;