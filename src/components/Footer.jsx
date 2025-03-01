import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-white" style={{ padding: '5px 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p className="mb-0">© 2024 Pranav Pandey. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
