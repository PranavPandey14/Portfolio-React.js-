import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Styles from '../styles/HeroSection.module.css'
import { Link, animateScroll as scroll } from 'react-scroll';

const HeroSection = () => {
  return (
    <Container id='herosection' className="p-0">
      <Row className="align-items-center" style={{ minHeight: '100vh' }}>
        {/* Left side: Text and CTA */}
        <Col md={6} className={`text-center text-md-start px-4 ${Styles.heroSectionText}`}>
          <h1 className={`display-4 ${Styles.heading}`}>Hi, I'm Pranav</h1>
          <p style={{ fontWeight: "500" }} className="lead mb-4">I'm a <span className={Styles.highlightedText}>Software Developer</span> based in Delhi, India, focused on developing high-impact software solutions that streamline processes and deliver meaningful value to users.</p>

          <Button className={Styles.contactButton} size="md">
            <Link to="contact" offset={-50} smooth={true} duration={500}>Contact Me</Link>
          </Button>
          {/* <Button className={`${Styles.workButton} mx-2`} size="md"> */}
            <a className={`${Styles.workButton} mx-2`} href="/assets/resume/PranavPandeyResume.pdf" download>Download Resume</a>
          {/* </Button> */}
        </Col>

        {/* Right side: Image */}
        <Col md={6} className={`d-flex justify-content-center ${Styles.heroSectionImage}`}>
          <img
            src="/assets/images/pranav.png" // Provide the correct image path
            alt="My Profile"
            className="img-fluid rounded-pill w-50 w-md-50"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
